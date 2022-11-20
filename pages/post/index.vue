<template>
  <div>
    this is post

    <v-data-table :headers="headers" :items="postdata" class="elevation-1">
      <template #item.id="{ value }">
       <nuxt-link :to="`/post/${value}`">
       {{value}}
      </nuxt-link>
    </template>
    <template #item.body="{ value }">
    {{value}}
      <div class="text-center">
    <v-dialog
 
      width="500"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
        مشاهده بیشتر 
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          
        </v-card-title>

        <v-card-text>
          {{value}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            بستن
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      postdata: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
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
  // methods: {

  //   async getproduct() {
  //     // Make a request for a user with a given ID
  //     const config = {
  //       headers: {
  //         Accept : "application/json"
  //       }
  //     }
  //     try {
  //       const res = await this.$axios.get(
  //         'https://icanhazdadjoke.com/search' , config
  //       )
  //       // handle success
  //       // posts.value = response.data;
  //       this.postdata = res.data.results

  //       console.log('mydata', res)
  //       console.log("fgfgggg");
  //     } catch (err) {
  //       console.log("tou",err)
  //     }
  //   },
  // }
  async created() {
    try {
      const res = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      // handle success
      // posts.value = response.data;
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
