import SystemHead from '@/components/SystemHead';
import { defineComponent } from 'vue';

export default defineComponent({
  render() {
    return (
      <div class="home">
        <SystemHead />
        <div class="content-wrap">
          <div class="body">
            <router-view />
          </div>
        </div>
      </div>
    );
  },
});
