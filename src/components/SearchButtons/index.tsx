import { defineComponent, getCurrentInstance, ref } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    searchLabel: {
      type: String,
      default: '查询',
    },
    searchIcon: {
      type: Object,
      default: <search-outlined />,
    },
    resetLabel: {
      type: String,
      default: '重置',
    },
    resetIcon: {
      type: Object,
      default: <reload-outlined />,
    },
  },
  emits: ['search', 'reset'],
  setup() {
    const instance = getCurrentInstance();
    const loading = ref(false);
    const handleClick = () => {
      new Promise((resolve) => {
        loading.value = true;
        instance?.emit('search', resolve);
      }).then(() => {
        loading.value = false;
      });
    };
    const handleReset = () => {
      instance?.emit('reset');
    };
    return {
      loading,
      handleClick,
      handleReset,
    };
  },
  render() {
    const {
      loading,
      handleClick,
      handleReset,
      searchIcon,
      resetIcon,
      searchLabel,
      resetLabel,
    } = this;

    return (
      <div class="search-buttons">
        <a-button
          onClick={handleReset}
          class="button"
          icon={resetIcon}
          size="large"
        >
          {resetLabel}
        </a-button>
        <a-button
          loading={loading}
          icon={searchIcon}
          type="primary"
          class="button"
          onClick={handleClick}
          size="large"
        >
          {searchLabel}
        </a-button>
        <slot></slot>
      </div>
    );
  },
});
