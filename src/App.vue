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
    <BaseHeader/>
    <div class="wrapper">
      <Sidebar/>
      <MainPage/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  max-width: 1230px;
  margin: 32px auto;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;

    .sidebar {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
  }
}

</style>
