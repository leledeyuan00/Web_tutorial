<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <router-link tag="div" :to="`/`" class="iconfont icon-Backblack text-blue"></router-link>
      <strong class="flex-1 text-blue pl-2 fs-xs text-ellipsis">{{model.title}}</strong>
      <div class="text-grey fs-xs pl-4">2019-06-19</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-LC_icon_menu_line fs-xxl"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="py-1 d-flex"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
        >
          <span class="flex-1 text-ellipsis">{{item.title}}</span>
          <span class="pl-4 text-grey fs-sm">2019-10-20</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .icon-Backblack {
    font-size: 1.2308rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe{
      width:100%;
      height:auto
    }
  }
}
</style>