let tracks = document.querySelectorAll('.track-parent')
let old = ''

function time(time) {
    const min = Math.floor(time / 60)
    let sec = (time - (min * 60)) < 10 ? `0${Math.floor(time - (min * 60))}` : Math.floor(time - (min * 60))
    return min + ':' + sec
}


tracks.forEach(function (track) {

    const player = track.querySelector('.player'),
        playerImg = track.querySelector('.player-img'),
        playerDur = track.querySelector('.duration-player'),
        playerVolume = track.querySelector('.player-volume'),
        playerTiming = track.querySelector('.player-timing')

    function timeUpdateListener() {
        playerDur.innerHTML = time(player.currentTime)
        playerTiming.value = player.currentTime
        bar()
        if (player.ended) {
            playerImg.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%235181B8%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'

        }
    }

    playerDur.innerHTML = time(player.duration)
    playerTiming.max = player.duration
    playerImg.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%235181B8%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'


    playerVolume.addEventListener('input', function () {
        player.volume = playerVolume.value / 100
    })

    playerTiming.addEventListener('input', function () {
        player.currentTime = playerTiming.value
    })


    track.addEventListener('click', function (e) {

        player.addEventListener('timeupdate', timeUpdateListener)

        if (e.target.tagName !== 'INPUT') {

            if (old !== track && old !== '') {

                let playerOld = old.querySelector('.player')

                playerOld.removeEventListener('timeupdate', timeUpdateListener)
                playerOld.pause()
                playerOld.currentTime = playerOld.duration

                old.querySelectorAll('.hidden-div').forEach(e => e.classList.remove('-mb-2'))
                old.querySelectorAll('.input-range').forEach(e => e.classList.add('hidden'))
                old.querySelector('.player-img').src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%235181B8%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'


            }

            track.querySelectorAll('.hidden-div').forEach(e => e.classList.add('-mb-2'))
            track.querySelectorAll('.input-range').forEach(e => e.classList.remove('hidden'))

            if (player.paused) {
                playerImg.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20fill%3D%22%235181b8%22%20r%3D%2212%22%2F%3E%3Cpath%20d%3D%22m8%207.596c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596zm5%200c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                player.play();
            } else {
                playerImg.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%235181B8%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                player.pause()
            }

            old = track;
        }


    })

})


