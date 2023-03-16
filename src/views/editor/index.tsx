import { defineComponent, ref } from 'vue';
import Editor from './Editor';
import SubHead from './SubHead';
import View from './View';
import './index.less';

export default defineComponent({
  setup() {
    const html = ref(
      `
      * 1
      * 2
      **3**
      > 4
      `
    );
    const handleChange = (str: string) => {
      html.value = str;
    };
    return {
      html,
      handleChange,
    };
  },
  render() {
    const { html, handleChange } = this;
    return (
      <>
        <SubHead />
        <div class="body">
          <Editor html={html} onChange={handleChange} />
          <View html={html} />
        </div>
      </>
    );
  },
});
