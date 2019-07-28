import home from './views/home.vue'
import search from './views/search.vue'
import product from './views/product.vue'
import receipt from './views/receipt.vue'

export default [
    { path: '/', component: home },
    { path: '/search', component: search },
    { path: '/product/:id', props: true, component: product },
    { path: '/receipt', component: receipt }
]