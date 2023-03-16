import { defineComponent, getCurrentInstance, ref } from 'vue';
import {
  RouteLocationMatched,
  RouteLocationNormalizedLoaded,
} from 'vue-router';
import FullScreen from './FullScreen';
import './index.less';
import logo from '@/assets/logo.svg';
import peopleSearch from '@/assets/images/system/people-search.png';
import similarityAnalysis from '@/assets/images/system/similarity-analysis.png';
import config from '@/config';
// import holographicArchives from "@/assets/images/system/holographic-archives.png"

export default defineComponent({
  setup() {
    const selectedKeys = ref([window.location.hash.replace('#', '')]);

    const handleFullscreen = () => {
      document.body.requestFullscreen();
    };
    const handleFullscreenExit = () => {
      document.exitFullscreen();
    };
    return {
      selectedKeys,
      handleFullscreen,
      handleFullscreenExit,
    };
  },
  data() {
    return {
      // selectedKeys: [window.location.pathname],
      list: [
        {
          icon: <img src={peopleSearch} class="icon" alt="" srcset="" />,
          title: '我的简历',
          url: '/home',
          key: '/home',
        },
        {
          icon: <img src={similarityAnalysis} class="icon" alt="" srcset="" />,
          title: '简历',
          url: '/editor',
          key: '/editor',
        },
        // {
        //   icon: <fund-projection-screen-outlined />,
        //   title: '关系搜索',
        //   url: '/portrait/holographicArchives',
        // },
      ],
    };
  },
  watch: {
    $route: function (newVal: RouteLocationNormalizedLoaded) {
      this.selectedKeys = [window.location.hash.replace('#', '')];
      // console.log('............');
      // console.log(newVal, this.selectedKeys, this.list);
    },
  },
  methods: {
    renderMenuItem(node: {
      icon: JSX.Element;
      title: string;
      url: string;
      key: string;
    }) {
      return (
        <a-menu-item title={node.title} key={node.key}>
          {/* <c-icon class="icon" type={node.icon} /> */}
          {node.icon}
          <router-link class="title" to={node.url}>
            {node.title}
          </router-link>
        </a-menu-item>
      );
    },
  },
  render() {
    const { list, renderMenuItem, handleFullscreen, handleFullscreenExit } =
      this;
    return (
      <div class="system-head">
        <div class="head">
          <div class="logo">
            <div class="logo-img">
              <img src={logo} alt="" />
            </div>
            {config.title}
          </div>
          <div class="menu">
            <a-menu
              v-model:selectedKeys={this.selectedKeys}
              mode="horizontal"
              // theme="dark"
            >
              {list.map((item) => renderMenuItem(item))}
            </a-menu>
          </div>
          <div class="right">
            {/* <fullscreen-outlined
              onClick={handleFullscreen}
              class="fullscreen"
            /> */}
            <FullScreen
              onExit={handleFullscreenExit}
              onFullscreen={handleFullscreen}
              class="fullscreen"
            />
          </div>
        </div>
      </div>
    );
  },
});
