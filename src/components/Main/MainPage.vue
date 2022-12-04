<script>
  import SortTable from "@/components/Main/SortTable/SortTable";

  export default  {
    components: {
      SortTable
    }
  }
</script>

<template>
  <div style="width: 100%">
    <SortTable />
    <router-view></router-view>
  </div>
</template>

