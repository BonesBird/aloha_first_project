document.addEventListener("DOMContentLoaded", function (carousel) {

    console.log('works');
    const flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        contain: 'true',
        freeScroll: 'true',
        wrapAround: 'true',
    }
    )
});

