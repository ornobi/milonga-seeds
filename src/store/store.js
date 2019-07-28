import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex, axios);
//Store EN MA-YUS-CU-LASSSSSSSSS
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');


const store = new Vuex.Store({
        state: {
            products: [],
            cart: cart ? JSON.parse(cart) : [],
            cartCount: cartCount ? parseInt(cartCount) : 0,

        },

        actions: {
            loadAPI({ commit }) {
                axios
                    .get('https://api.myjson.com/bins/ofmlv')
                    .then((data) => {



                        let products = data.data
                        commit('SET_PRODUCTS', products)
                    })
            },

            addToCart(context, item) { context.commit('addToCart', item) },
            erase(context, item) { context.commit('erase', item) },
            remove(context, item) { context.commit('remove', item) },
            saveCart(context) { context.commit('saveCart') },

        },
        mutations: {
            SET_PRODUCTS(state, products) {
                state.products = products

            },

            addToCart(state, item) {
                let found = state.cart.find(product => product.id === item.id);
                if (found) {
                    found.quantity++;
                } else {
                    state.cart.push(item);
                    Vue.set(item, 'quantity', 1);
                }
                state.cartCount++;
                this.commit('saveCart')
            },
            remove(state, item) {
                let found = state.cart.find(product => product.id === item.id);
                if (found && found.quantity > 1) {
                    found.quantity--;
                    state.cartCount--;
                } else {
                    let index = state.cart.indexOf(item);
                    let product = state.cart[index];
                    state.cartCount -= product.quantity;
                    state.cart.splice(index, 1);
                }

                this.commit('saveCart')
            },
            erase(state, item) {
                let index = state.cart.indexOf(item);
                if (index > -1) {
                    let product = state.cart[index];
                    state.cartCount -= product.quantity;
                    state.cart.splice(index, 1);
                }
                this.commit('saveCart')
            },


            saveCart(state) {
                window.localStorage.setItem('cart', JSON.stringify(state.cart));
                window.localStorage.setItem('cartCount', state.cartCount);


            }

        }

    },


)

export default store