document.addEventListener('DOMContentLoaded', () => {
    const controls = [
        'play-large',
        'restart',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'download',
        'fullscreen',
    ];

    // Inicialize o Plyr
    const player = new Plyr('.js-player', {
        controls: controls,
        tooltips: {
            controls: true,
            seek: true
        },
        i18n: {
            restart: 'Restart',
            rewind: 'Rewind {seektime}s',
            play: 'Play',
            pause: 'Pause',
            fastForward: 'Forward {seektime}s',
            seek: 'Seek',
            seekLabel: '{currentTime} of {duration}',
            played: 'Played',
            buffered: 'Buffered',
            currentTime: 'Current time',
            duration: 'Duration',
            volume: 'Volume',
            mute: 'Mute',
            unmute: 'Unmute',
            enableCaptions: 'Enable captions',
            disableCaptions: 'Disable captions',
            enterFullscreen: 'Enter fullscreen',
            exitFullscreen: 'Exit fullscreen',
            frameTitle: 'Player for {title}',
            captions: 'Captions',
            settings: 'Settings',
            pip: 'PIP',
            airplay: 'Airplay',
            download: 'Download',
            menuBack: 'Go back to previous menu',
            speed: 'Speed',
            normal: 'Normal',
            quality: 'Quality',
            loop: 'Loop'
        }
    });

    // Inicialize o Shaka Player
    const video = document.querySelector('#video');
    const shakaPlayer = new shaka.Player(video);

    // Configuração do Cast
    shakaPlayer.configure({
        cast: {
            receiverAppId: 'YOUR_APP_ID',
            androidReceiverCompatible: true
        }
    });

    // Adicione o botão de "Cast" ao Plyr
    const castButton = document.createElement('button');
    castButton.className = 'plyr__control';
    castButton.innerHTML = 'Cast';
    castButton.addEventListener('click', () => {
        if (shakaPlayer.castReceiver) {
            shakaPlayer.castReceiver.showCastDialog();
        } else {
            console.log('Cast not initialized');
        }
    });

    // Adicione o botão de "Cast" aos controles do Plyr
    const controlsContainer = document.querySelector('.plyr__controls');
    if (controlsContainer) {
        controlsContainer.appendChild(castButton);
    }

    // Carregue a fonte de vídeo
    shakaPlayer.load('https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4').then(() => {
        console.log('The video has now been loaded!');
    }).catch(error => {
        console.error('Error loading video:', error);
    });
});