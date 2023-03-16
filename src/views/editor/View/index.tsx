import { defineComponent } from 'vue';
import './index.less';
import MarkdownView from './MarkdownView';

// 空白布局, 备用
export default defineComponent({
  props: {
    html: {
      type: String,
      default: '',
    },
  },
  render() {
    return (
      <div class="view">
        <MarkdownView html={this.html} />
      </div>
    );
  },
});
