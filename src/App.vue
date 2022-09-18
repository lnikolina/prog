<template>
 
 <div id="app">
   	  <nav id="nav" class="navbar">
      	        
        <a class="navbar-brand" href="#">
         
          alt="" 
          width="50" 
          height="50">
          Fipugram
        </a>
      
      
      <router-link to="/login">Prijava</router-link> |
      <router-link to="/signup">Registracija</router-link> |
      <a href="#" @click="logout()" class="px-2">Logout</a>
      
      <form class="form-inline my-2 my-lg-0">
      <input 
          v-model="store.searchTerm" 
          class="form-control me-2" 
          type="search" 
          placeholder="Pretraživanje" 
          aria-label="Search" />
      </form>
    </nav>

     
    
    <div class="container">
        <router-view/>
     </div>
 </div>
 
  
</template>


<script>
import store from "@/store"
import { getAuth, onAuthStateChanged, signInAnonymously, signOut} from "firebase/auth";
import app from "@/firebase";
import router from "@/router"
const auth=getAuth();
onAuthStateChanged(auth, user=> {
    if(user){
    //user signed in
        console.log("***", user.email);
        store.currentUser=user.email;
    }
    else
      //user not signed in
    console.log("*** no user")
     store.currentUser="";
    if(router.name != "login")
        router.push({name: "login"})
})
export default {
    name: 'app',
    data() {
      return {
        store: store
      }
    },
  
  methods: {
    logout(){
      const auth=getAuth()
      signOut(auth)
      .then(() => {
          this.$router.push({name: "login"})
      })
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  background-color: rgb(238, 202, 247) !important;;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>