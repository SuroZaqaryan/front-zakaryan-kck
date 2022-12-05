<script>
import {mapActions, mapGetters} from "vuex";
import {mapFields} from "vuex-map-fields";
import BaseDelete from "@/components/Main/Delete/BaseDelete";

export default {
  components: {
    BaseDelete
  },

  computed: {
    ...mapGetters(["data"]),
    ...mapFields(["form.sort", "form.orderTypeValue",  "form.invoiceNumber",]),

    data() {
      return this.$store.getters.data(this.orderTypeValue, this.invoiceNumber);
    },
  },

  mounted() {
    this.getData();
  },

  methods: {
    ...mapActions(["getData"]),
  },
};
</script>


<template>
  <div class="main-card">
    <div class="card" v-for="(item, index) in data" :key="index">
      <div class="car-id">
        <p>{{ item.id }}</p>
        <img src="@/assets/Icons/Edit.svg" alt="Edit">
        <BaseDelete @click="$store.commit('DELETE_ITEM', index)" />
      </div>

      <div class="card-info">
        <div>
          <p class="card-desc">Номер накладной:</p>
          <p class="card-res">{{ item.number }}</p>
        </div>

        <div>
          <p class="card-desc">Тип заказа:</p>
          <p class="card-res">{{ item.type }}</p>
        </div>

        <div>
          <p class="card-desc">Дата создания:</p>
          <p class="card-res">{{ item.creationDate }}</p>
        </div>
      </div>
    </div>

    <template v-if="!data.length"><p class="data-empty">Нет элементов</p></template>
  </div>
</template>

<style lang="scss">
@import "@/assets/Style/BaseCard.scss";
</style>