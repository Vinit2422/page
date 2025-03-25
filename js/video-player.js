/**
 * Custom Video Player for CG Artist Portfolio
 * Creates a custom video player with advanced controls and styling
 */

// DOM Elements
const customVideoPlayer = document.getElementById('customVideoPlayer');
const video = document.getElementById('projectVideo');
const videoOverlay = document.querySelector('.video-overlay');
const playPauseBtn = document.querySelector('.play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const volumeBtn = document.querySelector('.volume-btn');
const volumeSlider = document.querySelector('.volume-progress');
const volumeFilled = document.querySelector('.volume-filled');
const fullscreenBtn = document.querySelector('.fullscreen-btn');

// Check if video elements exist on the page
const isVideoPage = document.querySelector('.video-showcase') !== null;

if (isVideoPage && video) {
    // Set up video event listeners
    initVideoPlayer();
}

function initVideoPlayer() {
    // Initial setup
    updateVolumeIcon();
    
    // Play/Pause via overlay click
    videoOverlay.addEventListener('click', togglePlay);
    
    // Play/Pause via button click
    playPauseBtn.addEventListener('click', togglePlay);
    
    // Update play/pause button icon
    video.addEventListener('play', updatePlayPauseIcon);
    video.addEventListener('pause', updatePlayPauseIcon);
    
    // Update progress bar and time display
    video.addEventListener('timeupdate', updateProgress);
    
    // Allow seeking by clicking on progress bar
    progressBar.addEventListener('click', seek);
    
    // Volume control
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('click', changeVolume);
    
    // Fullscreen control
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Update duration display when video metadata is loaded
    video.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(video.duration);
        currentTimeEl.textContent = formatTime(0);
    });
    
    // Hide overlay when video ends
    video.addEventListener('ended', () => {
        video.currentTime = 0;
        updatePlayPauseIcon();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeydown);
}

// Toggle play/pause
function togglePlay() {
    const vimeoPlayer = document.getElementById('vimeoPlayer');
    const vimeoContainer = document.querySelector('.vimeo-embed-container');
    
    // Check if Vimeo player is visible
    if (vimeoContainer && vimeoContainer.style.display !== 'none') {
        // Get the Vimeo iframe
        if (vimeoPlayer) {
            // Post message to Vimeo player to play/pause
            // Using Vimeo Player API via postMessage
            const isPlaying = customVideoPlayer.classList.contains('playing');
            
            if (isPlaying) {
                // Pause Vimeo video
                vimeoPlayer.contentWindow.postMessage('{"method":"pause"}', '*');
                customVideoPlayer.classList.remove('playing');
                videoOverlay.classList.remove('hidden');
            } else {
                // Play Vimeo video
                vimeoPlayer.contentWindow.postMessage('{"method":"play"}', '*');
                customVideoPlayer.classList.add('playing');
                videoOverlay.classList.add('hidden');
            }
            
            // Update the play/pause icon
            updatePlayPauseIcon();
        }
    } 
    // Otherwise use the normal HTML5 video player
    else if (video) {
        if (video.paused) {
            video.play();
            videoOverlay.classList.add('hidden');
            customVideoPlayer.classList.add('playing');
        } else {
            video.pause();
            videoOverlay.classList.remove('hidden');
            customVideoPlayer.classList.remove('playing');
        }
    }
}

// Update play/pause icon
function updatePlayPauseIcon() {
    const icon = playPauseBtn.querySelector('i');
    const vimeoContainer = document.querySelector('.vimeo-embed-container');
    const isPlaying = customVideoPlayer.classList.contains('playing');
    
    // Handle both Vimeo and standard video states
    if (vimeoContainer && vimeoContainer.style.display !== 'none') {
        // For Vimeo we use the customVideoPlayer.playing class to determine state
        if (isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            videoOverlay.classList.add('hidden');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            videoOverlay.classList.remove('hidden');
        }
    } else {
        // For standard HTML5 video
        if (video.paused) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            videoOverlay.classList.remove('hidden');
            customVideoPlayer.classList.remove('playing');
        } else {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            videoOverlay.classList.add('hidden');
            customVideoPlayer.classList.add('playing');
        }
    }
}

// Update progress bar and time display
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(video.currentTime);
}

// Allow seeking by clicking on progress bar
function seek(e) {
    const progressWidth = progressBar.clientWidth;
    const clickPosition = e.offsetX;
    const seekTime = (clickPosition / progressWidth) * video.duration;
    video.currentTime = seekTime;
}

// Toggle mute
function toggleMute() {
    video.muted = !video.muted;
    updateVolumeIcon();
    updateVolumeBar();
}

// Update volume icon based on current volume
function updateVolumeIcon() {
    const icon = volumeBtn.querySelector('i');
    icon.classList.remove('fa-volume-up', 'fa-volume-down', 'fa-volume-mute');
    
    if (video.muted || video.volume === 0) {
        icon.classList.add('fa-volume-mute');
    } else if (video.volume < 0.5) {
        icon.classList.add('fa-volume-down');
    } else {
        icon.classList.add('fa-volume-up');
    }
}

// Change volume by clicking on volume slider
function changeVolume(e) {
    const sliderWidth = volumeSlider.clientWidth;
    const clickPosition = e.offsetX;
    const newVolume = clickPosition / sliderWidth;
    
    // Set volume (0 to 1)
    video.volume = Math.max(0, Math.min(1, newVolume));
    video.muted = false;
    
    updateVolumeBar();
    updateVolumeIcon();
}

// Update volume bar display
function updateVolumeBar() {
    const volumeLevel = video.muted ? 0 : video.volume;
    volumeFilled.style.width = `${volumeLevel * 100}%`;
}

// Toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (customVideoPlayer.requestFullscreen) {
            customVideoPlayer.requestFullscreen();
        } else if (customVideoPlayer.mozRequestFullScreen) {
            customVideoPlayer.mozRequestFullScreen();
        } else if (customVideoPlayer.webkitRequestFullscreen) {
            customVideoPlayer.webkitRequestFullscreen();
        } else if (customVideoPlayer.msRequestFullscreen) {
            customVideoPlayer.msRequestFullscreen();
        }
        customVideoPlayer.classList.add('fullscreen');
        fullscreenBtn.querySelector('i').classList.remove('fa-expand');
        fullscreenBtn.querySelector('i').classList.add('fa-compress');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        customVideoPlayer.classList.remove('fullscreen');
        fullscreenBtn.querySelector('i').classList.remove('fa-compress');
        fullscreenBtn.querySelector('i').classList.add('fa-expand');
    }
}

// Keyboard shortcuts
function handleKeydown(e) {
    // Only handle keys if video is in focus (user has clicked on player)
    if (!isVideoPage || !customVideoPlayer.contains(document.activeElement)) return;
    
    switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
            togglePlay();
            e.preventDefault();
            break;
        case 'm':
            toggleMute();
            e.preventDefault();
            break;
        case 'f':
            toggleFullscreen();
            e.preventDefault();
            break;
        case 'arrowright':
            // Skip forward 5 seconds
            video.currentTime = Math.min(video.duration, video.currentTime + 5);
            e.preventDefault();
            break;
        case 'arrowleft':
            // Skip backward 5 seconds
            video.currentTime = Math.max(0, video.currentTime - 5);
            e.preventDefault();
            break;
        case 'arrowup':
            // Increase volume
            video.volume = Math.min(1, video.volume + 0.1);
            video.muted = false;
            updateVolumeBar();
            updateVolumeIcon();
            e.preventDefault();
            break;
        case 'arrowdown':
            // Decrease volume
            video.volume = Math.max(0, video.volume - 0.1);
            updateVolumeBar();
            updateVolumeIcon();
            e.preventDefault();
            break;
    }
}

// Format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Add event listener for fullscreen change
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        customVideoPlayer.classList.remove('fullscreen');
        fullscreenBtn.querySelector('i').classList.remove('fa-compress');
        fullscreenBtn.querySelector('i').classList.add('fa-expand');
    }
});
