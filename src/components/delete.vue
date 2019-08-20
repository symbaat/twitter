<template>
     <div class="delete-dialog" v-show="show">
       <div class="container">
        <div class="delete-modal" >
            <div class="modal-header">
             <h3 class="title">Are you sure you want to delete this Tweet?</h3>
             <button class="closeBtn" @click="close" >x</button>
            </div>
            <div class="modal-content">
              <div class="content">
                <div class="stream-header">
                 <a href="#"><img src="../assets/profile.jpg" class="modal-image"></a>
                 <a href="#" class="modal-login">Symbat</a>
                 <li v-for="post in posts" :key="post.id" class="deleted-post">
                  <p class="post-name" v-if="post.clicked">{{post.name}}</p>
              </li>
              </div>
            </div>
            </div>
            <div class="modal-footer">
               <button class="cancel-btn" @click="cancel">Cancel</button>
               <button class="delete-btn" @click="deletePost">Delete</button>
            </div>
        </div>
       </div>
     </div>
</template>


<script>
export default {
  name: 'delete',
  props:['posts'],
  data(){
    return{
      show: true
    }
  },
  methods: {
      close(){
          this.show=false;
      },
      deletePost(){
          this.$emit('deletePost');
      },
      cancel(){
          this.$emit('cancel');
      }
  }
}
</script>

<style>
.delete-dialog{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    z-index: 6000;

}
.delete-modal{
    height: 200px;
    width: 520px;
    background-color: #fff;
    margin: auto;
    margin-top: 120px;
    border-radius: 4px;
}
.modal-header{
    border-bottom: 1px solid #e6ecf0;
    padding: 12px;
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
.closeBtn{
    border: none;
    background: none;
    float: right;
    margin-top: -20px;
    font-size: 16px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
}
.modal-content{
    height: 90px;
    border-bottom: 1px solid #e6ecf0;
}
.content{
   height: 51px;
   padding: 15px;
   position: relative;
   text-align: left;
}
.stream-header{
    display: inline-block;
    cursor: pointer;
    max-width: 100%;
}
.modal-image{
   float: left;
   border-radius: 50%;
   height: 48px;
   width: 48px;
   border: 2px solid #fff;
   border: 0;
}
.modal-login{
    float: left;
    text-decoration: none;
    color: #14171a;
    font-weight: bold;
    font-family: 'Segoe UI', Arial, sans-serif; 
    font-size: 14px;
    margin-left: 5px;
}
.deleted-post{
    margin-left: -50px;
    margin-top: -5px;
    font-size: 14px;
    color: #14171a;
    line-height: 20px;   
}

.cancel-btn{
    background-color: #fff;
    border: 1px solid #66757f;
    color: #66757f;
    border-radius: 100px;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Segoe UI', Arial, sans-serif; 
    text-decoration: none;
    margin-top: 12px;
    margin-left: 320px;
}
.cancel-btn:focus{
    box-shadow:  0 0 0 2px #fff, 0 0 0 4px #ccd6dd;
    color:#66757f
}
.delete-btn{
    background-color: #e0245e;;
    border: 1px solid #e0245e;
    color: #fff;
    border-radius: 100px;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Segoe UI', Arial, sans-serif; 
    text-decoration: none;
    float:right;
    margin-right: 12px;
    margin-top: 12px;
}


</style>

