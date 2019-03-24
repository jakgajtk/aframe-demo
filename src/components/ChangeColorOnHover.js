AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        text: {default: 'Hello world'}
    },
    init: function() {
        const el = this.el;

        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', "#F12");
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', "#FFF");
        });
    }
});