<template>
   <div>
      <v-form @submit.prevent="" >
         <v-container >
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field v-model="email"  label="E-mail" required></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field type="password" v-model="password"  :counter="10" label="password" required>
                  </v-text-field>
               </v-col>
            </v-row>
             <v-row >
               <v-col md="4" class="mx-auto" >
               <v-btn   type="submit" @click="isLogin = !isLogin">
                    Switch to {{ isLogin ? 'login' : 'Signup' }}
                 </v-btn>
                 <v-btn  @click="onSubmith()">
                    login 
                 </v-btn>
               </v-col>
             </v-row>
         </v-container>
      </v-form>
   </div>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'


export default {
   
   data(){
      return({
         isLogin: true,
         email: '',
         password: '',
         apikeyLocal: ''
      })
   },
   component: {
      UserAuthForm
   },
   methods: {
    onSubmith() {
      this.$axios.post(''  , {
         
         email : this.email,
         password : this.password ,
        
 
      }).then(result => {
         console.log("ster" , this.apikeyLocal );
         
       
         localStorage.setItem( this.apikeyLocal , "1112222333###");
         
         this.$store.getters.getapi = localStorage.getItem(this.apikeyLocal );
         

         console.log(result)
      }).cath(e => console.log(e));

    }
    
   } ,
   created() {

      console.log( "test store" , this.$store.getters.getapi );
      this.$store.commit('getapi' , 1000)
      console.log( "test next" , this.$store.getters.getapi );

      
   }
  
}
</script>
<style>

</style>
