import { defineComponent, getCurrentInstance, ref } from 'vue';
import {
  peopleRoleOptions,
  PeopleRole,
} from '../../PeopleList/PeopleItem/const';

import './index.less';

export default defineComponent({
  emits: ['change'],
  setup() {
    const instance = getCurrentInstance()!;
    const selectedList = ref<PeopleRole[]>(
      peopleRoleOptions.map((item) => item.value)
    );

    const checkAll = ref(true);
    const handleCheckAllChange = (e: { target: { checked: boolean } }) => {
      if (e.target.checked) {
        selectedList.value = peopleRoleOptions.map((item) => item.value);
      } else {
        selectedList.value = [];
      }
      updateCleckAll();
      instance.emit('change', selectedList.value);
    };
    const indeterminate = ref(false);
    const handleChange = () => {
      updateCleckAll();
      instance.emit('change', selectedList.value);
    };
    const updateCleckAll = () => {
      checkAll.value = selectedList.value.length === peopleRoleOptions.length;
      indeterminate.value =
        selectedList.value.length > 0 &&
        selectedList.value.length < peopleRoleOptions.length;
    };
    const reset = () => {
      selectedList.value = peopleRoleOptions.map((item) => item.value);
      updateCleckAll();
    };

    return {
      selectedList,
      checkAll,
      handleCheckAllChange,
      indeterminate,
      handleChange,
      reset,
    };
  },
  render() {
    const { handleChange, handleCheckAllChange } = this;

    return (
      <div class="people-role-select">
        <a-checkbox
          v-model:checked={this.checkAll}
          indeterminate={this.indeterminate}
          onChange={handleCheckAllChange}
        >
          全部人员
        </a-checkbox>
        <a-checkbox-group
          v-model:value={this.selectedList}
          options={peopleRoleOptions}
          onChange={handleChange}
        />
      </div>
    );
  },
});
