<template>
<div>
  <h1>{{postde.title}}</h1>
  <p>
    {{postde.body}}
  </p>

</div>
</template>
<script>


export default{
  data(){
    return {
      postde : ''
    }
    
  },
  async created() {
    try {
      const res = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
  
      )
      // handle success
      // posts.value = response.data;
      this.postde = res.data
      console.log("postde", this.postde)
      console.log("vbbb",this.$route.params.id)

    } catch (error) {
      console.log(error)
    }
  }, 
  head() {
      return {
        title: this.postde.title,
        meta: [
          // hid is used as unique identifier. Do not use  for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
   
}
</script>
