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

    const player = Plyr.setup('.js-player', {
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
    const ui = new shaka.ui.Overlay(shakaPlayer, video, video.parentElement);
    ui.getControls();

    // Configuração do Cast
    shakaPlayer.addEventListener('caststatuschanged', (e) => {
        const isCasting = e['newStatus']['connected'];
        if (isCasting) {
            console.log('Casting to Chromecast');
        } else {
            console.log('Stopped casting');
        }
    });

    shakaPlayer.configure({
        cast: {
            appData: {
                title: 'My Video',
            },
        },
    });

    // Carregue a fonte de vídeo
    shakaPlayer.load('https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4').then(() => {
        console.log('The video has now been loaded!');
    }).catch(error => {
        console.error('Error loading video:', error);
    });
});