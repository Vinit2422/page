    /**
 * Featured Video Handler for CG Artist Portfolio
 * Controls Vimeo video behavior in the featured work section
 */

document.addEventListener('DOMContentLoaded', () => {
    setupFeaturedVideos();
});

function setupFeaturedVideos() {
    // Get all featured items with Vimeo embeds
    const featuredItems = document.querySelectorAll('.featured-item');
    
    if (!featuredItems.length) return;
    
    // Setup each featured item
    featuredItems.forEach(item => {
        const overlay = item.querySelector('.featured-overlay');
        const iframe = item.querySelector('iframe');
        
        if (!overlay || !iframe) return;
        
        // When hovering over the item, play video
        item.addEventListener('mouseenter', () => {
            try {
                // Send play command to Vimeo iframe
                iframe.contentWindow.postMessage(JSON.stringify({
                    method: 'play'
                }), '*');
            } catch (e) {
                console.log('Could not play Vimeo video', e);
            }
        });
        
        // When mouse leaves, pause video
        item.addEventListener('mouseleave', () => {
            try {
                // Send pause command to Vimeo iframe
                iframe.contentWindow.postMessage(JSON.stringify({
                    method: 'pause'
                }), '*');
            } catch (e) {
                console.log('Could not pause Vimeo video', e);
            }
        });
        
        // Handle clicks on the view project button
        const viewProjectBtn = item.querySelector('.featured-overlay .btn');
        if (viewProjectBtn) {
            // Prevent the click from bubbling to the featured item
            viewProjectBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Navigation happens via href
            });
        }
        
        // Handle clicks on the featured item (not the button)
        item.addEventListener('click', (e) => {
            // If they clicked on the button, let that handle it
            if (e.target.closest('.btn')) return;
            
            // Otherwise, simulate clicking the view project button
            const viewProjectBtn = item.querySelector('.featured-overlay .btn');
            if (viewProjectBtn) {
                viewProjectBtn.click();
            }
        });
    });
    
    // Listen for messages from Vimeo
    window.addEventListener('message', (event) => {
        // Only process messages from Vimeo
        if (!event.origin.includes('vimeo.com')) return;
        
        try {
            const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
            
            // You can add more Vimeo event handling here if needed
            if (data.event === 'ready') {
                console.log('Vimeo player ready');
            }
        } catch (e) {
            console.log('Error processing Vimeo message', e);
        }
    });
}