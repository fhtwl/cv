import { defineComponent, PropType, ref } from 'vue';
import './index.less';
import { attitudeOptions, AttitudeType, PeopleRole } from './const';
import BorderHornBox from '@/components/BorderHornBox';
import defaultAvator from '@/assets/images/portrait/person.png';
import { addBase64DataHeader } from '@/utils/utils';

export type Tag = string;
export interface PersonItem {
  image: string;
  name: string;
  friendliness?: AttitudeType;
  personId: number;
  evaluation: string;
  type: PeopleRole;
}

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<PersonItem>,
      default: () => {},
    },
  },
  emits: ['click'],
  render() {
    const { value } = this;
    const handleClick = (value: PersonItem) => {
      this.$emit('click', value);
    };
    const color = attitudeOptions.find(
      (option) => option.value === value.friendliness
    )?.color;
    const bg = {
      background: `linear-gradient(${color}, #333)`,
    };
    const borderColor = {
      'border-color': color,
    };
    return (
      <div class="item" onClick={() => handleClick(value)} style={borderColor}>
        <BorderHornBox color={color} />
        <div class="pic">
          <img
            src={value.image ? addBase64DataHeader(value.image) : defaultAvator}
            alt=""
          />
        </div>
        <div class="name" style={bg}>
          {value.name}
        </div>
      </div>
    );
  },
});
