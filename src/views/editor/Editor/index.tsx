import {
  defineComponent,
  onMounted,
  ref,
  onBeforeUnmount,
  getCurrentInstance,
} from 'vue';
import './index.less';
import { basicSetup, EditorView } from 'codemirror';

import { EditorState } from '@codemirror/state';

import { markdown } from '@codemirror/lang-markdown';

export default defineComponent({
  props: {
    html: {
      type: String,
      default: '',
    },
  },
  emits: ['change'],
  setup(props) {
    const instance = getCurrentInstance()!;
    const editorRef = ref();
    const editorView = ref();
    const initEditor = () => {
      if (typeof editorView.value !== 'undefined') {
        editorView.value.destroy();
      }

      const updateListenerExtension = EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          console.log(update);
          instance.emit('change', update.state.doc.toString());
        }
      });

      const startState = EditorState.create({
        doc: props.html,
        extensions: [basicSetup, markdown(), updateListenerExtension],
        // lineWrapping: true,
      });

      if (editorRef.value) {
        editorView.value = new EditorView({
          state: startState,
          parent: editorRef.value,
        });
      }
    };

    const undateValue = () => {
      const value = editorView.value.state.doc.toString();

      if (value) {
        // 具体逻辑根据自己业务场景做变化
        editorView.value.dispatch({
          changes: {
            from: 0,
            to: editorView.value.state.doc.length,
            insert: 'test',
          },
        });
      }
    };
    onMounted(() => {
      initEditor();
    });

    onBeforeUnmount(() => {
      if (typeof editorView.value !== 'undefined') {
        editorView.value.destroy();
      }
    });

    return {
      editorRef,
      undateValue,
    };
  },
  render() {
    return <div ref="editorRef" class="editor"></div>;
  },
});
