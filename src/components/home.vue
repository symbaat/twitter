<template>
  <div class="home-page" id="page-home">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
      <div class="home-container"  >
     <div class="left-sidebar">
         <div class="profile-left" >
          <div class="profile-top">
             <a href="#"><img src="../assets/profile.jpg" class="profile-image"></a>
           </div>
           <div class="profile-bottom">
             <div class="login"><a href="#" class="name">Symbat</a>
             <br>
             <a href="#" class="log">@Sym</a>
             </div>
               <div class="following">
                <li class="profile-card">
               <a href="#" class="tweets">Tweets<br>
               <span class="tweet-col">0</span></a>
               </li>
               <li class="profile-card">
               <a href="#" class="followers">Following
                 <span class="follow-col">11</span></a>
                 </li>
             </div>
           </div>
        </div>
        <div class="trends">
            <h3>Trends for you</h3>
        </div>
     </div>
     <div class="content-bar">     
      <div class="tweet-box">
        <div class="tweet-user">
          <img src="../assets/profile.jpg" class="prof-image">
          <div class="tweet-area">
            <div class="post-area">
              <textarea v-model="newPost" placeholder="What's happening?" id="textarea" @blur="qwe" @focus="asd"></textarea>
            </div>
         </div>
        </div> 
      </div>
       <div class="tweet-box-bottom" v-show="showBottom">
          <div class="tweet-box-left">
           <i class="fas fa-image"></i>
           <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class= "tweet-box-right">
            <i class="fas fa-plus-circle"></i>
           <button @mousedown="addPost" class="tweet-button" :disabled="q">Tweet</button>
          </div>
        </div>
            <div class="post-banner">
              <li v-for="post in posts" :key="post.id" class="your-post">
                <img src="../assets/profile.jpg" class="prof-image">
               <p class="post-name" v-if="post.clicked">{{post.name}}</p>
               <button class="caretBtn" @click="toggleShow"><img src="../assets/caret.png" class="caret"></button>
               <div class="right-menu">
               <div class="dropDown-menu" v-if="showMenu">
                 <ul class="dropdown-links"> 
                   <li class="action"><button class="downLink">Share via Direct Message</button></li>
                   <li class="action"><button class="downLink">Copy link to Tweet</button></li>
                   <li class="action"><button class="downLink">Embed Tweet</button></li>
                   <li class="action"><button class="downLink" @click="deleteModal">Delete Tweet</button></li>
                   <li class="action"><button class="downLink">Pin to your profile page</button></li>
                   <li class="divider"></li>
                   <li class="action"><button class="downLink">Add to New Moment</button></li> 
                  </ul>
                </div>
               </div>
              </li>        
         </div>
     </div>
     <div class="right-sidebar">
       <h3>Who to follow</h3>
     </div>
     <f-messages v-if="messageShow"></f-messages>
      <d-delete v-if="showDelete"
                @deletePost="deletePost"
                @cancel="cancel"
                :posts="posts"
      ></d-delete>
   </div>
  </div>
</template>

<script>
import FMessages from "@/components/messages"  
import DDelete from "@/components/delete"
import EmojiPicker from 'vue-emoji-picker'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    FMessages,
    DDelete,
    EmojiPicker,
  },
  data () {
    return {
      newPost: '',
      messageShow: false,
      tweetShow: false,
      showMenu: false,
      showDelete: false, 
      dark: false,
      showBottom: false,
      focuson: false,
  }
},
  computed: {
     ...mapState({
       posts: state=>state.posts
     }),
     q() {
       return this.newPost === "";
     }
  },
  methods: { 
   addPost(){
    console.log('add button clicked');
    this.$store.dispatch('addNewPost', {name: this.newPost, clicked: true})  
    this.newPost="";
    this.showBottom=false;
  },
  toggleShow(){
    this.showMenu=!this.showMenu;
  },
  deleteModal(){
    this.showDelete=!this.showDelete;
  },
  deletePost(post){
    var index= this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.showDelete=false;
  },
  cancel(){
    this.showDelete=false;
  },
  asd() {
    console.log("focus");
    this.showBottom = true;
    this.focuson=!this.focuson;
    let focus=document.getElementById('textarea');
    console.log(this.focuson1);
    focus.style.height="60px";
    
  },
 
  qwe() {
    this.showBottom=false; 
    let focus2=document.getElementById('textarea');
    focus2.style.height="";
    console.log("blur");
  }
  }
  
}
</script>


<style scoped>
/* Home page*/
.home-page{
  height: 1000px;
  position: fixed;
  background: #e6ecf0;
  top:0;
  right:0;
  left: 0;
  overflow: auto;
  width: auto;
}
.home-container{
  width: 1290px;
  padding: 56px 10px 40px 55px;
  height: 900px;
  text-align: center;
  padding-left: 80px;
}

/*Left side bar */
.left-sidebar{
 float: left;
 width: 290px; 
 height: 800px;

}
.profile-left{
 background-color: #fff;
 height: 215px;
 margin-bottom: 10px;
}

/* Profile */
.profile-top{
 background-color:#1DA1F2;
 height: 95px;
 margin-top: -1px;
 padding: 0;  
 background-position: 0 50%;
}
.profile-image{
  border-radius: 50%;
  height: 72px;
  width: 72px;
  border: 2px solid #fff;
  margin-left: -200px;
  margin-top: 60px;
  margin-bottom: -40px;
}
.profile-image:first-child:last-child{
  transition: box-shadow .15s ease-in-out;
}
.name{
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
.login{
  position: absolute;
  top: 160px;
  left: 120px;
  width: 185px;
}
.log{
  text-decoration: none;
  color: #66757f;
}
.following{
  padding-top: 70px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
  
}
.profile-card{
  display: inline-block;
}

.tweets{
  text-decoration: none;
  color: #66757f;
  font-weight: bold;
  transition: .15s;
  margin-left: -100px;
  font-size: 14px;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.followers{
 text-decoration: none;
 color: #66757f;
 font-weight: bold;
 transition: .15s;
 margin-left: 20px;
 font-size: 14px;
 font-family: 'Segoe UI', Arial, sans-serif;
}
.followers:hover{
  color: #1DA1F2;
}
.tweets:hover{
  color: #1DA1F2;
}
span{
 text-decoration: none;
 color: #1DA1F2;
 font-weight: bold;
 
}
.tweet-col{
  margin-left: -110px;
}
.follow-col{
 margin-left: -30px;
}



/*Trends for you*/
.trends{
  width: 288px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #fff;
  position: relative;
} 

/* Content bar*/
.content-bar{
  float: left;
  margin: 0 10px;
  width: 590px;
  height: 600px;
  background-color: white;
}

.tweet-box{
  background-color: #E8F5FD;
  position: relative;
}
.tweet-user{
  border-radius: 0;
  position: relative;
  padding: 20px 10px;
}
.prof-image{
  border-radius: 50%;
  height: 30px;
  width: 30px;
  float: left;
  margin-bottom: 20px;
  margin-left: 20px;
}
.tweet-area{
  position: relative;
}
textarea{
  resize: none;
  border-radius: 6px;
  width: 490px;
  height: 20px;
  padding: 4px;
  margin: 0;
  outline: 0;
  background-color: #fff;
  border: 1px solid #9bd9ff;
  font-size: 14px;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: .2s linear;
  line-height: 20px;
  overflow: hidden;
  cursor: text;
}
/* textarea:focus{
  box-shadow: 0 0 6px rgba(0, 200, 222, 0.25); 
  border: 2px solid #9bd9ff;
  transition: .2s;
  height: 60px;
  outline: none;
} */
::placeholder {
    color: #1DA1F2;
}

.tweet-box-bottom{
  position: relative;
  height: 40px;
  width: 590px;
  padding-top: 10px;
  background-color: #E8F5FD;
}
.tweet-box-left{
  position: relative;
  float: left;
  padding-left: 70px;
}
.tweet-box-right{
  position: relative;
  float: right;
  padding-right: 20px;
}
i{
  color: #4ab3f4;
  font-size: 24px;
  line-height: 24px;
  margin-top: 5px;
  margin-left: 5px;
}

.tweet-button{ 
 border-radius: 100px;
 background-color: #4ab3f4;
 border:none;
 cursor: pointer;
 float: right;  
 font-size: 14px;
 font-weight: bold;
 line-height: 20px;
 padding: 6px 16px;
 position: relative;
 text-align: center;
 margin-left: 10px;
 color: white;
 border: 1px solid #1da1f2;
}
.tweet-button:disabled {
  opacity: 0.4;
}
.tweetBtn:hover{
  background-color: #1DA1F2;
}
.post-banner{
  height: 1000px;
}

.your-post{
 width: 590px;
 height: 60px;
 border-bottom: 0.5px solid #e6ecf0;
 cursor: pointer;
 margin-top: 10px;
}

.post-name{
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}

/* Right side bar*/
.right-sidebar{
  float:left;
  width: 290px;
  height: 400px;
  border: 1px solid white;
  background-color: white;
 
}
h3{
  float: left;
  margin-left: 15px;
  font-family: 'Segoe UI', Arial, sans-serif;
}


/*Modal (messages)*/
.modal-container{
  display: block;
  justify-content: center;
  overflow: auto;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 6000;
}
.message-dialog{
   border-radius: 5px;
   flex-direction: column;
   max-width: 750px;
   min-width: 425px;
   overflow: hidden;
   position: relative;
   width: 45vw;
   margin: auto;
}

/* Message header*/
.message-header{
    align-items: center;
    background-color: #fff;
    border-bottom:1px solid #e6ecf0;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    min-height: 65px;
    padding: 10px 15px 10px 15px; 
   
}
/*Message body*/
.message-container{
    display: flex;
    flex-direction:column;
    flex-grow: 1;
    height: 80vh;
    min-height: 450px;
    overflow: hidden;
    background-color: #fff;
}
.title{
    flex: 1 1 auto;
    color: #14171a;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    min-width: 0;
    margin: 0;
    font-family: 'Segoe UI',Arial sans-serif;
}
.right-toolbar{
   display: flex;
   justify-content: flex-end;
   flex-basis: 56px;
}
.messageBtn{
    background-color: #4AB3F4;
    color: #fff;
    margin-right: 30px;  
    border: 1px solid #1da1f2;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 12px;
    line-height: 16px;
    padding: 4px 12px;
    border-radius: 100px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: .15s;
}
.messageBtn:hover{
    background-color: #1da1f2;

}
.closeBtn{
    clip: rect(0,0,0,0);
    background: none;
    border: 0;
    cursor: pointer;
    color: #657786;
    font-size: 16px;
}
h1{
    text-align: center;
    font-family: 'Segoe UI', Arial, sans-serif;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .10s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}


/* Dropdown menu*/
.right-menu{
  padding-right: 15px;
  padding-left: 400px;
  padding-bottom: -25px; 
  margin-top: -10px;
  margin-right: -100px;
  
}
.caretBtn{
  padding: 2px 9px;
  color: #657786;
  border: 0px;
  background: none;
  cursor: pointer;
  margin-right: -330px;
}

.dropDown-menu{
   position: absolute;
   display: block;
   width: 195px;
   height: 230px;
   background-color: #fff;
   float: left;
   border-radius: 4px;
   box-shadow: 0 1px 4px rgba(0,0,0,0.25);
   margin-left: 120px;
   align-items: center;
}
.dropdown-links{
  float: left;
  margin-left: -37px;
}
.downLink{
  border: none;
  background-color: #fff;
  float: none;
  position: relative;
  color: #66757f;
  font-size: 14px;
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 20px;
  cursor: pointer;
  font-weight: normal;
  white-space: nowrap;
  padding-top: -10px; 
}
.action{
  float: left;
  margin-top: -10px; 
  width: 180px;
  padding: 10px 5px;
  text-align: left;
}
.divider{
  border-bottom: 1px solid #e6ecf0;
  width: 190px;
  margin-top: 155px;
}
.action:hover{
  background-color: #1da1f2;
  color:#1da1f2;
}
.downLink:hover{
  background-color: #1da1f2;
  color: #fff;
}

</style>
