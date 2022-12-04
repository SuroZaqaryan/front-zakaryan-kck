<script>
import {mapActions, mapGetters} from "vuex";
import {mapFields} from "vuex-map-fields";
import BaseDelete from "@/components/Main/Delete/BaseDelete";

export default {
  components: {BaseDelete},

  mounted() {
    this.getData();
  },

  computed: {
    ...mapGetters(["data"]),
    ...mapFields(["form.sort", "sortList"]),
  },

  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<template>
  <div>
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
          <BaseDelete @click="$store.commit('DELETE_ITEM', index)" />
        </th>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
@import "@/assets/Style/Table.scss";
</style>


<!--Тестовое задание КСК Технологии для frontend-разработчиков с использованием Router и Vuex.-->
<!--Требуется разработать приложение на vue.js на основе тестового задания:-->
<!--1. реализовать табличный вид списка заказов-->
<!--2. реализовать виджеты для просмотра карточек заказов-->
<!--3. добавить переключатель виджеты/таблица и использовать vue-router для переключения вида (с пустого роута делать редирект на табличный вид)-->
<!--4. использовать vuex для хранения данных о заказах (данные взять из приложенного json файла)-->

<!--Макет в figma (https://www.figma.com/file/Hn1gkcIVwmsLanaQgtCx80/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%BC-%D0%B2%D0%B8%D0%B4%D0%BE%D0%BC?node-id=0%3A1)-->

<!--Если макет отличается от описания задания, то приоритет выше у описания задания.-->

<!--Фильтр-->
<!--Должны быть реализованы два фильтра:-->
<!-- - по номеру накладной (фильтр без учёта регистра с поиском по подстроке)-->
<!-- - по типу заказу (выбор из списка значений)-->

<!--Сортировка-->
<!--Сортировка по умолчанию отсутствует.-->
<!--Доступен выбор сортировки по номеру накладной по возрастанию и по убыванию.-->

<!--Данные таблицы и карточек-->
<!--Реализовать функцию, которая будет получать данные из приложенного json файла, приводить их в необходимый для отображения формат и размещать в стор.-->
<!--Удаление – удаление элементов из стора.-->

<!--Id – текст-->
<!--Тип заказа – должно отображаться значение из списка: «Самовывоз», «Курьерская доставка», «Доставка в пункт выдачи» (в данных соответственно «Pickup», «Delivery», «Pick-point»).-->
<!--Номер накладной – текст.-->
<!--Дата создания - отображать дату в формате dd.mm.yyyy hh:mm:ss-->
<!--Требования к проекту-->
<!--Создание проекта Vue 2 с помощью vue-cli:-->
<!--vue create <app-name>-->
<!--Включаем такие модули:-->
<!--Babel,-->
<!--Router,-->
<!--Vuex,-->
<!--CSS Pre-processors,-->
<!--Linter-->