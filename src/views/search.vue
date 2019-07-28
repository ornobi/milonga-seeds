<template>

    <div>
        <div class="ckbxWrap">   
           <v-menu offset-y>
          <v-btn slot="activator"> <v-icon>expand_more</v-icon> Filter by recreative effect </v-btn>
          <v-list>
              <v-list-tile v-for="(positive,i) in eraseDuplicate" :key="i">
        <label :for="positive">{{positive}} </label>
                <input type="checkbox" :value="positive" :id="positive" v-model="posit">
              </v-list-tile>
          </v-list>
      </v-menu>
        <div class="searchBox">
            <v-icon size="40px">sentiment_very_dissatisfied</v-icon> 
          <h2>+</h2> 
          <input type="text" v-model="search" placeholder="search strains">
            <h2>=</h2>
            <v-icon size="40px" > mood</v-icon>
        </div>
            <v-menu offset-y>
          <v-btn slot="activator"> <v-icon>expand_more</v-icon> Filter by medical effect </v-btn>
          <v-list>
              <v-list-tile v-for="(medical, j) in eraseDuplicate2" :key="j">
        <label :for="medical">{{medical}} </label>
                <input classs="input" type="checkbox" :value="medical" :id="medical" v-model="posit">
              </v-list-tile>
          </v-list>
      </v-menu>
      </div>
        <!-- <div class="ckbxWrap">  -->
        <!-- <div class="checkbox"> -->
            <!-- <p>Filter by recreative effects: </p>
            <span  v-for="(positive,i) in eraseDuplicate" :key="i">
                <label :for="positive">{{positive}} </label>
                <input type="checkbox" :value="positive" :id="positive" v-model="posit">
            </span> -->

        <!-- </div> -->
        <!-- <div class="checkbox">
            <p> Filter by medical effects: </p>
            <span v-for="(medical,i) in eraseDuplicate2" :key="i">
                <label :for="medical">{{medical}}</label>
                <input type="checkbox" :id="medical" :value="medical" v-model="posit">
            </span>

        </div>
        </div> -->
        <div class="wrapper">
            <div class="productPreview" v-for="(product, i) in filteredStrains " :key="i">

                <div>
                    <router-link v-bind:to="'/product/' + product.id">
                        <img class="showProduct" :src="product.image">
                    </router-link>
                    <div>
                        <router-link v-bind:to="'/product/' + product.id">
                            <p class="prodName">{{product.name }}</p>
                        </router-link>
                    </div>

                    <div>
                        <p class="price">{{product.price}} $</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </template>
<script>
export default {
    data(){
        return{
            search:'',
            posit:[]
            
         
       
        }
    },
    computed: {
        products() {return this.$store.state.products},
       
        filteredStrains: function() {
            return this.$store.state.products.filter(product => product.name.toUpperCase().includes(this.search.toUpperCase())).filter(weed => this.posit.every(positiveEffect => [ ...weed.effects.positive, ...weed.effects.medical ].includes(positiveEffect)))
        },
            
          eraseDuplicate: function() {
            let positive = []
            let products = this.$store.state.products
            for (let i = 0; i < products.length; i++) {  
               for(let key in products[i].effects){
                   for (let j = 0; j < products[i].effects[key].length; j++) {
                     switch (key) {   
                   case "positive":
                             if (!positive.includes(products[i].effects[key][j])) {     
                     positive.push(products[i].effects[key][j]);
                             break;  
                             }
                   }
               }    
            }     
            }
   
            return positive.sort()
          
    },

 eraseDuplicate2: function() {
            let medical = []
            let products = this.$store.state.products
            for (let i = 0; i < products.length; i++) {
               for(let key in products[i].effects){
                   for (let j = 0; j < products[i].effects[key].length; j++) {
                     switch (key) {
                         case "medical":
                             if (!medical.includes(products[i].effects[key][j])) {
                     medical.push(products[i].effects[key][j]);    
                }
                break;
                   }
               }    
            }     
            }
   
            return medical.sort()
          
    },        
    }

}

</script>

<style scoped>
input { 
    margin-left: 5px;
}
img {
    
    height: 250px;
    width: 205px;
    display: "";
}
.productPreview{
  display: flex;
  flex:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: dotted;
  border: black;
  margin-left: 10px;
  margin-right: 10px;
 
}

.wrapper{
    display: flex;
flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;

}
a {text-decoration: none}
input {
    margin-top: 0px;
    height: 30px;
   background-color:springgreen;
   color: white 
}
.checkbox{
    display: flex;
    flex-wrap: wrap;
    border-style:double;
    border-color: darkblue;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px
}
.ckbxWrap{display: flex;
flex-direction: row;
justify-content: center}
.price{font-size: 14px;}
.prodName{font-size: 18px;}
a{text-decoration: none}
.searchBox{display:flex;
flex-direction:row;
margin-bottom:10px}
</style>

//  función de filtro por search y checkbox
//         filteredStrains: function() {
        
//         se crea la variable filteredbystrainname que es igual a el metodo FILTER del array original que
//         va a ver si el name transformado en mayúsculas (las mayusculas para que no sea una busqueda literal)
//         incluye lo que está guardado en la string search que esta ligada con un v- model al input field, asi
//         se filtraran por nombre los productos

//             let filteredByStrainName = this.$store.state.products.filter(product => {
//                 return product.name.toUpperCase().includes(this.search.toUpperCase());
//             })
            
//         se crea letfilteredbypositiveeffect que será igual a (filteredbystrainname) la variable anterior que es el filter search que se hizo en el paso anterior, esta sera filtrada primero  decretando  un array que se
//         generara con un spread method y buscara los efectos positivos y medicos
//         let filteredByPositiveEffect = filteredByStrainName.filter(weed => {
                            
//                 let weedEffects = [ ...weed.effects.positive, ...weed.effects.medical ];
//             luego se crea una variable que con el metodo every (que cheque si cada elemento de un array cumple con una condicion) que va a buscar dentro del array posit (el que está ligado por v-model con los checkboxes) y va a hacer un return con los elementos que estén incluidos tanto en posit como en weedeffects que era la variable que estaba creada mediante el metodo spread en la linea anterior
//                 let returnThisWeed = this.posit.every(positiveEffect => {
//                     return weedEffects.includes(positiveEffect)
//                 })
//             se hace return de esta variable y luego un return de filteredby positiveeffect que es la funcion filtro madre que las contiene a todas
//                 return returnThisWeed

//             })
//             return filteredByPositiveEffect
            
//         },
//         esta es la versión corta de la función hay que comentarla bien no colgarse