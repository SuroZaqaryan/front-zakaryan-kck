<script>

import BaseSelect from "@/components/BaseSelect/BaseSelect";
import BaseSwitch from "@/components/Switch/BaseSwitch";

export default {
  components: {BaseSelect, BaseSwitch},

  data() {
    return {
      config: {
        options: [
          {
            id: 1,
            value: "Номер накладной",
          },
          {
            id: 2,
            value: "Номер накладной",
          }
        ],
        placeholder: "Сортировка",
        width: 232,
      },
    }
  },

  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
      this.$store.commit('DATA_SORT', selectedOption.id)
    }
  }
}
</script>

<template>
  <div class="sort-header">
    <div class="sort">
      <BaseSelect :config="config" :icon="true" @setSelectedOption="setNewSelectedOption($event)"/>
    </div>
    <div class="switch">
      <BaseSwitch/>
    </div>
  </div>
</template>