import { defineComponent, ref } from 'vue';
import Editor from './Editor';
import SubHead from './SubHead';
import View from './View';

export default defineComponent({
  render() {
    return (
      <>
        <SubHead />
        <div class="body">
          <Editor />
          <View />
        </div>
      </>
    );
  },
});
