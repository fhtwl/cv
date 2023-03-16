import { defineComponent, onMounted, ref } from 'vue';
import './index.less';
import { basicSetup, EditorView } from 'codemirror';

import { EditorState } from '@codemirror/state';

import { markdown } from '@codemirror/lang-markdown';

export default defineComponent({
  setup() {
    const editorRef = ref();

    const editorView = ref();
    const initEditor = () => {
      if (typeof editorView.value !== 'undefined') {
        editorView.value.destroy();
      }

      const jsonString = `
      

      `;
      const startState = EditorState.create({
        doc: jsonString,
        extensions: [basicSetup, markdown()],
      });
      if (editorRef.value) {
        editorView.value = new EditorView({
          state: startState,

          parent: editorRef.value,
        });
      }
    };
    onMounted(() => {
      initEditor();
    });
    return {
      editorRef,
    };
  },
  render() {
    return <div ref="editorRef" class="editor"></div>;
  },
});
