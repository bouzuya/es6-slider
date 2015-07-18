import $ from 'jquery';

export default class SliderPanel {
  constructor(slider, $el) {
    this.slider = slider;
    this.$el = $el;
    this.width = 0;
    this.height = 0;

    this.setSize();
    this.setBindings();
 }

  setSize() {
    this.width = this.$el.width();
    this.height = this.$el.height();
  }

  setPostion(position = {top: 0, left: 0}) {
    this.$el.css(position);
  }

  setBindings() {
    this.$el.on('click', () => {
      var index = this.$el.data('index')
      this.slider.setPanel(index);
    });
  }
}
