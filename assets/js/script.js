function ctaModal() {
    return {
        modalOpen: false,
        player: null,
        stopTimeout: null,
        openModal() {
            this.modalOpen = true;
            setTimeout(() => {
                if (this.player && typeof this.player.playVideo === 'function') {
                    this.player.playVideo();
                    this.stopTimeout = setTimeout(() => {
                        this.player.pauseVideo();
                    }, 20 * 60 * 1000); // 20 minutes in milliseconds
                }
            }, 500); // Adjust the delay as needed
        },
        closeModal() {
            this.modalOpen = false;
            if (this.player && typeof this.player.pauseVideo === 'function') {
                this.player.pauseVideo();
            }
            clearTimeout(this.stopTimeout); // Clear the timeout to prevent it from triggering after the modal is closed
        },
        init() {
            let tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                this.player = new YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: 'WUKYKWSDF48',
                    events: {
                        'onReady': this.onPlayerReady
                    }
                });
            }
        },
        onPlayerReady(event) {
            // Optional: Start the video at 30 seconds if needed
            event.target.seekTo(30);
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('ctaModal', ctaModal)
});