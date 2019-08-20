<template>
  <div id="app">
    <router-view/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <div class="topbar" >
    <div class="global-nav">
     <div class="container">  
        <a href="https://abs.twimg.com/a/1529277625/icons/favicon.svg">
           <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" class="iconTwit"></a> 
           <div class="navigation">
            <ul class="nav-links" id="global actions">
              <li class="global-links"><router-link to="/" class="link">
              <i class="fas fa-home"></i>
              <span class="text">Home</span></router-link></li>
               <li class="global-links"><router-link to="/notifications" class="link">
               <i class="far fa-bell"></i>
               <span class="text">Notifications</span></router-link></li>
               <li class="global-links"><button class="message-modal" @click="showModal">
                 <i class="far fa-envelope"></i>  
              <span class="text">Messages</span>
              </button></li>
               <f-messages v-if="messageShow"></f-messages> 
         </ul>
        </div>
       <div class="right-nav"  >
         <div class="search">
           <input type="text" placeholder="Search Twitter" class="search-input" id="input" >
           <label><img src="./assets/search.png" alt="search" class="search-icon"></label>
         </div>
         <div class="right-side"  >
           <a href="#" class="dropdown" @click="dropDown"><img src="./assets/profile.jpg" class="profile-image"></a>
            <div class="userDropDown" v-show="profilemenu" >
             <ul class="user-toggle">
               <li class="userInfo"><a href="#" class="username">Symbat</a></li>
               <br>
               <li><a href="#" class="userlogin">@Sym</a></li>
               <li class="dropdown-divider"></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Profile</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Lists</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Moments</a></li>
               <li class="dropdown-divider"></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Twitter Ads</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Analytics</a></li>
               <li class="dropdown-divider"></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Setting and privacy</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Help center</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Keyboard shortcuts</a></li>
               <li class="currentUser"><a href="#" class="dropdown-link">Log out</a></li> 
               <li class="dropdown-divider"></li>
               <li class="nightmode"><a href="#" class="dropdown-link" id="dark" @click="nightMode">Night mode</a></li>              
             </ul>
            </div>
           <button @click="tweetModal" class="tweetBtn">Tweet</button>
           <tweet v-if="tweetShow"
                  @tweet="addPost"
           ></tweet>
          </div>
        </div>
        <d-delete v-if="showDelete"></d-delete>
      </div>
    </div> 
  </div>
</div>
</template>

<script>

import FMessages from "@/components/messages"
import tweet from "@/components/tweet"
import DDelete from "@/components/delete"
import HHome from "@/components/home"
export default {
  
  name: "App",
  components:{
  FMessages,
  tweet,
  DDelete,
  HHome
  },
  data() {
    return {
      tweet: "Tweet", 
      tweetShow: false,
      messageShow: false,
      showDelete: false,
      profilemenu: false,  
      active: 'black',
    }
  },
  methods: {
    showModal(){
      this.messageShow=!this.messageShow; 
    },
    tweetModal(){
      this.tweetShow=!this.tweetShow;
    },
    dropDown(){
     this.profilemenu=!this.profilemenu;
    },
    addPost(value){
      console.log('add post in app')
       this.$store.dispatch('addNewPost', {name: value, clicked: true})  
       this.newPost="";
    },  
    
    nightMode(){
      this.dark=!this.dark;  
      let divs = ['global-nav','trends','tweet-box', 'content-bar', 'right-sidebar', 'profile-left', 'userDropDown', 'tweet-container', 'message-header'];    
      let list = document.querySelectorAll("div");
      list.forEach(element => {  
        if(this.dark){
        for(let i=0; i<divs.length; i++){
        if(element.className===divs[i]){        
        element.classList.add("class", "dark-mode");
       console.log(element.className);
        }
        }
        }
        else {
          console.log("light")
          element.classList.remove("class", "dark-mode");
          console.log(element);    
       }
      });
      //classList.toggle
       
      let divs2 = ['home-container'];    
      let list2 = document.querySelectorAll("div");
      list2.forEach(element => {  
        if(this.dark){
        for(let i=0; i<divs2.length; i++){
        if(element.className===divs2[i]){        
        element.classList.add("class", "darkest-mode");
       console.log(element.className);
        }
        }
        }
        else {
          console.log("light")
          element.classList.remove("class", "darkest-mode");
          console.log(element);    
       }
      });

        let input=document.getElementById('input');
        if(this.dark){
          input.style.backgroundColor="#141d26";
          input.style.border="1px solid #141d26 ";
          input.style.color="white";
        } else{
          input.style.backgroundColor="";
          input.style.border="";
          input.style.color="";
        }
        let textarea=document.getElementById('textarea');
        if(this.dark){
          textarea.style.backgroundColor="#141d26";
        } else{
          textarea.style.backgroundColor="";
        }
          
    }
  }
  
};
</script>
<style>
/*Global side*/
.topbar {
  backface-visibility: hidden;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  height: 46px;
}
.global-nav {
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  height: 46px;
  width: 100%;
  position: relative;
  background: #fff;
}
.global-nav .container {
  max-width: 1190px;
  text-align: center;
  width: auto;
  height: 100%;
}
.container {
  margin: 0 auto;
  position: relative;
}
.navigation{
  float: left;
  display: inline-block;
  padding: 0;
  margin: 0;
}

/* Left side of bar (Links)*/
.nav-links {
  text-align: left;
  float: left;
  margin: 0;
  padding: 0;
  list-style: none; 
  list-style-type: none;
  display: block;
}

li {
  list-style-type: none;
  /* padding: 14px 5px; */
}
.global-links{
  display: inline-block;
  padding: 11px 5px;
  height: auto;
}

.link {
  margin: auto;
  text-decoration: none;
  display: block;
  cursor: pointer;
  text-align: left;
  font-family: "Segoe UI",Arial,sans-serif;
  font-size: 13px;
  position: relative;
  font-weight: bold; 
   
}
.global-links:hover{
   border-bottom: 2px solid #1da1f2;
   color: #1da1f2;
   transition: all .15s ease-in-out;
}
.link :hover {
  color: #1da1f2;
}
.link.active{
  border-bottom: 2px solid #1da1f2;
}
.text {
  color: #66757f;
  text-decoration: none;
  font-weight: bold;
  padding: 0;
  line-height: 1;
  font-size: 13px;
  font-family: "Segoe UI",Arial,sans-serif;
}
.text:hover{
  color: #1da1f2;
}
/* nav icons*/
i{
  font-size: 21px;
  color: #66757f;
}
i:hover{
  color: #1da1f2; 
}


/* Center of nav bar (Icon twitter)*/
.iconTwit {
  height: 30px;
  width: 30px;
  margin-top: 9px;
  vertical-align: baseline;
  position: absolute;
  left: 50%;
  margin-left: -25px;
}

/* Right nav bar*/
.right-nav {
  margin-left: 820px;
  height: 46px;
}
.search {
  float: left;
  height: 100%;
  padding: 0;
}
.search-input {
  float: left;
  height: 33px;
  margin: 7px 15px 0 0;
  font-size: 12px;
  width: 221px;
  background-color: #f5f8fa;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #14171a;
  display: block;
  height: 32px;
  line-height: 16px;
  padding: 8px 32px 8px 12px;
  transition: all 0.2s ease-in-out;
  font-family: "Segoe UI", Arial, sans-serif;
}
.search-icon {
  cursor: pointer;
  display: block;
  height: 15px;
  position: absolute;
  right: -30px;
  top: 15px;
  width: 15px;
  margin-right: 195px;
}
.right-side {
  float: right;
  position: relative;
  right: 20px;
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  text-align: left;
  height: 100%;
  z-index: 5;
}

.dropdown{
  height: 100%;
  padding: 0;
  display: block;
  line-height: 1;
  float: left;
}
.profile-image {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  margin-top: 8px;
}
.tweetBtn {
  float: left;
  background-color: #4ab3f4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  float: right;
  border-radius: 100px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  margin-left: 16px;
  text-decoration: none;
  color: white;
}
.tweetBtn:hover {
  background-color: #1DA1F2;
}
.message-modal {
  background: none;
  border: none;
  font-family: "Segoe UI", Arial, sans-serif;
  cursor: pointer;
}

.message-modal:hover{
  color: #1da1f2;
}

.userDropDown{
  left: auto;
  display: block;
  right: calc(50% - -25px - 3px);
  top: calc(100% - -3px - 2px);
  width: auto;
  min-width: 192px;
  position: absolute;
  float: left;
  padding: 10px 0;
  margin: 2px 0 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  background-clip: padding-box;
}
a{
  text-decoration: none;
}
.user-toggle{
  margin: 0;
  padding: 0;
  list-style: none;
}
.userInfo{
  position: relative;
  display: flex;
  float: left;
  padding-left: 16px;
  padding-right: 16px;
  white-space: nowrap;
  text-align: center;  
}
.username{
  color: #14171a;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  font-family: 'Segoe UI', Arial, sans-serif;
  padding: 0;
}
.userlogin{
  color: #657786;
  /* margin: 0; */
  font-size: 14px;
  line-height: 20px;
  font-family: 'Segoe UI', Arial, sans-serif;
  text-align: left;
  margin-left: -80px;
  margin-top: 5px;
}

.dropdown-divider{
  padding-top: 1px;
  margin: 5px 1px 6px;
  border-bottom: 1px solid #e6ecf0;
}
.currentUser{
  line-height: 25px;
}
.dropdown-link{
  line-height: 35px;
  color: #14171a;
  font-size: 14px;
  padding: 8px 16px;
  font-family: 'Segoe UI', Arial, sans-serif;
  font-weight: normal;
  text-align: center; 
  margin: 0;
  white-space: nowrap;
  clear: both;
}

.currentUser:hover{
  background-color:#1da1f2; 
}
.nightmode:hover{
  background-color:#1da1f2; 
}
.dropdown-link:hover{
  color: #fff;
}

.dark-mode{
  background-color: #1b2836 !important;
  color: #fff !important;
  border: 1px solid black !important;
}

.darkest-mode{
  background-color: #141d26;
  color: #fff !important;
  border: 1px solid black !important;
}


</style>
