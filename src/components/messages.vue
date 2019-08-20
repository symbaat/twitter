<template>
<transition name="modal">
 <div class="modal-container" v-show="show">
    <div class="message-dialog" >
        <div class="message-header">
            <h2 class="title"> Direct Messages </h2>
            <div class="right-toolbar"></div>
            <button class="messageBtn">New Message</button>
            <button @click="close" class="closeBtn"> x </button>
        </div>
          <div class="message-container">
          <div class="conversation">
           <h1 class="start">Send a message, get a message</h1>
          </div>
        </div>
    </div>
</div>
</transition>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      show: true
    }
  },
   methods: {
    close(){
        this.show=false;
    }
   
  }
}
</script>

<style>
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

</style>