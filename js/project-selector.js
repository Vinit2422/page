/**
 * Project Selector for CG Artist Portfolio
 * Handles project thumbnail selection and video switching
 */

// DOM Elements
const projectThumbs = document.querySelectorAll('.project-thumb');
const projectVideo = document.getElementById('projectVideo');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectSoftware = document.getElementById('projectSoftware');
const projectYear = document.getElementById('projectYear');

// Project data with all videos from each category
const projectData = [
    {
        id: 1,
        title: "2D Animation",
        description: "This 2D animation uses lively graphics and smooth action to bring stories to life. Every frame is painstakingly created to provide a cohesive narrative experience by fusing contemporary design features with traditional animation methods.",
        category: "2d-animation",
        software: "Adobe After Effects, Photoshop",
        videos: [
            {
                src: "projects/2d animation/A1_Sanghvi_Vinit_final.mov",
                title: "2D Animation Final"
            },
            {
                src: "projects/2d animation/A3_sanghvi_vinit_final_resubmission.mov",
                title: "Character Animation"
            },
            {
                src: "projects/2d animation/Sanghvi_Vinit_Anticipation_A4_Final.mov",
                title: "Anticipation Animation"
            },
            {
                src: "projects/2d animation/Sanghvi_Vinit_HeadTurn_A1_Final.mov",
                title: "Head Turn Animation"
            },
            {
                src: "projects/2d animation/Sanghvi_vinit_Storyboard and Sound Design.mp4",
                title: "Storyboard Animation"
            }
        ]
    },
    {
        id: 2,
        title: "3D Animation",
        description: "Discover the artistry of this expertly crafted 3D animation, where cutting-edge technology meets creative storytelling. With fluid motion, intricate detailing, and compelling visual effects, each frame offers a seamless narrative experience",
        category: "3d-animation",
        software: "Maya, Blender",
        videos: [
            {
                src: "projects/Animation/A1_Sanghvi_Vinit_Final.mov",
                title: "3D Animation Final"
            },
            {
                src: "projects/Animation/A2_Finl.mov",
                title: "Animation Project 2"
            },
            {
                src: "projects/Animation/A2_Sanghvi_Vinit_Final.mov",
                title: "Character Animation"
            },
            {
                src: "projects/Animation/A3 Character Walk Cycle_Back.mov",
                title: "Walk Cycle Back View"
            },
            {
                src: "projects/Animation/A3 Character Walk Cycle_Front.mov",
                title: "Walk Cycle Front View"
            },
            {
                src: "projects/Animation/A4 Character Anticipation and Jump_scene.mov",
                title: "Jump Animation"
            }
        ]
    },
    {
        id: 3,
        title: "Lighting & Texturing",
        description: "Carefully considered lighting and texturing techniques enhance the scene's realism and depth in this 3D creation. To establish mood, draw attention to important details, and improve the overall ambiance, the lighting has been carefully planned.",
        category: "lighting-texturing",
        software: "Blender, Substance Painter",
        images: [
            {
                src: "projects/Lighting& Texturing/A2_Vinit_Sanghvi_Final_01.png",
                title: "Lighting Study 1"
            },
            {
                src: "projects/Lighting& Texturing/A2_Vinit_Sanghvi_Final_02.png",
                title: "Lighting Study 2"
            },
            {
                src: "projects/Lighting& Texturing/A2_Vinit_Sanghvi_Final_03.png",
                title: "Lighting Study 3"
            },
            {
                src: "projects/Lighting& Texturing/A3_Vinit_Sanghvi_Final_01.png",
                title: "Material Study"
            },
            {
                src: "projects/Lighting& Texturing/A4_Vinit_Sanghvi_Final_01.png",
                title: "Environment Lighting"
            },
            {
                src: "projects/Lighting& Texturing/A5_Vinit_Sanghvi_final_01.png",
                title: "Lighting Study 4"
            }
        ]
    },
    {
        id: 4,
        title: "Sketches",
        description: "The complexity and fine detail in these portrait sketches perfectly convey the essence of human emotion. Every stroke is well executed to bring forth the character's characteristics and feelings while striking a balance between creative interpretation and realism.",
        category: "sketches",
        software: "Traditional Media, Digital Tools",
        images: [
            {
                src: "projects/Sketch/IMG_20190422_082314.jpg",
                title: "Portrait Study 1"
            },
            {
                src: "projects/Sketch/IMG_20190430_210605.jpg",
                title: "Portrait Study 2"
            },
            {
                src: "projects/Sketch/IMG_20191216_214921.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20200322_112651_847.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20200429_212426_603.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20200430_190733_523.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20200728_112603_101.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20200924_170449.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20210604_100246_760.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG_20230801_162200.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG-20190125-WA0054.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/IMG-20190804-WA0001.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/LRM_EXPORT_32124353872789_20190921_175521574.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/LRM_EXPORT_158271690355039_20191207_202653207.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/PicsArt_04-12-12.44.35-01.jpg",
                title: "Character Sketch"
            },
            {
                src: "projects/Sketch/PicsArt_06-27-11.06.55.jpg",
                title: "Character Sketch"
            }
            // ... more sketches ...
        ]
    },
    {
        id: 5,
        title: "VFX & Motion Graphics",
        description: "This project demonstrates sophisticated visual effects and graphics that combine dynamic motion and visual effects seamlessly to improve visual appeal and narrative. Every component is intended to enthrall and fascinate.",
        category: "vfx-motion",
        software: "After Effects, Cinema 4D",
        videos: [
            {
                src: "projects/vfx& motion Graphics/DMED1510_A3_SANGHVI_VINIT.mp4",
                title: "VFX Project 1"
            },
            {
                src: "projects/vfx& motion Graphics/DMED1510_A5_Sanghvi_vinit..mp4",
                title: "Motion Graphics"
            },
            {
                src: "projects/vfx& motion Graphics/DMED1510_a7_Sanghvi_Vinit.mp4",
                title: "Visual Effects"
            },
            {
                src: "projects/vfx& motion Graphics/DMED1510_Sanghvi_Vinit_a1_adidas.mp4",
                title: "Adidas Animation"
            },
            {
                src: "projects/vfx& motion Graphics/Sanghvi_Vinit_BOUNCING BALL.mp4",
                title: "Bouncing Ball Study"
            }
        ]
    },
    {
        id: 6,
        title: "Digital art work",
        description: "This project demonstrates sophisticated visual effects and graphics that combine dynamic motion and visual effects seamlessly to improve visual appeal and narrative. Every component is intended to enthrall and fascinate.",
        category: "Digital-art-work",
        software: "After Effects, Cinema 4D",
        videos: [
            {
                src: "projects/Digital art work/1.jpeg",
                title: "Project 1"
            },
            {
                src: "projects/Digital art work/2.jpeg",
                title: "Graphics"
            }
        ]
    }
];

// Check if we're on the projects page
const isProjectsPage = document.querySelector('.project-selector') !== null;

if (isProjectsPage) {
    // Add click events to thumbnails
    projectThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => selectProject(thumb));
    });
}

// Keeping track of current video in a category
let currentVideoIndex = 0;

// Select a project and update the video and info
function selectProject(thumbElement) {
    // Remove active class from all thumbnails
    projectThumbs.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to selected thumbnail
    thumbElement.classList.add('active');
    
    // Get project ID from data attribute
    const projectId = parseInt(thumbElement.dataset.project);
    const category = thumbElement.dataset.category;
    
    // Find the selected project
    const selectedProject = projectData.find(project => project.id === projectId);
    
    if (selectedProject) {
        // Reset video index when switching categories
        currentVideoIndex = 0;
        
        // Update project info
        updateProjectInfo(selectedProject);
        
        // Update the video source
        updateVideoSource(selectedProject);
        
        // Populate the video preview list
        populateVideoPreviewList(selectedProject);

        // Add video navigation if there are multiple videos
        setupVideoNavigation(selectedProject);
    }
}

// Update project info in the DOM
function updateProjectInfo(project) {
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectCategory.textContent = project.title;
    projectSoftware.textContent = project.software;
}

// Update video source to handle both videos and images
function updateVideoSource(project) {
    const videoPlayer = document.getElementById('projectVideo');
    const videoContainer = document.querySelector('.video-container');
    const source = videoPlayer.querySelector('source');
    const content = (project.videos && project.videos[currentVideoIndex]) || 
                   (project.images && project.images[currentVideoIndex]);
    
    if (!content) return;
    
    // Clear any existing image overlay
    const existingOverlayImage = videoContainer.querySelector('.image-overlay');
    if (existingOverlayImage) {
        existingOverlayImage.remove();
    }

    if (content.src.endsWith('.mp4') || content.src.endsWith('.mov')) {
        // Handle video files
        source.src = content.src;
        videoPlayer.poster = ''; // Clear any poster image
        videoPlayer.load();
        videoPlayer.style.display = 'block';
        
        // Show video controls
        document.querySelector('.video-controls').style.display = 'flex';
        document.querySelector('.video-overlay').style.display = 'flex';
        
    } else if (content.src.endsWith('.jpeg') || content.src.endsWith('.png') || content.src.endsWith('.jpg')) {
        // Handle image files
        videoPlayer.style.display = 'none';
        document.querySelector('.video-controls').style.display = 'none';
        document.querySelector('.video-overlay').style.display = 'none';
        
        // Create and append image element
        const imageElement = document.createElement('div');
        imageElement.className = 'image-overlay';
        imageElement.style.backgroundImage = `url(${content.src})`;
        imageElement.style.backgroundSize = 'contain';
        imageElement.style.backgroundPosition = 'center';
        imageElement.style.backgroundRepeat = 'no-repeat';
        imageElement.style.position = 'absolute';
        imageElement.style.top = '0';
        imageElement.style.left = '0';
        imageElement.style.width = '100%';
        imageElement.style.height = '100%';
        videoContainer.appendChild(imageElement);
    }

    // Update video/image title if it exists
    const videoTitle = document.querySelector('.video-title');
    if (videoTitle) {
        videoTitle.textContent = content.title;
    }
}

// Setup navigation for multiple videos/images in a category
function setupVideoNavigation(project) {
    const content = project.videos || project.images || [];
    const navigationContainer = document.querySelector('.video-navigation');
    
    // Create navigation if it doesn't exist
    if (!navigationContainer && content.length > 1) {
        const nav = document.createElement('div');
        nav.className = 'video-navigation';
        
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => navigateVideo(-1, content.length);
        
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => navigateVideo(1, content.length);
        
        nav.appendChild(prevBtn);
        nav.appendChild(nextBtn);
        
        document.querySelector('.video-container').appendChild(nav);
    }
}

// Navigate between videos/images in a category
function navigateVideo(direction, totalItems) {
    currentVideoIndex = (currentVideoIndex + direction + totalItems) % totalItems;
    const activeThumb = document.querySelector('.project-thumb.active');
    const projectId = parseInt(activeThumb.dataset.project);
    const project = projectData.find(p => p.id === projectId);
    
    if (project) {
        updateVideoSource(project);
    }
}

// Populate the video selection dropdown
function populateVideoDropdown(project) {
    console.log('Populating video dropdown for project:', project.title); // Debug log
    const videoDropdown = document.getElementById('videoSelectionDropdown');
    videoDropdown.innerHTML = ''; // Clear existing options

    if (project.videos && project.videos.length > 0) {
        project.videos.forEach((video, index) => {
            console.log('Adding video to dropdown:', video.title); // Debug log
            const option = document.createElement('option');
            option.value = index;
            option.textContent = video.title;
            videoDropdown.appendChild(option);
        });

        // Set the first video as selected by default
        videoDropdown.value = currentVideoIndex;
    }
}

// Handle video selection from the dropdown
function handleDropdownSelection(event) {
    const selectedIndex = parseInt(event.target.value, 10);
    const activeThumb = document.querySelector('.project-thumb.active');
    const projectId = parseInt(activeThumb.dataset.project);
    const project = projectData.find(p => p.id === projectId);

    if (project && project.videos && project.videos[selectedIndex]) {
        currentVideoIndex = selectedIndex;
        updateVideoSource(project);
    }
}

// Add event listener for video dropdown selection
document.getElementById('videoSelectionDropdown').addEventListener('change', handleDropdownSelection);

// Populate the video preview list with videos or images
function populateVideoPreviewList(project) {
    const videoPreviewList = document.getElementById('videoPreviewList');
    videoPreviewList.innerHTML = ''; // Clear existing previews

    const content = project.videos || project.images || [];

    if (content.length > 0) {
        content.forEach((item, index) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'video-preview-item';
            previewItem.dataset.index = index;

            // Create thumbnail (video or image)
            let thumbnail;
            if (item.src.endsWith('.mp4') || item.src.endsWith('.mov')) {
                thumbnail = document.createElement('video');
                thumbnail.src = item.src;
                thumbnail.className = 'video-thumbnail';
                thumbnail.muted = true;
                thumbnail.loop = true;
                thumbnail.play();
            } else if (item.src.endsWith('.jpeg') || item.src.endsWith('.png') || item.src.endsWith('.jpg')) {
                thumbnail = document.createElement('img');
                thumbnail.src = item.src;
                thumbnail.className = 'image-thumbnail';
            }

            // Create title
            const title = document.createElement('p');
            title.textContent = item.title;
            title.className = 'video-title';

            // Append thumbnail and title to preview item
            previewItem.appendChild(thumbnail);
            previewItem.appendChild(title);

            // Add click event to update the main video/image player
            previewItem.addEventListener('click', () => {
                currentVideoIndex = index;
                updateVideoSource(project);
            });

            // Append preview item to the list
            videoPreviewList.appendChild(previewItem);
        });
    }
}

// Initialize the first project on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isProjectsPage && projectThumbs.length > 0) {
        // Select the first thumbnail by default
        selectProject(projectThumbs[0]);
    }
});
