function removeAllAds() {
    const adSelectors = [
        '.ytp-ad-module',
        '.video-ads',
        '.ytp-ad-player-overlay',
        '.ytp-ad-overlay-slot',
        '.ytp-ad-skip-button',
        '#player-ads',
        '.ytp-ad-image-overlay',
        '.ytp-ad-overlay-container',
        '.ytp-ad-progress-list',
        '.ytp-ad-preview-container',
        '.ytp-ad-preview-image',
        '.ytp-ad-preview-text',
        '.ytp-ad-text',
        '.ytp-ad-message-container',
        '.ytp-ad-feedback-dialog',
        '.ytp-ad-player-overlay-instream-info',
        '.ytp-ad-click-overlay',
        'ytd-promoted-sparkles-web-renderer',
        'ytd-display-ad-renderer',
        'ytd-video-masthead-ad-v3-renderer',
        'ytd-companion-slot-renderer',
        'ytd-promoted-video-renderer',
        'ytd-banner-promo-renderer',
        '.ytp-ad-action-interstitial',
        '.ytp-ad-action-interstitial-slot',
        'ytd-action-companion-ad-renderer',
        '.ytp-ad-interstitial-slot',
        '.ytp-ad-interstitial-overlay-container',
        '.ytp-ad-interstitial-logo-overlay',
        '.ytp-ad-info-dialog-container',
        '.ytp-ad-visit-card-companion-slot'
    ];

    adSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });

    // Pular automaticamente vídeo de anúncio
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }

    // Caso o vídeo seja um ad, tenta avançar
    const video = document.querySelector('video');
    if (video && video.duration > 0 && video.currentTime < 1) {
        video.currentTime = video.duration;
    }
}

// Roda a cada segundo para garantir a remoção contínua
setInterval(removeAllAds, 1000);
