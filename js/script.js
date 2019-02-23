;
((d, w) => {
    $(d).foundation()

    d.addEventListener('DOMContentLoaded', e => {
        //Para ocultar la barra de navegación automaticamente en dispositivos mobile
        const mqDesktop = w.matchMedia('(min-width: 64em)')
        $('.top-bar a').click(() => {
            if (!mqDesktop.matches) {
                $('.top-bar').hide()
            }
        })

        //Para que la fecha del copyright se actualice automáticamente
        const copy = d.querySelector('.Footer small')
        copy.innerHTML = `&copy; ${new Date().getFullYear()} Hugo Flotts`
    })
})(document, window)