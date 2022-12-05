<script>
import {mapActions} from "vuex";
import {mapFields} from "vuex-map-fields";
import BaseDelete from "@/components/Main/Delete/BaseDelete";

export default {
  components: {BaseDelete},

  mounted() {
    this.getData();
  },

  computed: {
    ...mapFields(["form.sort", "form.orderType", "form.invoiceNumber", "form.orderTypeValue"]),

    data() {
      return this.$store.getters.data(this.orderTypeValue, this.invoiceNumber);
    },
  },

  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<template>
  <div class="table-wrapper">
    <table>
      <tr class="title">
        <th>ID</th>
        <th>Номер накладной</th>
        <th>Тип заказа</th>
        <th>Дата создания</th>
        <th></th>
      </tr>

      <tr class="data" v-for="(item, index) in data" :key="index">
        <th>{{ item.id }}</th>
        <th>{{ item.number }}</th>
        <th>{{ item.type }}</th>
        <th>{{ item.creationDate }}</th>
        <th class="edit">
          <img src="@/assets/Icons/Edit.svg" alt="Edit">
          <BaseDelete @click="$store.commit('DELETE_ITEM', index)"/>
        </th>
      </tr>
    </table>
    <template v-if="!data.length">
      <p class="data-empty">Нет элементов</p>
    </template>
  </div>
</template>

<style lang="scss">
@import "@/assets/Style/Table.scss";
</style>