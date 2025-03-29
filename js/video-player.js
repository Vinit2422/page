document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.video-showcase')) {
        initializeVideoControls();
        setupMediaNavigation();
    }
});

function initializeVideoControls() {
    // DOM Elements
    const customVideoPlayer = document.getElementById('customVideoPlayer');
    const video = document.getElementById('projectVideo');
    const videoOverlay = document.querySelector('.video-overlay');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressFilled = document.querySelector('.progress-filled');

    if (!video || !customVideoPlayer) return;

    // Event Listeners
    videoOverlay?.addEventListener('click', togglePlay);
    playPauseBtn?.addEventListener('click', togglePlay);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);
    video.addEventListener('timeupdate', updateProgress);
    progressBar?.addEventListener('click', seek);

    // Functions
    function togglePlay() {
        if (video.paused) {
            video.play();
            videoOverlay?.classList.add('hidden');
        } else {
            video.pause();
            videoOverlay?.classList.remove('hidden');
        }
    }

    function updatePlayIcon() {
        const icon = playPauseBtn?.querySelector('i');
        if (!icon) return;
        
        if (video.paused) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            videoOverlay?.classList.remove('hidden');
            customVideoPlayer.classList.remove('playing');
        } else {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            videoOverlay?.classList.add('hidden');
            customVideoPlayer.classList.add('playing');
        }
    }

    function updateProgress() {
        if (!progressFilled) return;
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
    }

    function seek(e) {
        if (!video.duration) return;
        const seekTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        video.currentTime = seekTime;
    }
}

function setupMediaNavigation() {
    const container = document.querySelector('.video-container');
    if (!container) return;

    // Add navigation buttons if they don't exist
    if (!container.querySelector('.media-nav-buttons')) {
        const navButtons = document.createElement('div');
        navButtons.className = 'media-nav-buttons';
        navButtons.innerHTML = `
            <button class="nav-button prev-button">
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button class="nav-button next-button">
                <i class="fas fa-chevron-right"></i> Next
            </button>
        `;
        container.appendChild(navButtons);

        // Add event listeners
        const prevButton = navButtons.querySelector('.prev-button');
        const nextButton = navButtons.querySelector('.next-button');

        prevButton?.addEventListener('click', () => {
            if (typeof previousMedia === 'function') {
                previousMedia();
            }
        });

        nextButton?.addEventListener('click', () => {
            if (typeof nextMedia === 'function') {
                nextMedia();
            }
        });
    }

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!document.querySelector('.video-showcase')) return;

        switch(e.key) {
            case 'ArrowLeft':
                if (typeof previousMedia === 'function') {
                    previousMedia();
                }
                break;
            case 'ArrowRight':
                if (typeof nextMedia === 'function') {
                    nextMedia();
                }
                break;
        }
    });
}
