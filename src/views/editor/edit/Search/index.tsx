import { defineComponent, ref, getCurrentInstance } from 'vue';
import SearchButtons from '@/components/SearchButtons';
import PeopleRoleSelect from './PeopleRoleSelect';
import './index.less';
import { PeopleRole } from '../PeopleList/PeopleItem/const';

export default defineComponent({
  emits: ['search', 'reset', 'peopleRoleChange'],
  setup() {
    const instance = getCurrentInstance()!;
    const name = ref<string | undefined>();
    const peopleRoleSelectRef = ref<InstanceType<typeof PeopleRoleSelect>>();

    const handleSearch = (resolve: () => void) => {
      instance.emit('search', name.value, resolve);
    };
    const handleReset = () => {
      name.value = undefined;
      peopleRoleSelectRef.value!.reset();
      instance.emit('reset');
    };
    const handlePeopleRoleChange = (checkList: PeopleRole[]) => {
      instance.emit('peopleRoleChange', checkList);
    };

    return {
      name,
      handleSearch,
      handleReset,
      handlePeopleRoleChange,
      peopleRoleSelectRef,
    };
  },
  render() {
    const { handleSearch, handleReset, handlePeopleRoleChange } = this;
    return (
      <div class="search">
        <div class="left">
          <a-input
            placeholder="请输入"
            v-model:value={this.name}
            class="input"
          ></a-input>
          <PeopleRoleSelect
            onChange={handlePeopleRoleChange}
            ref="peopleRoleSelectRef"
          />
        </div>
        <SearchButtons onSearch={handleSearch} onReset={handleReset} />
      </div>
    );
  },
});
