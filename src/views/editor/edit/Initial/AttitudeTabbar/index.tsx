import { defineComponent } from 'vue';
import { attitudeOptions } from '../../PeopleList/PeopleItem/const';
import './index.less';

export default defineComponent({
  render() {
    return (
      <div class="initial tabs">
        <div class="tab-header">
          {this.$slots.default && this.$slots.default()}

          <div class="right">
            {attitudeOptions.map((item) => {
              return (
                <div class="attitude-item">
                  <div class="color" style={{ background: item.color }}></div>
                  <div class="label">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});
