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
      <div class="network-status">
        <img
          v-if="network.ipv6 === 200"
          class="net-state-icon"
          src="http://23.105.192.99:58122/i/2023/09/02/10ty5y9.png"
          alt=""
        />
        <img
          v-if="network.home === 200"
          class="net-state-icon"
          src="http://23.105.192.99:58122/i/2023/09/02/10tycqy.png"
          alt=""
        />
      </div>
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
import { checkNetwork } from "@/utils/index.ts";
import { reactive, ref } from "vue";
const selectedKeys = ref<string[]>(["2"]);
const addressList = ref(address);
const network = reactive({
  ipv6: 0,
  home: 0,
});
const handleCheckNetwork = async () => {
  const res = await checkNetwork();
  console.log("res111", res);
  network.ipv6 = res.ipv6;
  network.home = res.home;
};
handleCheckNetwork();
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
.net-state-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 16px;
}
.ant-layout-header {
  display: flex;
}
.network-status {
  display: flex;
  align-items: center;
}
</style>
