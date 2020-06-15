<template>
<div id="propReg" style="background-image: url('./img/dronephoto.jpg');background-repeat: no-repeat;background-size: 100vw 40vw;">
<nav class="navbar navbar-light ">

    <img src="./../assets/roomlelologo.png" class="mb-5 ml-5 mt-2" width="25%" height="30%" alt="">
 
  <form class="form-inline my-2 my-lg-0">
      <svg class="bi bi-envelope mail" style="width:15em;height:5em"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
  <path d="M.05 3.555C.017 3.698 0 3.847 0 4v.697l5.803 3.546L0 11.801V12c0 .306.069.596.192.856l6.57-4.027L8 9.586l1.239-.757 6.57 4.027c.122-.26.191-.55.191-.856v-.2l-5.803-3.557L16 4.697V4c0-.153-.017-.302-.05-.445L8 8.414.05 3.555z"/>
</svg>
    </form>
</nav>
<div class="card text-center  mx-auto " style="width:80%;border-radius:25px;box-shadow: 7px 9px 30px -22px rgb(0, 0, 0);">
  <div class="card-header ">
    Become Our partner
  </div>
    <div class="form-group text-left mx-3">
    <!-- <label for="formGroupExampleInput  ">Name</label> -->
    <vs-input class="inputx mt-4" label-placeholder="Name"  v-model="name" style="width:100%"/>
    <!-- <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" v-model="name"> -->
  </div>
  <div class="form-group text-left mx-3">
    <!-- <label for="formGroupExampleInput2">Mobile Number</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="+91" v-model="phoneNumber"> -->
    <vs-input class="inputx mt-4" label-placeholder="Phone Number" v-on:keyup="numberCheck" danger-text="Phone number should have 10 digit starting from [6-10] " :danger="check" v-model="phoneNumber" style="width:100%"/>
  </div>
  <div class="form-group text-left mx-3">
    <!-- <label for="formGroupExampleInput3">Location</label>
    <input type="text" class="form-control" id="formGroupExampleInput3" placeholder=""  v-model="location"> -->
     <vs-input class="inputx mt-4" label-placeholder="Location"  v-model="location" style="width:100%" />
  </div>
    <ul class="d-flex justify-content-center">
    
    <li>
      <vs-radio v-model="housetype" vs-name="radios1" vs-value="Flat" class="mx-2 ">Flat</vs-radio>
    </li>
    <li>
      <vs-radio v-model="housetype" vs-name="radios1" vs-value="House" class="mx-2">House</vs-radio>
    </li>
    <li>
      <vs-radio v-model="housetype" vs-name="radios1" vs-value="PG" class="mx-2">PG</vs-radio>
    </li>
    <li>
      <vs-radio v-model="housetype" vs-name="radios1" vs-value="Building" class="mx-2">Building</vs-radio>
    </li>
   
  </ul>
  <button type = "submit" class="btn btn-primary mx-auto w-30 mb-6" @click="requestcall">Request a call</button>
</div>
 <p class="text-center mt-5">By sharing your detail you agree to aur privacy policy</p>

  <div class="row p-5">
    <div class="col-xl-3 col-6 ">
      <img src="../assets/city.png" alt="" style="height:inherit;width: 85px;
    margin: auto;">
      <p class="text-muted text-center" style="font-weight:bold;font-size:x-large">1</p>
      <p class="text-muted text-center" style="font-weight:bold;font-size:medium">City</p>
    </div>
    <div class="col-xl-3 col-6">
      <img src="../assets/owner.png" alt="" style="height:inherit;width: 85px; margin: auto;">
      <p class="text-muted text-center" style="font-weight:bold;font-size:x-large">100+</p>
      <p class="text-muted text-center" style="font-weight:bold;font-size:medium">Property Owner</p>
    </div>
    <div class="col-xl-3 col-6">
      <img src="../assets/bed.png" alt="" style="height:inherit;width: 85px; margin: auto;">
      <p class="text-muted text-center" style="font-weight:bold;font-size:x-large">2200+</p>
      <p class="text-muted text-center" style="font-weight:bold;font-size:medium">Beds</p>
    </div>
    <div class="col-xl-3 col-6">
      <img src="../assets/happy.png" alt="" style="height:inherit;width: 85px;margin: auto;">
      <p class="text-muted text-center" style="font-weight:bold;font-size:x-large">700+</p>
      <p class="text-muted text-center" style="font-weight:bold;font-size:medium">Satisfied Customer</p>
    </div>
  </div>

  <!-- //////why choose roomlelo// -->
 <h3 class="text-center my-3" style="font-size: xx-large;font-weight: bold;">Why choose Roomlelo</h3>
  <div class="row p-2">
    <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="fade-right" data-aos-duration="5000">
      <img src="../assets/Property Manegment.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Property Manegment</h4>
      <p class="card-text my-2"> Experience a hassle-free way to rent & manage your property. From finding tenants to tedious household chores we take care of everything (e.g. advertising, finding tenants, paper work, maintenance & repairs)</p>
      </div>
    </div>
    <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="fade-left" data-aos-duration="5000">
      <img src="../assets/Higher Returns.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Higher returns</h4>
      <p class="card-text my-2">Roomlelo works to get you maximum & long term booking by generating demand through its website and call center. Our rental default schemes provides you secured & gauranteed payment on time. Save time and money list with Roomlelo.</p>
      </div>
    </div>
   <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="fade-right" data-aos-duration="5000">
      <img src="../assets/Technology.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Technology</h4>
      <p class="card-text my-2"> Manage all your property related operations on mobile phone. Our technology is designed to manage all aspects of propertymanagement. Get 100% visibility of property performance (e.g. booking earning statement, check-in, & check-out)</p>
      </div>
    </div>
  </div>

  <!-- ////steps to partner/// -->
     <h3 class="text-center" style="font-size: xx-large;font-weight: bold;">Steps to partner</h3>
    <div class="row p-2">
    <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="flip-right" data-aos-duration="5000">
      <img src="../assets/Steps to partner 1.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Step 1</h4>
      <p class="card-text my-2"> Enter your details and we will call you to discuss</p>
    
      </div>
    </div>
    <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="flip-left" data-aos-duration="5000">
      <img src="../assets/Steps to partner 2.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Step 2</h4>
      <p class="card-text my-2"> Sign up with Roomlelo.</p>
     
      </div>
    </div>
   <div class="col-xl-4 col-10 mx-auto my-3">
      <div class="card p-2" style="box-shadow: 7px 9px 30px -22px rgb(0, 0, 0)" data-aos="flip-right" data-aos-duration="5000">
      <img src="../assets/Steps to partner 3.png" class="img-top mb-5" alt="">
      <h4 style="font-weight:bold" class="my-2">Step 3</h4>
      <p class="card-text my-2"> Sign up with Roomlelo.</p>
      
      </div>
    </div>
  </div>
      

  <!-- ////steps to partner end/// -->
    <footer></footer>
   </div>
</template>

<script>
import * as firebase from 'firebase';
export default {
  data () {
    return {
      title:"my vue file",
      name:'',
      phoneNumber:'',
      location:'',
      housetype:'',
      showbar:false,
      check:false,
    }
  },
  created(){
    this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar 
  },
  methods:{
    numberCheck(){
      // console.log(this.phoneNumber);
      var num = this.phoneNumber[0];

      if(this.phoneNumber.length!=10||num<6)
      this.check= true;
      else
      this.check= false;
    },
    requestcall(){
    
  
   console.log(this.phoneNumber.length);
    if(this.name.length==0||this.location.length==0||this.phoneNumber.length!=10||this.housetype.length==0)
    {
      alert("Detail are incorrect");
      return
    }  
    firebase.firestore().collection('newPropertyRequest').doc(this.name+this.phoneNumber+this.location).set({

					name : this.name,
					location: this.location,
          phoneNumber: this.phoneNumber,
          propertyType:this.housetype
					
         
        }).catch(function(error){
          console.log("nhi hua")
        })
       
        alert("request Submittied")
        window.location.reload();
  }
  
  },
}
</script>


<style scoped>
  @media (max-width: 800px) {
   #propReg{
     background-size: 100vw 112vw!important;
   }
  }
  @media (max-width: 480px) {
   .mail{
     width: 8em!important;
     height: 3em!important;
   }
  }
</style>
