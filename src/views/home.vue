<template>
<div> 

<video width="400" autoplay muted loop id="myVideo">
  <source src="../../videos/video2.mp4" type="video/mp4"/>
  
</video>


 <v-container > 
   <v-layout column> 
     <v-layout row>  
       </v-layout> 
  <v-flex>
<v-expansion-panel class="expansionPanel white">
      <v-expansion-panel-content v-for="(panel, i) in panels" :key="i">
        <template v-slot:header color="white">
         <h1> {{panel.title}}</h1>
        </template>
        <v-card class="textExpand">
          <v-card-text class="panelText"> {{panel.content}} </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
    </v-layout>
 </v-container>    
  </div>
</template>

<script>
export default {
    computed: {
        products() {return this.$store.state.products},        
},
data(){return{ 
panels: [{title: "About us", content: "Vestibulum sed lacus nec justo porta rhoncus non quis dui. Suspendisse id iaculis dui. Vestibulum at accumsan odio. Quisque interdum massa quis ex commodo facilisis. Etiam commodo rhoncus ante, id consectetur dui fermentum lacinia. Nullam auctor gravida est, nec bibendum risus. Proin non tempor nunc. Ut ac neque sed orci facilisis pellentesque. Phasellus ultricies lacus maximus eros fringilla eleifend. Nunc pellentesque venenatis justo, id facilisis sem placerat id. Fusce ut venenatis velit. Nunc turpis turpis, bibendum in maximus ut, varius sed est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel risus ac ex feugiat sagittis ac sit amet nisi. Praesent consectetur quis nisi eu blandit. Nulla sit amet risus eu ex eleifend condimentum vitae vel tortor."},
{title:"Medical Marijuana", content:"Vestibulum sed lacus nec justo porta rhoncus non quis dui. Suspendisse id iaculis dui. Vestibulum at accumsan odio. Quisque interdum massa quis ex commodo facilisis. Etiam commodo rhoncus ante, id consectetur dui fermentum lacinia. Nullam auctor gravida est, nec bibendum risus. Proin non tempor nunc. Ut ac neque sed orci facilisis pellentesque. Phasellus ultricies lacus maximus eros fringilla eleifend. Nunc pellentesque venenatis justo, id facilisis sem placerat id. Fusce ut venenatis velit. Nunc turpis turpis, bibendum in maximus ut, varius sed est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel risus ac ex feugiat sagittis ac sit amet nisi. Praesent consectetur quis nisi eu blandit. Nulla sit amet risus eu ex eleifend condimentum vitae vel tortor."},
{title:"News", content:"Vestibulum sed lacus nec justo porta rhoncus non quis dui. Suspendisse id iaculis dui. Vestibulum at accumsan odio. Quisque interdum massa quis ex commodo facilisis. Etiam commodo rhoncus ante, id consectetur dui fermentum lacinia. Nullam auctor gravida est, nec bibendum risus. Proin non tempor nunc. Ut ac neque sed orci facilisis pellentesque. Phasellus ultricies lacus maximus eros fringilla eleifend. Nunc pellentesque venenatis justo, id facilisis sem placerat id. Fusce ut venenatis velit. Nunc turpis turpis, bibendum in maximus ut, varius sed est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel risus ac ex feugiat sagittis ac sit amet nisi. Praesent consectetur quis nisi eu blandit. Nulla sit amet risus eu ex eleifend condimentum vitae vel tortor."}]
} }}
</script>

<style scoped>
.panelText {color:whitesmoke;
font-size: 20px;
text-align:justify}

.expansionPanel{
  display: flex;
  justify-content: center;
  width: 1000px;
  margin-top: 60px;
  margin-bottom: 20px;
  background-color: transparent;
  text-align: center;
}
a {
  text-decoration: none;
}
h1 {
  color:white
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;}
  .textExpand{
     background-color: transparent; } 
    

</style>

