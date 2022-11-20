<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> 
      <v-container >
    <v-row>
      {{dataEditor}}
      <v-col
        cols="12"
        md="6"
      >
        <v-textarea
          outlined
          name="input-7-4"
          label="Outlined textarea"
          value="please enter the text"
          v-model="dataEditor"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [],
      dataEditor: '',
    }
  },
  fetch() {
    this.getproduct()
  },
  methods: {
    async getproduct() {
      // Make a request for a user with a given ID
      try {
        const res = await this.$axios.put(
          'https://jsonplaceholder.typicode.com/posts' , this.dataEditor
        )
        // handle success
        // posts.value = response.data;
        this.mydata = res.data

        console.log('mydata', this.mydata)
        console.log('test ')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
