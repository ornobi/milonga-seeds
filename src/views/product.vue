<template>
<div> 
<div >
   <div v-if="unique" class="producta"> 
    <div>  
    <img v-bind:src=unique.image>
   </div>
  <div>
      <h1>{{unique.name}}</h1>
    <p class="description">{{unique.desc}}</p>
    <h3> {{unique.price}} €</h3>
     <v-btn color="gray" v-on:click="addToCart()">Add product </v-btn>
</div>
 <div class="glow"> 
 <p>Great discounts!</p>
<p>buy 3 get 4</p>
  <p>10% discount with 5 or more products!!!</p> 
    </div>
</div>
  <div class="propertyList"> 
  <div class="list"> 
  <h3>Flavors:</h3>
  <span v-for="(flavor, i) in unique.flavors" :key="i"> 
    <p> {{flavor}}</p>
</span>
</div>
<div class="list">
    <h3>Recreative effects </h3>
 <span v-for="(positive, i) in unique.effects.positive" :key="i"> 
    <p> {{positive}}</p>
 </span>
 </div>
 <div class="list"> 
 <h3>Side effects</h3>
<span v-for="(negative, j) in unique.effects.negative" :key="j"> 
    <p> {{negative}}</p>
</span>
</div>
<div class="list"> 
<h3>Medical effects</h3>
<span v-for="(medical, k) in unique.effects.medical" :key="k"> 
    <p> {{medical}}</p>
</span>
</div>
<div>
    <v-carousel height="200px" hide-delimiters class="carousel">
    <v-carousel-item 
     v-for="(product, i) in $store.state.products" 
      :key="i"
      :src="product.image"
    ></v-carousel-item>
  </v-carousel> 
</div>
</div>

</div>

</div>
</template>

<script>

import cart from './cart.vue'  
export default {
    components: {cart},
       computed: {
           products() {return this.$store.state.products},
           unique () {
               let product = this.$store.state.products.find(product => {
              return product.id == this.$route.params.id
               } )
            return product
           },         
        },
        methods: {addToCart(){this.$store.dispatch('addToCart', this.unique); }
        }
}
</script>

<style scoped>
.carousel {
  height: 80px;
  width: 400px;
  margin-left: 0%}

img {height: 290px;
width: 290px}

.description{margin-right: 100px;
margin-left:100px;
text-align:justify;
width:500px;}

.propertyList {display: flex;
flex-direction: row;
margin-left: 140px;
margin-top: 40px;}

.list { padding-right: 50px;
padding-left: 50px;
    margin-right: 5px;
margin-left: 5px;
border-style: solid;
border-color: dimgray
}
h5{margin-bottom: 20px;}

.producta{display:flex;
flex-direction: row;
margin-left: 140px;}

.glow {
  font-size: 25px;
  color:darkgreen;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgb(89, 255, 47), 0 0 40px rgb(89, 255, 47), 0 0 50px rgb(89, 255, 47), 0 0 60px rgb(89, 255, 47), 0 0 70px rgb(89, 255, 47);
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #4dff88, 0 0 40px #4dff88, 0 0 50px , #4dff88 0 0 60px #4dff88, 0 0 70px #4dff88, 0 0 80px #4dff88;
  }
}
</style>

 