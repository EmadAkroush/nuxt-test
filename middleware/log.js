 export default function (context) {
    console.log("middleware is running");
    if(context.store.getters.apikey == null ){
      
      context.redirect("/post");

    }

 }