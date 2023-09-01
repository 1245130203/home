<template>
  <a-card hoverable style="width: 264px" @click="jumpTo(item)">
    <template #cover>
      <img class="icon" alt="example" :src="item.icon" />
    </template>
    <a-card-meta :title="item.title">
      <template #description>{{ item.desc }}</template>
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
}
</style>
