import { defineComponent, PropType, ref } from 'vue';
import './index.less';
import PeopleItem, { PersonItem } from './PeopleItem';

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<PersonItem[]>,
      default: () => [],
    },
  },
  setup() {},
  render() {
    const { list } = this;
    const handleClick = (value: PersonItem) => {
      const { personId } = value;
      this.$router.push(`/portrait/holographicArchives?id=${personId}`);
    };
    return (
      <div class="people-list">
        {list.map((item: PersonItem) => {
          return (
            <PeopleItem onClick={(item) => handleClick(item)} value={item} />
          );
        })}
      </div>
    );
  },
});
