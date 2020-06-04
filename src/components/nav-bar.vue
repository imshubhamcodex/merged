<template>
  <div>

    <nav v-show = "showbar" class="navbar navbar-expand-lg navbar-light sticky-top bg-light" style="padding-top:0px;">
      <div class="container">
        <a class="navbar-brand" href="/index.html">
          <img style="width:134px" src="../assets/roomlelologo.png" alt="">
        </a>
        <button class="btn btn-primary" >find home</button>
        <button class="navbar-toggler text-dark" type="button" v-on:click="showNav()">
          <span class="navbar-toggler-icon"></span>
        </button> 
      </div> 
    </nav>





    <div v-show = "shownav" id="nav-menu" style="margin-top:0px; font-family:Montserrat; margin-bottom:50px; background:white; width:100%; padding-top:20px;min-height:600px;">
      <ul style="margin:0;padding:0;padding-left:20px;padding-right:20px;">
        <li style="list-style:none;float:right;" @click="closeNav()"><i @click="closeNav()" class="fa fa-times" aria-hidden="true"></i></li><br>
        <li style="list-style:none;" @click="closeNav()"><router-link style="color:black;" to="/"><p>Home</p></router-link></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Scheduled Visits</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>About us</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Join our Family</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p><span style="font-size:16px;margin-right:10px;">Refer & Earn</span><button style="border:0;outline:0;background:red;font-size:12px;color:white;padding:1px;padding-bottom:0px;"> HURRY UP</button></p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Blog</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Roomlelo terms</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Privacy policy</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>FAQ</p></li>
        <li style="list-style:none;margin-top:14px;"><hr style="border:0.5px solid black;"></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For House Owner</p></li>
        <li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>For Corporates</p></li>
        <li style="list-style:none;margin-top:30px;"><router-link style="color:black;" to="/login_signup_user"><button type="" style="font-family:Montserrat;border:1px solid black;padding-top:2px;padding-left:3px;padding-right:3px;height:35px;">CREATE ACCOUNT</button><button type="" style="float:right;font-family:Montserrat;background:black;color:white;padding-top:2px;padding-left:3px;padding-right:3px;width:100px;height:35px;">LOG IN</button></router-link></li>
      </ul>

    </div>


  </div>

</template>

<script>
export default {
  data () {
    return {
      showbar:true,
      shownav:false
    }
  },
  methods:{
    showNav(){
      var x = document.getElementById('nav-menu');
      gsap.from(x,0.5,{opacity:0,ease:Power2.easeInOut,x:50})

      this.showbar = false;
      this.shownav = true;

      document.getElementById('homeComp').style.display = 'none'
    },
    closeNav(){
      this.showbar = true;
      this.shownav = false;

      document.getElementById('homeComp').style.display = 'block'

    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=Montserrat");
body{
  overflow-x:hidden;
}
</style>
