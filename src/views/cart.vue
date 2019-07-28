<template>
<v-dialog max-width="900px" v-model="dialog">
        <v-btn  color="blue" slot="activator"> <v-icon> shopping_cart</v-icon> </v-btn>
        <v-card>  
    <div> 
 <div>
      <v-container> 
          <v-layout column>
     <table>
         <tr>
             <th></th>
             <th></th>
             <th>Units</th>
             <th></th>
             <th>+</th>
             <th>-</th>
             <th>Remove</th>
             <th>More Info</th>
         </tr>
         <tr v-for="(unique, i) in this.$store.state.cart" :key="i">
             <td>   <img v-bind:src=unique.image> </td>
            <td><h3> {{unique.name}} </h3></td>
             <td>  {{unique.quantity}}</td>
             <td> <span> {{unique.price}} € </span></td>
             <td> <v-btn color="green" v-on:click="addToCart(unique)"> <v-icon> add_shopping_cart</v-icon> </v-btn>  </td>
             <td> <v-btn color="yellow" v-on:click="remove(unique)"> <v-icon>  remove_shopping_cart </v-icon> </v-btn></td>
             <td>  <v-btn color="red" v-on:click="erase(unique)"> <v-icon> delete </v-icon>  </v-btn></td>
             <td> <v-btn color="light-blue" v-on:click="go('/product/' + unique.id)"> <v-icon>info</v-icon></v-btn> </td>
             
         </tr>
     </table>
  
    <v-layout column>    
        <v-layout row>     
      <v-flex> <h4>  Total products </h4> {{this.$store.state.cartCount}} </v-flex>  
       <v-flex> <h4>  Total price </h4> {{totalPrice2}} €</v-flex> 
       </v-layout> 
       <v-flex> <h3>   Final price with discounts </h3> <h2> {{totalPrice}} €</h2></v-flex> 
      <v-flex>  <v-btn color="blue"> <v-icon> euro_symbol </v-icon> </v-btn></v-flex>  
        </v-layout>
         </v-layout>
    </v-container> 
</div>
     </div>
     </v-card>
     </v-dialog>
</template>
<script>
export default {
    data(){ return { 
        dialog: false,
        cart:{
     
        } }
    },
  
    computed: {
           products() {return this.$store.state.products},

           unique () {
               let product = this.$store.state.products.find(product => {
              return product.id == this.$route.params.id
               } )
            return product
           },  

            totalPrice() {
        let total = 0;

        for (let product of this.$store.state.cart) {
            if (this.$store.state.cartCount < 5 && product.quantity / 4 >=1 ) 
            {total += product.price * product.quantity - product.price * Math.floor(product.quantity/4)}
            else if (this.$store.state.cartCount >= 5 && product.quantity / 4 >=1 ) 
            {total = product.price * product.quantity  - product.price * Math.floor(product.quantity/4) 
            let percent = total/10
             total = total - percent }
            else if (this.$store.state.cartCount >= 5 && product.quantity / 4 < 1) {total += product.price * product.quantity /10 * 9}
            else {total += product.price * product.quantity }
           
        }

        return total.toFixed(2);
    },
          totalPrice2() {
        let total = 0;
        for (let product of this.$store.state.cart) { 
         total += product.price * product.quantity }
        return total.toFixed(2);
    }
        },


    methods: {addToCart(product){this.$store.dispatch('addToCart', product); } ,
    erase(product){this.$store.dispatch('erase', product)},
     remove(product){this.$store.dispatch('remove', product)},
     go(path){
         this.dialog = false;
        this.$router.push(path)
         
     }  
}}
</script>
<style >
input {background-color: gray;
height: 20px;}
img {height: 40px;
width: 40px}
a {
    text-decoration: none
}
</style>
