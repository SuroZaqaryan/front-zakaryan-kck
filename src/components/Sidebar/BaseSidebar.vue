<script>
import {mapFields} from "vuex-map-fields";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["data"]),
    ...mapFields(["form.orderType", "form.invoiceNumber", "form.orderTypeValue"])
  },

  methods: {
    selectOrderType(e) {
      this.orderTypeValue = e.target.value;
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="title">
      <p>Фильтр</p>
    </div>

    <div class="sidebar-filter">
      <div>
        <p>Номер накладной:</p>
        <input v-model="invoiceNumber" placeholder="Введите фрагмент" type="text">
      </div>

      <div>
        <p>Тип заказа:</p>
        <label>
          <select @change="selectOrderType($event)">
            <option disabled selected>Выберите из списка</option>
            <option value="">По умолчанию</option>
            <option v-for="(opt, idx) in orderType" :value="opt" :key="idx">
              {{ opt }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/Style/SideBar.scss";
</style>