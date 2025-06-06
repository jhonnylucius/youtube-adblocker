function removeAdOverlays() {
    const adSelectors = [
        '.ytp-ad-module',
        '.ytp-ad-overlay-slot',
        '.ytp-ad-player-overlay',
        '.ytp-ad-skip-button',
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
        '.ytp-ad-action-interstitial',
        '.ytp-ad-action-interstitial-slot',
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

    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }
}

function handleAdPlayback() {
    const player = document.querySelector('.html5-video-player');

    if (!player) return;

    const video = player.querySelector('video');

    if (!video) return;

    // Verifica se está mostrando anúncio
    if (player.classList.contains('ad-showing')) {
        console.log('Anúncio detectado: silenciando e pulando se possível.');

        // Silencia o vídeo
        video.muted = true;

        // Se for um anúncio skippable, tenta pular
        const skipButton = player.querySelector('.ytp-ad-skip-button');
        if (skipButton) {
            skipButton.click();
        }
    } else {
        // Se não é anúncio, garante que o vídeo está com som
        video.muted = false;
    }
}

function autoConfirmStillWatching() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.textContent.trim().toLowerCase();
        if (text.includes('continuar assistindo') || text === 'sim' || text === 'yes') {
            console.log('Pop-up de inatividade detectado — clicando automaticamente.');
            button.click();
        }
    });
}

function mainBlocker() {
    removeAdOverlays();
    handleAdPlayback();
    autoConfirmStillWatching();
}

// Executa a cada 500ms para resposta rápida
setInterval(mainBlocker, 500);
