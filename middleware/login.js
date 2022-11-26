export default function (context) {
    context.store.dispatch('setAction' )
      if( context.store.getters.getCookies  ){
        
        context.redirect("/");
  
      } 
  
   }