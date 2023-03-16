import {
  createElementVNode,
  createStaticVNode,
  defineComponent,
  PropType,
  ref,
} from 'vue';
import './index.less';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: false, // 不支持html
  breaks: true, //回车换行
  typographer: true, //优化排版，标点
});
// 空白布局, 备用
export default defineComponent({
  props: {
    html: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {};
  },
  render() {
    const result = md.render(this.html);
    return (
      <div class="markdown-view">
        {createStaticVNode(`<div>${result}</div>`, 1)}
      </div>
    );
  },
});
