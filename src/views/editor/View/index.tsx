import { defineComponent } from 'vue';
import './index.less';

// 空白布局, 备用
export default defineComponent({
  setup() {
    return {};
  },
  render() {
    return <div class="view"></div>;
  },
});
