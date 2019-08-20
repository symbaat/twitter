<template>
 <div class="tweet-container" v-show="qwe">
  <div class="content-bar">
    <div class="tweet-header">
     <h3 class="title">Compose new Tweet</h3>
     <button class="tweet-close" @click="close">x</button>
    </div>
     <div class="tweetModal-box" >
        <div class="tweetModal-user">
          <img src="../assets/profile.jpg" class="prof-image">
          <div class="tweetModal-area">
            <div class="post-area">
              <textarea v-model="tweetPost" class="tweetModal-textarea" placeholder="What's happening?" ></textarea>
            </div>
         </div>
        </div>
        <div class="tweet-box-bottom">
          <div class= "tweet-box-right">
           <button @click="addPost" class="tweetButton">Tweet</button>
          </div>
        </div>
       </div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    value: String
  },
  data(){
    return{
      qwe: true,
      tweetPost: "",
      
    }
  },
  methods:{
    close(){
      this.qwe=false;
      this.clicked=true;
    },
    addPost(){
      console.log('added');
      console.log(this.tweetPost);
      this.$emit("tweet", this.tweetPost);
      this.close();
      
    }
  },
  
}
</script>

<style>
.tweet-container{
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
.tweet-header{
   padding-top: 12px;
   padding-bottom: 12px;
   border-bottom: 1px solid #9bd9ff;
}
.title{
  width: 75%;
  font-size: 18px;
  margin: 0 auto;
  font-weight: bold;
  font-family: 'Segoe UI', Arial, sans-serif; 
  text-align: center;
  color: #14171a;   
}
.tweet-close{
  border: none;
  background: none;
  float: right;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  margin-top: -20px;
  margin-right: 10px;  
}
.content-bar{
  float: left;
  margin: auto;
  width: 610px;
  border: 1px solid white;
  height: auto;
  background-color: white;
  margin-top: 20px;
  margin-left: 378px;
  border-radius: 6px;
  position: relative;
}
.tweetModal-box{
  border: 1px solid #e6ecf0;
  background-color: #E8F5FD; 
  height: 142px;
  padding: 8px 12px;
}
.tweetModal-user{
  border-radius: 0;
  position: relative;
  padding: 25px 12px;
  top: -20px;
  margin-left: -15px; 
  width: 100%;
}
.prof-image{
  border-radius: 50%;
  height: 32px;
  width: 32px;
  float: left;
  margin-bottom: 20px; 
}
.tweetModal-area{
  position: relative;
  height: 90px;
  width: 600px;
}
.post-area{
  line-height: 20px;
  margin: 0;
  padding: 0;
}
.tweetModal-textarea{
  resize: none;
  border-radius: 8px;
  width: 530px;
  height: 75px;
  padding: 4px;
  margin: 0;
  outline: 0;
  background-color: #fff;
  border: 2px solid #9bd9ff;
  font-size: 14px;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: .2s linear;
  line-height: 20px;
  overflow: hidden;
  cursor: text;
  margin-left: 5px;
}

.tweetButton{
 background-color: rgb(114, 187, 231);
 border: none;
 background-color: none;
 border-radius: 100px;
 cursor: pointer;
 float: right;
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
.tweetBtn:hover{
  background-color: #1DA1F2;
}

</style>