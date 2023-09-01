<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">首页</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <search></search>
        <div class="address-card-wrapper">
          <card
            v-for="item of addressList"
            :key="item.address"
            :item="item"
          ></card>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> 个人导航网站 </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import search from "@/components/search/index.vue";
import card from "@/components/card/index.vue";
import address from "@/assets/address.json";
import { ref } from "vue";
const selectedKeys = ref<string[]>(["2"]);
const addressList = ref(address);
</script>
<style scoped>
.layout {
  height: 100%;
}
.site-layout-content {
  min-height: 280px;
  height: 100%;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
.address-card-wrapper {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: repeat(auto-fill, 100px);
  justify-content: center;
  grid-row-gap: 16px;
}
</style>
