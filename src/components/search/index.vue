<template>
  <form
    action="http://www.google.com/search"
    method="get"
    target="_blank"
    class="form"
  >
    <input name="ie" value="UTF-8" type="hidden" />
    <input class="content" size="30" name="q" type="text" />
    <input class="submit" name="Search" value=" " type="submit" />
  </form>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const selectedKeys = ref<string[]>(["2"]);
</script>
<style scoped>
.form {
  display: flex;
  z-index: 3;
  min-height: 44px;
  background: #fff;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  border-radius: 24px;
  margin: 0 auto;
  width: 690px;
}
.content {
  flex: 1;
  margin-left: 24px;
  font-size: 24px;
}
.submit {
  margin: 7px 24px 6px 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-image: url("@/assets/search.svg");
  background-size: 32px;
  background-repeat: no-repeat;
}
</style>
