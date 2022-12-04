import {getField, updateField} from "vuex-map-fields";

export default {
    state: {
        data: [],

        form: {
            sort: "", // Сортировка
            invoiceNumber: "", // Введите фрагмент
            orderType: [], // Тип заказа
        },

        sortList: [
            {id: 1, name: "Номер накладной 1"},
            {id: 2, name: "Номер накладной 2"},
        ],
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

        sortOrderType({commit, getters}, payload) {
            commit('SORT_ORDER_TYPE', {payload, getters})
        }
    },

    mutations: {
        updateField,

        SET_DATA(state, payload) {
            state.data = payload;
        },

        SET_DATA_ORDER(state, payload) {
            payload.reduce((acc, current) => {
                if (!acc.find(item => item.type === current.type)) {
                    state.form.orderType.push(current.type)
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
        },

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

        SORT_ORDER_TYPE(state, {payload, getters}) {
             getters.data.find((value, idx) => {
                if(value.type !== payload) {
                   getters.data.splice(value, idx)
                }
            })
        },

        DELETE_ITEM(state, payload) {
            state.data.splice(payload, 1)
        }
    },

    getters: {
        getField,

        data(state) {
            return state.data;
        },

        orderType(state) {
            return state.form.orderType
        }
    },
};
