<template>
 <div class="about">
 <h1>This is a signup page</h1>
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
    <input 
    type="email" 
    v-model="username"
    class="form-control"
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter
    email" />
 <small id="emailHelp" class="form-text text-muted" >We'll
never share your email with anyone else.</small>
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 <input 
    type="password" 
    v-model="password" 
    class="form-control"
    id="exampleInputPassword1" 
    placeholder="Password" />
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Repeat password</label>
 <input 
    type="password" 
    v-model='repeatPassword' 
    class="form-control"
    id="exampleInputPassword2" 
    placeholder="Password" />
 </div>
 <button type="button" @click="signup" class="btn btn-primary">Submit</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>


<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase";
import { Firestore } from '@firebase/firestore';
export default {
    name: "signup",
    data(){
        return {
            username: "",
            password: '',
            repeatPassword: ''
        };
    },        
    
    methods: {
        signup(){
           const auth=getAuth();
            
            createUserWithEmailAndPassword(auth, this.username, this.password)
            .then(() => console.log("Uspješna registracija: " , this.username))
            .catch((error) =>
                alert("lozinka prekratka - mora biti barem 6 znakova"))
                      ;  
         
           
            console.log('nastavak');
        },
    },
};
</script>