<template>

  <div class="row">
  <div class="col-2"></div>
  <div class="col-7">
    
    <form @submit.prevent="postNewImage" class="form-inline mb-5">
       <div class="form-group">
          <label for="imageUrl">Image URL</label>
            <input
              v-model="newImageUrl"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image URL"
              id="imageUrl"
            />
        </div>

      <div class="form-group">
        <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
            />
        </div>

    <button type="submit" class="btn btn-primary ml-2">Post
        image</button>
    </form>

    <instagram-card v-for="card in filteredCards" :key="card.url" :info="card"/>

  </div>
  <div class="col-3">
       
    Sidebar
      
    <div class="card-body p-0">

    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostCard from "@/components/PostCard.vue";
import store from "@/store";
import { db, storage } from "@/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { catchClause } from "@babel/types";
let cards= []
//... API/firebase/neki drugi server-> sve kartice --> cards
cards =[
  {'url': "https://picsum.photos/id/29/400/400", description: 'mountain', time: 'few  seconds ago...'},
  {'url': "https://picsum.photos/id/42/400/400", description: 'coffee', time: 'few  minutes ago...'},
  {'url': "https://picsum.photos/id/55/400/400", description: 'plant', time: 'hour ago...'},
  {'url': "https://picsum.photos/id/420/400/400", description: 'city', time: 'few  hours ago...'}
]
export default {
  name: 'HomeView',
  data: function (){
      return{
        //ključ: vrijednost
        cards,
        store,
        newImageDesc: "",
        newImageUrl: "",
        loading: false,
      };
  },
 mounted() {
    this.getPosts();
  },
  methods: {
    handleImages(files) {
      this.imageReference = files[0];
    },
    async getPosts() {
      this.cards = [];
      const q = query(
        collection(db, "posts"),
        orderBy("posted_at", "desc"),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        this.cards.push({
          id: doc.id,
          time: data.posted_at,
          description: data.desc,
          url: data.url,
          user: data.email,
        });
      });
    },
   async postNewImage(){
     try{
        this.loading = true;
        const imageDescription = this.newImageDescription;
        const url=this.newImageUrl;
       const docRef = addDoc(collection(db, "posts"), {
          url: url,
          desc: imageDescription,
          email: store.currentUser,
          posted_at: Date.now(),
        });
       console.log("spremljeno ", docRef, ", korisnik: ", store.currentUser);
        this.newImageDescription = "";
        this.imageReference = null;
        this.getPosts();
        this.loading = false;
     } catch(e) {
        console.log("error!!! : " , e);
     }
          
    },
  },
  computed: {
      filteredCards() {
        //kako se filtrira
        let termin=this.store.searchTerm;
        let newCards= []
        for (let card of this.cards){
          if (card.description.indexOf(termin) >=0) {
              newCards.push(card)
          }
        }
        return newCards;
      }
  },
  components: {
    PostCard
  }
}
</script>