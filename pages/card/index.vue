<template>
  <div>
    <v-container fluid class="main">
      <v-row>
        <v-col class="col-4" v-for="( items, item ) in carddata" :key="item.id">
          <card-details :props="items" :id="item"></card-details>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-pagination
      :length="6"
      @input="Refreshpage"
    ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardDetails from '~/components/CardDetails.vue'
export default {
  middleware: 'log' ,
  data() {
    return {
      carddata: [

      ],

    }
  },

  fetch() {
    this.fetchProduct()
  },
  methods: {
    getvaluerating(value , id) {
      console.log("this is " , value , id)
    },
    Refreshpage() {
      this.fetchProduct()
    },
    fetchProduct(){
      this.carddata = []
      const imgdata = [
      '/img/img0.jpg',
      '/img/img1.jpg',
      '/img/img2.jpg',
      '/img/img3.jpg'
    ]

    for (let index = 0; index < 6; index++) {
      this.carddata.push({
        id: 1,
        img: imgdata[Math.floor(Math.random() * imgdata.length)],
        title: 'این یک عنوان آزمایشی است ',
        descrition:
          ' این هست توضیحات آزمایشی متن این هست توضیحات آزمایشی متن  این هست توضیحات آزمایشی متن این هست توضیحات آزمایشی متن ',
        price: '$25.82'
        
      })
    }
    }
  },

  components: {
    CardDetails,

  },

}
</script>
<style>

</style>
