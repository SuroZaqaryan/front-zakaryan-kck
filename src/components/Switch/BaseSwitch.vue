<script>
export default {
  data() {
    return {
      active_el: 0
    }
  },
  methods: {
    activate: function (el, link) {
      if(this.$router.history.current.path !== link) {
        this.$router.push(link)
      }
      this.active_el = el;
    }
  }
}
</script>

<template>
  <div class="switch-list">
    <div @click="activate(1, '/table')" :class="{ active : active_el == 1 }" class="card-switch">
        <img src="../../assets/Icons/CardSwitch.svg" alt="CardSwitch">
    </div>

    <div @click="activate(2, '/card')" :class="{ active : active_el == 2 }" class="table-switch">
        <img src="../../assets/Icons/TableSwitch.svg" alt="TableSwitch">
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/Style/Switch.scss";
</style>