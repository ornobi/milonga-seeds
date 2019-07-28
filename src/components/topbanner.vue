<template>
<div class="banner">
    <!-- app para que quede fijada arriba -->
<v-toolbar flat app class="green">
  <v-toolbar-side-icon @click="drawer= !drawer"> </v-toolbar-side-icon>
<v-container>
    <v-layout row> 
                <div class="logo"> 
<v-flex class="brand">   <p>Martinsson  & Clerk</p> </v-flex> 
  <img src="https://png2.kisspng.com/sh/1a13e35540ed5d11b255cb11c73038a2/L0KzQYm3U8I3N5RriZH0aYP2gLBuTf1wdpDohNc2Z3XxhL3sjfFvNZRxgeI2YYL3PbjsjwRtbZ5mhp8AYXK7SLbsVfFmQWE7UZCAOUm4RIO9UME2OmM1TKYBNEW6QYa1kP5o/kisspng-monocle-gentleman-clip-art-gentleman-5ab88ee5ae9069.599542601522044645715.png" alt="">
</div>  
<v-flex> <a href="mailto: milongaseeds@hotmail.com">  <v-icon > email</v-icon> contact</a> </v-flex>
<v-flex>  <router-link to="/search">  <v-icon >search</v-icon> search </router-link> </v-flex>
<v-flex>  <router-link to="/"><v-icon>home</v-icon> home </router-link> </v-flex>
 <v-flex>  
     
              
       <v-badge
            
            color="red"
            right
          >
             <cart> </cart>
            <template v-slot:badge>      
              <span>{{$store.state.cartCount}}</span>
            </template>
          
          </v-badge> 
          
         
          </v-flex>
     
     </v-layout>
     
</v-container>
 </v-toolbar>
  <v-navigation-drawer app v-model="drawer" class="green">
     
    <v-list v-for="(product, i) in $store.state.products" :key="i"> 
     <router-link v-bind:to="'/product/' + product.id">
      <v-list-tile >
          {{product.name}}
      </v-list-tile>
        </router-link>
    </v-list>
   
    </v-navigation-drawer>
</div>    

</template>

<script>
import cart from '../views/cart' 
export default { 
  data() {return{
    drawer:false,
    products() {return this.$store.state.products}
  }
  },
      components: {cart}
}
</script>

<style scoped>
.banner {margin-bottom: 0px;}
v-icon {
margin-left:50px;
margin-right: 50px;
}
/* .green {display: flex;
flex-direction: row;
justify-content: space-around} */
.top{color:blanchedalmond}
a {text-decoration: none;
color:blanchedalmond;
font-size: 20px}
p {color: black;
font-size: 20px}
.logo{ display: flex;
flex-direction: row; 
    margin-top: 0px;}
img {height: 40px;
width: 40px}
.brand{font-size: 20px}
</style>
