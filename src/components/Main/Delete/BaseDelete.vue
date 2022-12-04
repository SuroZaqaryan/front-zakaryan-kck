<template>
  <div v-on="$listeners" class="delete">
    <div>
      <img src="@/assets/Icons/Delete.svg" alt="">
      <p>Удалить</p>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/Style/BaseDelete.scss";
</style>