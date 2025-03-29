// Project Selector and Media Gallery
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});

// Store the loaded media items
let mediaGallery = {
    currentCategory: '',
    categories: {},
    currentIndex: 0
};

async function initializeGallery() {
    // Get category folders from projects directory
    const categories = [
        '2d animation',
        'Animation',
        'Digital art work',
        'Lighting& Texturing',
        'Sketch',
        'vfx& motion Graphics'
    ];

    // Create category thumbnails
    const galleryContainer = document.querySelector('.project-thumbnails');
    if (!galleryContainer) return;

    // Clear existing content
    galleryContainer.innerHTML = '';

    // Create thumbnails for each category
    categories.forEach((category, index) => {
        const thumb = createCategoryThumb(category, index);
        galleryContainer.appendChild(thumb);
    });

    // Select first category by default
    const firstThumb = galleryContainer.querySelector('.project-thumb');
    if (firstThumb) {
        selectCategory(firstThumb);
    }
}

function createCategoryThumb(category, index) {
    const thumb = document.createElement('div');
    thumb.className = 'project-thumb';
    thumb.setAttribute('data-category', category);
    thumb.setAttribute('data-index', index);

    const overlay = document.createElement('div');
    overlay.className = 'thumb-overlay';
    
    const title = document.createElement('h4');
    title.textContent = formatCategoryName(category);
    
    const desc = document.createElement('p');
    desc.textContent = getCategoryDescription(category);
    
    overlay.appendChild(title);
    overlay.appendChild(desc);
    thumb.appendChild(overlay);
    
    thumb.addEventListener('click', () => selectCategory(thumb));
    
    return thumb;
}

function formatCategoryName(category) {
    return category
        .split('&')
        .map(part => part.trim()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        )
        .join(' & ');
}

function getCategoryDescription(category) {
    const descriptions = {
        '2d animation': 'Traditional and Digital 2D Animations',
        'Animation': '3D Character and Scene Animations',
        'Digital art work': 'Digital Illustrations and Artwork',
        'Lighting& Texturing': '3D Lighting and Material Studies',
        'Sketch': 'Traditional Sketches and Drawings',
        'vfx& motion Graphics': 'Visual Effects and Motion Design'
    };
    return descriptions[category] || 'Project Category';
}

function selectCategory(thumbElement) {
    // Update active state
    document.querySelectorAll('.project-thumb').forEach(thumb => 
        thumb.classList.remove('active'));
    thumbElement.classList.add('active');
    
    const category = thumbElement.getAttribute('data-category');
    loadCategoryContent(category);
}

function loadCategoryContent(category) {
    // Reset current position
    mediaGallery.currentIndex = 0;
    mediaGallery.currentCategory = category;
    
    // Get all media files from the category folder
    const mediaFiles = getMediaFilesForCategory(category);
    mediaGallery.categories[category] = mediaFiles;
    
    // Update the media display
    if (mediaFiles.length > 0) {
        displayMedia(mediaFiles[0]);
        updateMediaList(mediaFiles);
    }
}

function getMediaFilesForCategory(category) {
    const baseDir = `projects/${category}`;
    const mediaFiles = [];

    switch(category) {
        case '2d animation':
            return [
                { path: `${baseDir}/A1_Sanghvi_Vinit_final.mov`, type: 'video' },
                { path: `${baseDir}/A3_sanghvi_vinit_final_resubmission.mov`, type: 'video' },
                { path: `${baseDir}/Sanghvi_Vinit_Anticipation_A4_Final.mov`, type: 'video' },
                { path: `${baseDir}/Sanghvi_Vinit_HeadTurn_A1_Final.mov`, type: 'video' },
                { path: `${baseDir}/Sanghvi_vinit_Storyboard and Sound Design.mp4`, type: 'video' },
                { path: `${baseDir}/Sanghvi_Vinit_Week2_Ex1.mov`, type: 'video' }
            ];

        case 'Animation':
            return [
                { path: `${baseDir}/A1_Sanghvi_Vinit_Final.mov`, type: 'video' },
                { path: `${baseDir}/A2_Finl.mov`, type: 'video' },
                { path: `${baseDir}/A2_Sanghvi_Vinit_Final.mov`, type: 'video' },
                { path: `${baseDir}/A3 Character Walk Cycle_Back.mov`, type: 'video' },
                { path: `${baseDir}/A3 Character Walk Cycle_Final.mov`, type: 'video' },
                { path: `${baseDir}/A3 Character Walk Cycle_Front.mov`, type: 'video' },
                { path: `${baseDir}/A4 Character Anticipation and Jump_scene.mov`, type: 'video' }
            ];

        case 'Digital art work':
            return [
                { path: `${baseDir}/1.jpeg`, type: 'image' },
                { path: `${baseDir}/2.jpeg`, type: 'image' }
            ];

        case 'Lighting& Texturing':
            return [
                { path: `${baseDir}/A2_Vinit_Sanghvi_Final_01.png`, type: 'image' },
                { path: `${baseDir}/A2_Vinit_Sanghvi_Final_02.png`, type: 'image' },
                { path: `${baseDir}/A2_Vinit_Sanghvi_Final_03.png`, type: 'image' },
                { path: `${baseDir}/A3_Vinit_Sanghvi_Final_01.png`, type: 'image' },
                { path: `${baseDir}/A4_Vinit_Sanghvi_Final_01.png`, type: 'image' },
                { path: `${baseDir}/A5_Vinit_Sanghvi_final_01.png`, type: 'image' }
            ];

        case 'Sketch':
            return [
                { path: `${baseDir}/IMG_20190422_082314.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20190430_210605.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20191216_214921.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20200322_112651_847.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20200429_212426_603.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20200430_190733_523.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20200728_112603_101.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20200924_170449.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20210604_100246_760.jpg`, type: 'image' },
                { path: `${baseDir}/IMG_20230801_162200.jpg`, type: 'image' },
                { path: `${baseDir}/IMG-20190125-WA0054.jpg`, type: 'image' },
                { path: `${baseDir}/IMG-20190804-WA0001.jpg`, type: 'image' },
                { path: `${baseDir}/LRM_EXPORT_158271690355039_20191207_202653207.jpg`, type: 'image' },
                { path: `${baseDir}/LRM_EXPORT_32124353872789_20190921_175521574.jpg`, type: 'image' },
                { path: `${baseDir}/PicsArt_04-12-12.44.35-01.jpg`, type: 'image' },
                { path: `${baseDir}/PicsArt_04-24-02.35.08-02.jpg`, type: 'image' },
                { path: `${baseDir}/PicsArt_06-27-11.06.55.jpg`, type: 'image' }
            ];

        case 'vfx& motion Graphics':
            return [
                { path: `${baseDir}/DMED1510_A3_SANGHVI_VINIT.mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_A3_SHAIKH_AMAN.mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_A5_Sanghvi_vinit..mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_A6_Aman_Shaikh.mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_a7_Sanghvi_Vinit.mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_Sanghvi_Vinit_a1_adidas.mp4`, type: 'video' },
                { path: `${baseDir}/DMED1510_SANGHVI_Vinit_a1_name on black.mp4`, type: 'video' },
                { path: `${baseDir}/Sanghvi_Vinit_BOUNCING BALL.mp4`, type: 'video' }
            ];

        default:
            return [];
    }
}

function displayMedia(mediaItem) {
    const container = document.querySelector('.video-container');
    const video = container.querySelector('video');
    const source = video.querySelector('source');

    // Clear any existing media display
    const imgDisplay = container.querySelector('.image-display');
    if (imgDisplay) {
        imgDisplay.remove();
    }
    video.style.display = 'none';

    if (mediaItem.type === 'video') {
        video.style.display = 'block';
        source.src = mediaItem.path;
        video.load();
    } else if (mediaItem.type === 'image') {
        // Create or update image display
        let imgDisplay = document.createElement('div');
        imgDisplay.className = 'image-display';
        imgDisplay.style.backgroundImage = `url('${mediaItem.path}')`;
        container.appendChild(imgDisplay);
    }

    updateMediaInfo(mediaItem);
}

function updateMediaInfo(mediaItem) {
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');
    const category = document.getElementById('projectCategory');
    
    if (title) title.textContent = formatCategoryName(mediaGallery.currentCategory);
    if (category) category.textContent = formatCategoryName(mediaGallery.currentCategory);
    if (description) {
        description.textContent = getCategoryDescription(mediaGallery.currentCategory);
    }
}

function updateMediaList(mediaFiles) {
    const listContainer = document.getElementById('videoPreviewList');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    mediaFiles.forEach((media, index) => {
        const preview = createMediaPreview(media, index);
        listContainer.appendChild(preview);
    });
}

function createMediaPreview(media, index) {
    const preview = document.createElement('div');
    preview.className = 'media-preview';
    preview.setAttribute('data-index', index);
    
    // Create thumbnail based on media type
    if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.path;
        video.muted = true;
        preview.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = media.path;
        preview.appendChild(img);
    }
    
    preview.addEventListener('click', () => {
        mediaGallery.currentIndex = index;
        displayMedia(media);
    });
    
    return preview;
}

// Navigation functions
function nextMedia() {
    const currentCategory = mediaGallery.categories[mediaGallery.currentCategory];
    if (!currentCategory || currentCategory.length === 0) return;
    
    mediaGallery.currentIndex = (mediaGallery.currentIndex + 1) % currentCategory.length;
    displayMedia(currentCategory[mediaGallery.currentIndex]);
}

function previousMedia() {
    const currentCategory = mediaGallery.categories[mediaGallery.currentCategory];
    if (!currentCategory || currentCategory.length === 0) return;
    
    mediaGallery.currentIndex = (mediaGallery.currentIndex - 1 + currentCategory.length) % currentCategory.length;
    displayMedia(currentCategory[mediaGallery.currentIndex]);
}
