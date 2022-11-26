<template>
   <div>
      <v-form @submit.prevent="">
         <v-container>
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field v-model="email" :rules="[ rules.required , rules.emailRules ]" label="E-mail" required></v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col cols="12" md="4" class="mx-auto">
                  <v-text-field type="password" :rules="[ rules.required , rules.pass ]"  v-model="password" :counter="10" label="password" required>
                  </v-text-field>
               </v-col>
            </v-row>
            <v-row>
               <v-col md="4" class="mx-auto">
                  <v-btn type="submit">
                    register
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
         rules: {
         required: value => !!value || ' این فیلد اجباری است ',
         pass: v => v.length >= 8 || 'پس ورد باید حداعقل هشت کارکتر باشد',
         emailRules : v => /.+@.+/.test(v) || ' ایمیل باید صحیح باشد'
         },
   
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
       this.$store.commit('getLogout' ,  true)
       this.$router.push('/')
   
      }

   },
   created() {

      // console.log("test store", this.$store.getters.getapi);
      // this.$store.commit('getapi', 1000)
      // console.log("test next", this.$store.getters.getapi);
      // console.log("action", this.$store.dispatch('getApiAction'))
      // this.$store.commit('getCookies', this.$cookies.get('Tokens')) 
      console.log("cooke store1", this.$store.getters.getCookies);

   }

}
</script>
<style>

</style>
