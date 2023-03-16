import { defineComponent, getCurrentInstance, ref } from 'vue';

import AttitudeTabbar from './AttitudeTabbar';
import './index.less';

export default defineComponent({
  emits: ['change'],
  setup() {
    const instance = getCurrentInstance()!;
    const list = ref([
      {
        label: '全部',
        value: '',
      },
      {
        label: 'A-E',
        value: 'A-E',
      },
      {
        label: 'F-J',
        value: 'F-J',
      },
      {
        label: 'K-O',
        value: 'K-O',
      },
      {
        label: 'P-T',
        value: 'P-T',
      },
      {
        label: 'U-Z',
        value: 'U-Z',
      },
    ]);

    const activeKey = ref('');
    const hanldeActiveChange = (key: string) => {
      if (key !== activeKey.value) {
        activeKey.value = key;
        instance.emit('change', key);
      }
    };

    return {
      list,
      hanldeActiveChange,
      activeKey,
    };
  },
  render() {
    const { list, hanldeActiveChange, activeKey } = this;

    return (
      <AttitudeTabbar>
        <div class="tab-left-box">
          {list.map((item) => {
            return (
              <div
                onClick={() => hanldeActiveChange(item.value)}
                class={`tab-pane ${activeKey === item.value ? 'active' : ''}`}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </AttitudeTabbar>
    );
  },
});
