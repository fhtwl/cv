import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  render() {
    const style = {
      borderColor: this.color,
    };
    return (
      <div class="border-horn-box">
        <div class="background"></div>
        <span class="left-top" style={style}></span>
        <span class="left-bottom" style={style}></span>
        <span class="right-up" style={style}></span>
        <span class="right-bottom" style={style}></span>
      </div>
    );
  },
});
