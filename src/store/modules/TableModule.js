import {getField, updateField} from "vuex-map-fields";

export default {
    state: {
        data: [],

        form: {
            sort: "", // Сортировка
            invoiceNumber: "", // Номер накладной
            orderType: [], // Получаем все типы из заказов
            orderTypeValue: '', // Значение заказа
        },
    },

    actions: {
        getData(context) {
            return fetch("http://localhost:5000/table")
                .then((response) => response.json())
                .then((data) => {
                    context.commit("SET_DATA", data);
                    context.commit("SET_DATA_ORDER", data);
                })
                .catch((err) => console.error(err));
        },
    },

    mutations: {
        updateField,

        SET_DATA(state, payload) {
            state.data = payload;
        },

        // Получаем типы заказов в массив orderType для отоброжение в <select> <option>
        SET_DATA_ORDER(state, payload) {
            payload.reduce((value, current) => {
                if (!value.find(item => item.type === current.type)) {
                    state.form.orderType.push(current.type)
                    return value.concat([current]);
                } else {
                    return value;
                }
            }, []);
        },

        // Сортируем массив по номеру накладной
        DATA_SORT(state, payload) {
            state.data.sort(function (a, b) {
                switch (payload) {
                    case 1:
                        return a.number.replace(/\D/g, '') - b.number.replace(/\D/g, '');
                    case 2:
                        return b.number.replace(/\D/g, '') - a.number.replace(/\D/g, '');
                }
            });
        },

        // Удаление элемента
        DELETE_ITEM(state, payload) {
            state.data.splice(payload, 1)
        },
    },

    getters: {
        getField,

        // Date
        padTo2Digits: () => num => num.toString().padStart(2, '0'),

        // Date
        formatDate: (state, getters) => date => {
            return (
                [
                    getters.padTo2Digits(date.getMonth() + 1),
                    getters.padTo2Digits(date.getDate()),
                    date.getFullYear(),
                ].join('/') +
                ' ' +
                [
                    getters.padTo2Digits(date.getHours()),
                    getters.padTo2Digits(date.getMinutes()),
                    getters.padTo2Digits(date.getSeconds()),
                ].join(':')
            );
        },

        // Фильтруем дату по типу заказу (по умолчанию пустая строка) и по типу Номера накладного
        data: (state, getters) => (orderType, invoiceNumber) => state.data.filter(value => {

            // Отоброжение даты в формате dd.mm.yyyy
            value.creationDate = getters.formatDate(new Date(value.creationDate))

            // Поиск Номер накладной:
            let search = value.number.toLowerCase().includes(invoiceNumber.toLowerCase());

            if (value.type === orderType) {
                return value.type === orderType && search
            } else if (orderType === '') {
                return value && search
            }

        }),

        orderType(state) {
            return state.form.orderType
        }
    },
};
