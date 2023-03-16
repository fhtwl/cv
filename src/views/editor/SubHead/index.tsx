import { defineComponent } from 'vue';
import './index.less';

// 空白布局, 备用
export default defineComponent({
  setup() {
    return {};
  },
  render() {
    const handleCancel = () => {
      this.$router.push(`/home`);
    };
    return (
      <div class="sub-head">
        <div class="left">
          <left-outlined class="cancel" onClick={handleCancel} />
          <div class="tool">
            <div class="item">选择主题</div>
          </div>
        </div>

        <div class="right">
          <a-button>导出</a-button>
          <a-button class="save" type="primary">
            保存
          </a-button>
        </div>
      </div>
    );
  },
});
