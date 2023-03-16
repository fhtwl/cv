import { defineComponent, getCurrentInstance, ref } from 'vue';
import './index.less';
const pageSizeOptions = ['10', '20', '30', '40', '50'];

export default defineComponent({
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    showSizeChanger: {
      type: Boolean,
      default: true,
    },
    showTotal: {
      type: Function,
      default: (total: number, pageSize: number) =>
        `共${total}条记录，每页${pageSize}条`,
    },
  },
  emits: ['change'],
  setup() {
    const instance = getCurrentInstance();
    const handlePageChange = (page: number, size: number) => {
      // console.log(page, size);
      instance!.emit('change', page, size);
    };
    return {
      handlePageChange,
    };
  },
  render() {
    const {
      current,
      total,
      handlePageChange,
      pageSize,
      showSizeChanger,
      showTotal,
    } = this;
    return (
      <div class="pagination">
        <a-pagination
          current={current}
          page-size-options={pageSizeOptions}
          page-size={pageSize}
          show-quick-jumper
          show-size-changer={showSizeChanger}
          total={total}
          show-total={(total: number) => showTotal(total, pageSize)}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
        />
      </div>
    );
  },
});
