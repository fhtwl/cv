import { defineComponent, getCurrentInstance, ref } from 'vue';

import './index.less';

export default defineComponent({
  emits: ['fullscreen', 'exit'],
  setup() {
    const instance = getCurrentInstance();
    const isFullScreen = ref(false);

    const handleClick = () => {
      isFullScreen.value = !isFullScreen.value;
      instance!.emit(isFullScreen.value ? 'fullscreen' : 'exit');
    };
    return {
      isFullScreen,
      handleClick,
    };
  },

  render() {
    const { handleClick, isFullScreen } = this;
    return (
      <div onClick={handleClick} class="fullscreen">
        {isFullScreen ? <fullscreen-exit-outlined /> : <fullscreen-outlined />}
      </div>
    );
  },
});
