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
      v-model="page"
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
  data() {
    return {
      carddata: [

      ],

    }
  },

  fetch() {
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
  },
  methods: {
    getvaluerating(value , id) {
      console.log("this is " , value , id)
    },
    Refreshpage() {
      location.reload();
    }
  },

  components: {
    CardDetails,

  },

}
</script>
<style>
.main {
  /* background-image: url(../../assets/img/img.jpg); */
}
</style>
