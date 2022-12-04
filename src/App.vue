<script>
import Sidebar from '@/components/Sidebar/BaseSidebar'
import MainPage from "@/components/Main/MainPage";
import BaseHeader from "@/components/Header/BaseHeader";

export default {
  name: 'App',
  components: {
    BaseHeader,
    MainPage,
    Sidebar,
  },
}
</script>

<template>
  <main>
    <BaseHeader />
      <div class="wrapper">
        <Sidebar />
        <MainPage />
      </div>
  </main>
</template>

<style scoped>
  .wrapper {
    display: flex;
    max-width: 1230px;
    margin: auto;
  }
</style>
