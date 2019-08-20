<template>
  <div class="notification-page">
   <div class="notification-container">
     <div class="left-sidebar">
          <div class="trends">
            <h3>Trends for you</h3>
        </div>
     </div>
     <div class="content-bar">
       <div class="notification-content">
         <ul class="heading">
           <li>
             <a href="#">All</a>
           </li>
           <li>
             <a href="#">Mentions</a>
           </li>
         </ul>
         </div>
         <div class="notification-module">
           <h3 class="title">See when people follow, like, Retweet or mention you.</h3>
           <p class="body">From likes to Retweets and a whole lot more, this is where all the action happens about your Tweets and followers.</p>
           <div class="notification-types">
            <div class="notification-active">
             <span class="follow-icon"><img src="../assets/follow.jpg" class="notif-icon"></span>
             <div class="activity">
               <p class="activity-header">Followers</p>
               <p class="activity-body">New followers? Congrats! You'll get the details on this very tab.</p>
             </div>
            </div>
            <div class="notification-active">
            <span class="like-icon"><img src="../assets/like.jpg" class="notif-icon"></span>
             <div class="activity">
               <p class="activity-header">Likes</p>
               <p class="activity-body">When someone taps the heart on your Tweet, that means they like it (or love it).</p>
             </div>
            </div>
            <div class="notification-active">
             <span class="retweet-icon"><img src="../assets/retweet.png" class="notif-icon"></span>
             <div class="activity">
               <p class="activity-header">Retweets</p>
               <p class="activity-body">When someone shares one of your Tweets, you should know about it. That's why you'll get a notification.</p>
             </div>
            </div>
            <div class="notification-active">
             <span class="reply-icon"><img src="../assets/reply.png" class="notif-icon"></span>
             <div class="activity">
               <p class="activity-header">Replies</p>
               <p class="activity-body">When someone's got something to say about your Tweet, the reply will show up here.</p>
             </div>
            </div>
           </div>
         </div>     
     </div>
     <div class="right-sidebar">
       <h3>Who to follow</h3>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      newPost: '',
      posts: []
  }
},
    methods: {
  addPost(){
    var post= this.newPost.trim();
    this.posts.push({name: post, clicked: true});
    this.newPost="";
  }
  },
  mounted(){
    this.$refs.search.focus();
  }
  
}
</script>


<style scoped>
/* Home page*/
.notification-page{
  height: auto;
  position: fixed;
  background: #e6ecf0;
  top:0;
  right:0;
  left: 0;
  position: relative;
}
.notification-container{
  width: 1195px;
  padding: 56px 40px 15px 55px;
  height: 1000px;
  text-align: center;
  margin: 0 auto;
  overflow: auto;
}

/*Left side bar */
.left-sidebar{
 float: left;
 width: 290px; 
 height: 800px;
 
}
.profile-left{
 background-color: white;
 height: 250px;
 margin-bottom: 10px;
}

/* Profile */

.profile-top{
background-color:#1DA1F2;
}
.profile-image{
  border-radius: 50%;
  height: 72px;
  width: 72px;
  border: 2px solid #fff;
  margin-left: -155px;
  margin-top: 75px;
  margin-bottom: -40px;
}
.name{
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
.login{
  position: absolute;
  top: 180px;
  left: 140px;
  width: 185px;
}
.log{
  text-decoration: none;
  color: #66757f;;
}
.following{
  padding-top: 70px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
  
}

.tweets{
  text-decoration: none;
  color: #66757f;
  margin-left: -200px;
  font-weight: bold;
  transition: .15s;
  margin-left: -80px;
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
  width: 290px;
  height: 400px;
  background-color: white;
} 

/* Content bar*/
.content-bar{
  float: left;
  margin: 0 10px;
  width: 590px;
  border: 1px solid white;
  height: 800px;
  background-color: white;
}

.tweet-box{
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border: 1px solid #e6ecf0;
  background-color: #E8F5FD;
  margin-bottom: 5px;
}
.tweet-user{
  border-radius: 0;
  position: relative;
  padding: 25px 12px;
  top: -20px;
}
.prof-image{
  border-radius: 50%;
  height: 30px;
  width: 30px;
  float: left;
  margin-top: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.tweet-area{
  position: relative;
  margin-bottom: 30px;
  top: 5px;
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
textarea:focus{
  box-shadow: 0 0 6px rgba(0, 200, 222, 0.25); 
  border: 2px solid #9bd9ff;
  transition: .2s;
  height: 60px;
  
}
::placeholder {
    color: #1DA1F2;
}
::placeholder:focus {
    color: #66757f;
}

.tweet-box-bottom{
  margin-bottom: 10px; 
}

.tweetBtn{
 background-color: #1DA1F2;
 border-radius: 20px;
 background-color: none;
 cursor: pointer;
 float: right;
 border-radius: 100px;
 box-shadow: none;
 cursor: pointer;
 font-size: 14px;
 font-weight: bold;
 line-height: 20px;
 padding: 6px 16px;
 position: relative;
 text-align: center;
 margin-top: -40px;
 margin-right: 15px;
 text-decoration: none;
 color: white;
}

.post-banner{
  height: 1000px;
 
}

.your-post{
 width: 565px;
 border-bottom: 0.5px solid #e6ecf0;
 cursor: pointer;
 margin-bottom: 10px;
 
}

.post-name{
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}

/* Right side bar*/
.right-sidebar{
  float:left;
  width: 270px;
  height: 800px;
  border: 1px solid white;
  background-color: white;
}
h3{
float: left;
margin-left: 15px;
font-family: 'Segoe UI', Arial, sans-serif;
}

/*Notification header*/
.notification-content{
  margin-top: 40px;
  border-bottom: 1px solid #e6ecf0;
}
ul{
  list-style: none;
  margin: -35px;
  padding: -10px;
}
li{
  padding: 5px;
}
a{
  text-decoration: none;
  cursor: pointer;
  color: #14171a;
  font-weight: bold;
  font-size: 18px;
}

/*Notification content*/
.notification-module{
  padding: 64px;
  display: block;
  text-align: left;
  background-color: #fff;
  background-repeat: no-repeat; 
}
.title{
  color: #14171a;
  font-size: 27px;
  line-height: 32px;
  margin-bottom: 8px;
  white-space: pre-wrap;
  font-weight: bold;
  font-family: 'Segoe UI', Arial sans-serif;
}
.body{
  color: #657786;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  font-family: 'Segoe UI', Arial sans-serif;
  margin: 0 15px;
}

.notification-types{
  margin-top: 64px;
  display: block;
}
.notification-active{
  display: flex;
  margin-bottom: 20px;
}
.notif-icon{
  height: 30px;
  width:  30px;
  margin-right: 18px;
}
.activity{
  margin-top: -15px;
}
.activity-header{
  margin-bottom: 5px;
  color: #14171a;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  font-family: 'Segoe UI', Arial sans-serif;
}
.activity-body{
  color: #657786;
  font-size: 12px;
  line-height: 16px;
  font-family: 'Segoe UI', Arial sans-serif;
  margin-top: -5px;
}
</style>
