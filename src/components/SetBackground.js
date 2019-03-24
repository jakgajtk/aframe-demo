//src https://glitch.com/~aframe-gallery

AFRAME.registerComponent('set-background', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      data.target.emit('set-image-fade');
      setTimeout(function () {
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },

  setupFadeAnimation: function () {
    const data = this.data;
    const targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});