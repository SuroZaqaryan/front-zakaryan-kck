<script>
import {mapFields} from "vuex-map-fields";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["data"]),
    ...mapFields(["form.invoiceNumber"]),
    ...mapFields(["form.orderType"]),
  },

  mounted() {
    if (this.data.length) {
      console.log(this.data)
    }
  },

  data() {
    return {
      orderTypeValue: ''
    }
  },

  methods: {


    selectOrderType(e) {
      const z = this.$store.state.TableModule.data.filter(person => {
        return person.type === e.target.value;
      });

      this.$store.state.TableModule.data = z;
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
        <input placeholder="Введите фрагмент" type="text">
      </div>

      <div>
        <p>Тип заказа:</p>
        <label>
          <select @change="selectOrderType($event)">
            <option disabled selected>Выберите из списка</option>
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