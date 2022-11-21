<template>
  <div>
    this is post
    
    <v-data-table :headers="headers" :items="dataprocces" class="elevation-1">
      <template #item.id="{ value }">
        <nuxt-link :to="`/post/${value}`">
          {{ value }}
        </nuxt-link>
      </template>
      <template #item.body="{ value }">
        {{ value }}
        <div class="text-center">
          <v-btn @click="controlDialog(value)"> click here this </v-btn>
        </div>
      </template>
      <template #item.img="{ value }">
        <div>
        
          <v-img
            max-height="171"
            max-width="220"
            :src="value"
          ></v-img>
        </div>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
        
        </v-card-title>

        <v-card-text>
          {{ content }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      imgdata : [
      '/img/img0.jpg',
      '/img/img1.jpg',
      '/img/img2.jpg',
      '/img/img3.jpg'
    ],
      dialog: false,
      content: '',
      postdata: [],
      dataprocces: [],
      headers: [
        {
          text: 'img',
          align: 'start',
          sortable: false,
          value: 'img',
        },
        { text: 'Calories', value: 'id' },
        { text: 'Fat (g)', value: 'title' },
        { text: 'Carbs (g)', value: 'body' },
      ],
    }
  },

  // fetch() {
  //   this.getproduct()
  // },
  methods: {
    controlDialog(value) {
      console.log('post content', value)
      this.dialog = true
      this.content = value
    },

    // async getproduct() {
    //   // Make a request for a user with a given ID
    //   const config = {
    //     headers: {
    //       Accept : "application/json"
    //     }
    //   }
    //   try {
    //     const res = await this.$axios.get(
    //       'https://icanhazdadjoke.com/search' , config
    //     )
    //     // handle success
    //     // posts.value = response.data;
    //     this.postdata = res.data.results

    //     console.log('mydata', res)
    //     console.log("fgfgggg");
    //   } catch (err) {
    //     console.log("tou",err)
    //   }
    // },
  },
  async created() {
    try {
      const res = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      console.log("before the loop ", res.data);
      for (let index = 0; index < res.data.length; index++) {
        this.dataprocces.push({
            id: res.data[index].id,
            title: res.data[index].title,
            body:  res.data[index].body,
            img: this.imgdata[Math.floor(Math.random() * this.imgdata.length)] 
            
        } )
      }
      console.log(this.dataprocces);

      this.postdata = res.data
    } catch (error) {
      console.log(error)
    }
  },
  
}
</script>
<style>
.mother {
  color: white;
}
</style>
