<template>
  <a-card hoverable style="width: 264px" @click="jumpTo(item)">
    <template #cover>
      <img
        class="icon"
        alt="example"
        :src="
          item.icon || 'http://23.105.192.99:58122/i/2023/09/01/12iaord.png'
        "
      />
    </template>
    <a-card-meta :title="item.title">
      <template #description>{{ item.desc || item.title }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: Object,
});
console.log(props.item);
const item = props.item;
const jumpTo = function (item) {
  window.open(item.address, "_blank");
};
</script>

<style scoped>
.ant-card {
  display: flex;
  align-items: center;
}
.icon {
  width: 48px;
  height: 48px;
  margin-left: 24px;
  object-fit: contain;
}
</style>
