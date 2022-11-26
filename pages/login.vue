<template>
   <div>
      <v-form @submit.prevent="">
         <v-container>
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field v-model="email" label="E-mail" required></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field type="password" v-model="password" :counter="10" label="password" required>
                  </v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col md="4" class="mx-auto">
                  <v-btn type="submit">
                    regester
                  </v-btn>
                  <v-btn @click="onSubmith()">
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
   middleware: 'login' ,
   data() {
      return ({
         email: '',
         password: '',
         cookie: ''
      })
   },
   component: {
      UserAuthForm
   },
   fetch() {
   
  },
 
   methods: {
      onSubmith() {
         this.$store.dispatch('getApiAction' , "ghkklklkhfhdhghjhgjgh" )
       
         
       console.log("cooke store", this.$store.getters.getCookies);
       this.$router.push('/')

      }

   },
   created() {

      // console.log("test store", this.$store.getters.getapi);
      // this.$store.commit('getapi', 1000)
      // console.log("test next", this.$store.getters.getapi);
      // console.log("action", this.$store.dispatch('getApiAction'))
      this.$store.commit('getCookies', this.$cookies.get('Tokens')) 
      console.log("cooke store1", this.$store.getters.getCookies);

   }

}
</script>
<style>

</style>
