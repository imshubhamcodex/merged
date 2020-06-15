<template>
<div>
    <!-- ///book now modal object form for tab and phone/// -->
    <div class="modal fade" id="booknow-sm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">Book now form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card  px-lg-4 py-lg-4 m-2 p-2 text-center sticky-top" id="bookbar">
                    <h4>Book a visit!</h4>
                    <hr>

                    <form>
                        <div id="collapseTarget2" class="collapse show">
                            <div class="form-group">
                                <label for="nameInput">Full Name</label>
                                <input type="text" class="form-control" id="nameInput1" v-model="form.name">
                            </div>
                            <div class="form-group">
                                <label for="numberInput">Phone number</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">+91</div>
                                    </div>
                                    <input type="text" class="form-control" id="numberInput1" v-model="form.phone">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="nameInput"> Visit Date </label>
                                <input type="date" class="form-control" id="dateInput1" v-model="form.date">
                            </div>
                            <button type="button" class="btn btn-primary" @click="sendOTP" data-toggle="modal"
                                :data-target="OTPModal" data-dismiss="modal">
                                Sent OTP
                            </button>
                            <hr>
                            <small>Or call +91-9711999999</small>
                        </div>
                    </form>
                </div>
                
            </div>
 
            </div>
        </div>
        </div>
    <!-- ///book now modal objecy form for tab and phone end/// -->

        <button type="button" class="btn btn-primary sticky-top" data-toggle="modal" data-target="#booknow-sm">
            Book now
            </button>
    <!-- otp modal box         -->
    <div class="modal fade" id="OTPModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">OTP</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form-inline myform" v-if="!validation">
                        <div class="form-group mb-2">
                            <label for="OTP" class="sr-only">Enter OTP</label>
                            <input type="text" readonly class="form-control-plaintext" id="OTP" value="Enter OTP"
                                style="margin-top:20px;" />
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">OTP</label>
                            <input type="password" class="form-control" id="inputPassword2" v-model="otp"
                                placeholder="OTP" />
                        </div>
                    </form>
                    <div v-else class="text-success">Congratulation your Visit has been booked Our agent will contact
                        you soon </div>
                </div>
                <!-- <div id="recaptcha-container"></div> -->
                <div v-show="!validation" class="modal-footer"
                    style="display:flex!important;flex-direction:column!important;">
                    <p class="text-info">Check the box first for OTP</p>
                    <p v-show="wrongOtp" class="text-danger">Incorrect otp</p>
                    <div id="recaptcha-container"></div>
                    <button type="button" class="btn btn-secondary" style="display:inline!important;"
                        @click="resendOTP">Resend OTP</button>
                    <button type="button" @click="submitOTP" class="btn btn-primary"
                        style="display:inline!important;">Submit OTP</button>
                </div>
            </div>
        </div>
    </div>
     <!-- otp modal box     end    -->
     <!-- detail body start -->

    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-12 px-lg-4 py-lg-4 p-1">

                <!-- property detail card -->

                <!-- image carousel -->
                <div id="carouselExampleControls" class="carousel slide p-3" data-ride="carousel"
                    style="width: 100%; height:400px; max-height: 55vw; object-fit: cover;">
                    <div class="carousel-inner w-100 h-100">
                        <div class="carousel-item" v-bind:class="{active:index===1}" v-for="(photo,index) in photos"
                            style=" text-align: center;" v-bind:key="index">
                            <img class="d-block w-100" v-bind:src="photo" alt="First slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <!-- end image carousel -->

                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="card">
                                <div class="card-body">
                                    <h3 style="display:inline;">{{property.name}}</h3>
                                    <img :src="'../../public/img/'+property.forWhom+'.png'" alt=""
                                        style="width:20%;dislay:float;float:right">
                                    <h6 class="card-subtitle mb-xl-3 mb-2 text-muted">{{property.location}}</h6>
                                    <span style="font-size:2.0rem;color:red">About the Property</span>

                                    <p class="card-text" style="font-size:20px">{{property.shortDescription}}</p>
                                    <h6 style="text-decoration: underline;" class="text-info">{{beds}} Bedrooms are
                                        available only for {{property.forWhom}} </h6>
                                    <hr>

                                <!-- /////////////Rent Detail//////////// -->
                                                <div
                                                    style="display:flex;flex-direction:row;justify-content:space-evenly">
                                                    
                                                        <h4 class="alert alert-primary">Rent Detail</h4>
                                                </div>
                                               
                                          <div v-if="property.type=='Shared Rooms'">
                                            <div class="list-group list-group-horizontal-sm text-center mb-1"  style="justify-content: center;display: flex; flex-direction: row;" id="list-tab" role="tablist">
                                            <a v-for="(val,key,ind) in property.rentDetails"  v-bind:key="ind" class="list-group-item  mx-1 text-dark" :class="{'active':ind==0}" :id="'list-home-'+ind" data-toggle="list" :href="'#list-'+ind" role="tab" aria-controls="home" style="border:solid black;">{{key}}</a>
                                      
                                            </div >
                                        
                                        
                                            <div class="tab-content" id="nav-tabContent">
                                             <div  v-for="(val,key,ind) in property.rentDetails"  v-bind:key="ind" class="tab-pane fade " :class="{'active':ind==0}" :id="'list-'+ind" role="tabpanel" :aria-labelledby="'list-home-'+ind" style="background-color:white!important">
                                               <div class="" style="display:flex;justify-content: space-between;">
                                                   <span class="text-info" style="font-weight:bold" > Monthly rent: </span><span class="text-dark"  style="font-weight:bold" >Rs {{val[0]}} only </span>
                                               </div>
                                            <div class="" style="display:flex;justify-content: space-between;">
                                                   <span class="text-info"  style="font-weight:bold" >Security Deposit : </span><span class="text-dark"   style="font-weight:bold" >{{val[1]}}</span>
                                               </div>
                                                   <p class="text-secondary">(Fully Refundable if vacated in original condition)</p>
                                            </div>
                                         
                                            </div> 
                                            </div>
                                            <div v-else>
                                                 
                                             <div  v-for="(val,key,ind) in property.rentDetails"  v-bind:key="ind"  style="background-color:white!important">
                                               <div class="" style="display:flex;justify-content: space-between;">
                                                   <span class="text-info" style="font-weight:bold" > Monthly rent: </span><span class="text-dark"  style="font-weight:bold" >Rs {{val[0]}} only </span>
                                               </div>
                                            <div class="" style="display:flex;justify-content: space-between;">
                                                   <span class="text-info"  style="font-weight:bold" >Security Deposit : </span><span class="text-dark"   style="font-weight:bold" >{{val[1]}}</span>
                                               </div>
                                                   <p class="text-secondary">(Fully Refundable if vacated in original condition)</p>
                                            </div>
                                            </div>

                                            <!-- /////Rent -detail-end//// -->
                                    <hr>
                                    <div>
                                        <span style="font-size:2.0rem;color:red">House Features</span>
                                        <div style="display:flex;flex-direction:row;flex-wrap: wrap;">
                                            <div style="flex-basis:33%; margin-bottom:20px"
                                                v-for="(val,key,index) in property.HouseFeature" v-show="val!=0&&index < limit_housefeature"  v-bind:key="index">
                                                <img :src="'./img/'+key+'.png'" v-bind:alt="key" style="width:10%;display:inline">
                                                <p style="display:inline" v-show="val!=0"> {{val}} {{key}}</p>
                                            </div>
                                            <a href="javascript:void(1)" class="mt-1"
                                              @click="simple_toggleHF(3)">{{ limit_housefeature===3?'Show more': 'Hide more'}}</a>
                                        </div>
                                    </div>
                                    <hr>
                                    <div>
                                        <span style="font-size:2.0rem;color:red">Amenities</span>
                                        <div style="display:flex;flex-direction:row;flex-wrap: wrap;">
                                            <div style="flex-basis:50%; margin-bottom:20px"
                                                v-for="(amenity,index) in property.amenities" v-show="index < limit_amenity" v-bind:key="index">
                                                <img :src="'./img/'+amenity+'.png'" style="width:10%;display:inline">
                                                <p style="display:inline"> {{amenity}} </p>
                                            </div>
                                            <a href="javascript:void(0)" class="mt-1"
                                              @click="simple_toggleAM(2, property.amenities.length)">{{ limit_amenity===2?'Show more': 'Hide more'}}</a>
                                        </div>

                                    </div>
                                    <hr>
                                   
                                    <template lang="html">
                                        <div v-for="(val,key,ind) in property.OtherCharges" v-bind:key="ind">
                                            <vs-collapse >
                                            <vs-collapse-item  icon-arrow="">
                                            <div slot="header" style="font-weight:bold">
                                               {{key}} : {{val[0]}} 
                                               <i class="fa fa-chevron-down" ></i>
                                            </div>
                                            {{val[1]}}
                                            </vs-collapse-item>
                                            </vs-collapse>
                                            
                                        </div>
                                        </template>
                                    
                                     <hr>
                                    <div>
                                        <span style="font-size:2.0rem;color:red">Nearby</span>
                                        <div style="display:flex;flex-direction:row;flex-wrap: wrap;">
                                            <div style="flex-basis:33%; margin-bottom:20px;"
                                                v-for="(val,Nearby,index) in property.Nearby" v-show="val!=0&& index < limit_nearby" v-bind:key="index" >
                                                <img :src="'./img/'+Nearby+'.png'" alt="" style="width:20px;display:inline">
                                                <p style="display:inline" v-show="val!=0"> {{val}} {{Nearby}}</p>
                                            </div>
                                            <a href="javascript:void(0)" class="mt-1"
                                              @click="simple_toggleNB(3)">{{ limit_nearby===3?'Show more': 'Hide more'}}</a>
                                        </div>
                                    </div>
                                    <hr>
                                    <div>
                                        <div class="row">
                                            <div class="col">
                                                <p v-for="(val,key,index) in property.NearPlaces" v-bind:key="index" style="font-weight:bold">
                                                    {{key}} : <span style="font-weight:normal">{{val}}</span></p>

                                            </div>
                                            <div class="col">
                                                <img src="../../public/img/kmstone.png" alt="" style="width:20%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="display-8">Terms of stay</h5>

                                    <p class="card-text">
                                        <svg class="bi bi-bootstrap-reboot" width="1em" height="1em" viewBox="0 0 16 16"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M1.161 8a6.84 6.84 0 106.842-6.84.58.58 0 010-1.16 8 8 0 11-6.556 3.412l-.663-.577a.58.58 0 01.227-.997l2.52-.69a.58.58 0 01.728.633l-.332 2.592a.58.58 0 01-.956.364l-.643-.56A6.812 6.812 0 001.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>Rules</span>
                                    <ul>
                                        <li class="list-group-item list-group-item-danger" style="margin:2px"
                                            v-for="(rule,index) in property.rules" v-bind:key="index">{{rule}}
                                        </li>
                                    </ul>
                                    <svg class="bi bi-bookmarks-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 4a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V4z"
                                            clip-rule="evenodd" />
                                        <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z" />
                                    </svg>
                                    <span>Responsibility</span>
                                    <ul>
                                        <li class="list-group-item list-group-item-success" style="margin:2px"
                                            v-for="(res,index) in property.responsibility" v-bind:key="index">{{res}}
                                        </li>
                                    </ul>
                                    </p>
                                    
                                     <!-- <a style="font-weight:bold" data-toggle="collapse" href="#propertyDescription" role="button" aria-expanded="true" aria-controls="propertyDescription">More About Property</a>
                                    <p id="propertyDescription"> {{property.description}}</p> -->
                                     <vs-collapse >
                                            <vs-collapse-item  icon-arrow="">
                                            <div slot="header" style="font-weight:bold">
                                                More About Property
                                                <i class="fa fa-chevron-down" ></i>
                                            </div>
                                                {{property.description}}
                                            </vs-collapse-item  >     
                                       </vs-collapse >

                                    <hr>
                                    <!-- /////// -->
                                    <span style="font-size:2.0rem;color:red">Similar House</span>
                                    <div>
                                    
                                          <carousel :scrollPerPage="false" :autoplay="true" :navigationEnabled="true" paginationActiveColor="yellow" paginationColor="blue">
                                            <slide v-for="(place,index) in SimilarPlaces" v-bind:key="index" >
                                            <div class="card" style="width: 70%;" >
                                                <img :src="place.photos[0]" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{place.name}}</h5>
                                                    <p class="card-text">{{place.shortDescription}}</p>
                                                    <router-link v-bind:to="'/detail'+ place.id"
                                                        class="btn btn-primary">Book now</router-link>
                                                </div>
                                            </div>
                                            </slide>
                                            </carousel>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end property detail card -->
            </div>

            <!-- visit form -->
            <div class="col-xl-4 col-12  px-lg-4 py-lg-4 p-1 " id="booknow-xl">
                <div class="card  px-lg-4 py-lg-4 m-2 p-2 text-center sticky-top" id="bookbar">
                    <h4>Book a visit!</h4>
                    <hr>

                    <form>
                        <div id="collapseTarget1" class="collapse show">
                            <div class="form-group">
                                <label for="nameInput">Full Name</label>
                                <input type="text" class="form-control" id="nameInput" v-model="form.name">
                            </div>
                            <div class="form-group">
                                <label for="numberInput">Phone number</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">+91</div>
                                    </div>
                                    <input type="text" class="form-control" id="numberInput2" v-model="form.phone">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="nameInput"> Visit Date </label>
                                <input type="date" class="form-control" id="dateInput2" v-model="form.bookedDate">
                            </div>
                            <button type="button" class="btn btn-primary" @click="sendOTP" data-toggle="modal"
                                :data-target="OTPModal">
                                Sent OTP
                            </button>
                            <hr>
                            <small>Or call +91-9711999999</small>
                        </div>
                    </form>
                </div>
            </div>
            <!-- end visit form -->
        </div>
    </div>
    <!-- end detail page -->
    <!-- Footer starts -->

    <footer id="footer" class="footer-1 pt-3 bg-secondary">
        <div class="main-footer widgets-dark typo-light">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget subscribe no-box">
                            <h5 class="widget-title">Roomlelo is fun!<span></span></h5>
                            <p>Student accomodation was never this easy</p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Quick Links<span></span></h5>
                            <ul class="thumbnail-widget">
                                <li>
                                    <div class="thumb-content"><a href="/">Home</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Get Started<span></span></h5>
                            <p>Find yourself accomodation today.</p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Contact Us<span></span></h5>
                            <p>rooomlelo@gmail.com</p>
                            <ul class="social-footer2">
                                <h6>
                                    <li class="fa fa-phone"> +91 7667651878 </li>
                                </h6>
                                <h6>
                                    <li class="fa fa-phone"> +91 7349666240 </li>
                                </h6>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <hr>
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p>Copyright Roomlelo © 2020. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer ends -->


</div>
</template>

<script>
import db from '../firebase'
import * as firebase from 'firebase';
// import {doScrolling} from '../smoothScrolling'
// import {scrollFunction} from '../smoothScrolling'
import { Carousel, Slide } from 'vue-carousel';



export default {

components: {
    Carousel,
    Slide
  },
  data () {
    return {
      id:this.$route.params.id,
      property:{},
      photos:[],
      rentDetails:[],
      phone:'',
      form:{
          name:'',
      },
      recaptchaVerifier: {},
      confirmationResult:{},
      SimilarPlaces:[],
      validation:false,
      otp:'',
      settings:{},
      wrongOtp : false,
      beds:0,
      data: [],
      limit_amenity:2,
      limit_housefeature:3,
      limit_nearby:3,
      OTPModal:''

    }
  },
   
   methods: {
     simple_toggleAM(default_limit, filters_length) {
            this.limit_amenity = (this.limit_amenity === default_limit) ? filters_length : default_limit;
        },
     simple_toggleHF(default_limit) {
     
            var keys =Object.keys(this.property.HouseFeature) ;
          var  filters_length = keys.length;
           
            this.limit_housefeature = (this.limit_housefeature === default_limit) ? filters_length : default_limit;
        },
     simple_toggleNB(default_limit ) {
            var keys =Object.keys(this.property.Nearby) ;
           var  filters_length = keys.length;
            this.limit_nearby = (this.limit_nearby === default_limit) ? filters_length : default_limit;
        },  
     otpchange: function(){
         this.wrongOtp=true;
     },       
     
    sendOTP: function(){
      this.wrongOtp=false;
      console.log(this.form.phone);
        if(this.form.phone.length != 10||this.form.name.length==0){
                alert("detail filled are not correct");
                this.OTPModal='';
                return '';
            }
       this.OTPModal='#OTPModal'     
    let phoneNumber = "+91" + this.form.phone;
    firebase.auth().signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier).then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // let otpSent = true;
        console.log("Success");
        this.confirmationResult = confirmationResult;
        console.log(confirmationResult);
      })
      .catch(function(error) {
        // Error; SMS not sent
        // ...
        console.log("Error");
        console.log(error);
        this.recaptchaVerifier("recaptcha-container");
      });      
    },
    // bookbtn: function(){
    //   console.log("chalrha h");
    //   doScrolling("#bookbar",1000);
    // },
    resendOTP: function() {
      console.log(this.form.phone);
      if (this.form.phone.length != 10) {
        alert("Phone number not correct");
        return "";
      }
      let phoneNumber = "+91" + this.form.phone;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
        .then(confirmationResult => {
 
          console.log("Success");
          console.log(confirmationResult);
        })
        .catch(function(error) {
          // Error; SMS not sent
          // ...
          console.log("Error");
          console.log(error);
          this.recaptchaVerifier("recaptcha-container");
        });
    },
    submitOTP: async function() {
      var code = this.otp;
      var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var today = mm + '/' + dd + '/' + yyyy; 
     await this.confirmationResult.confirm(code)
        .then(result => {
          // User signed in successfully.
          this.validation = true;
          console.log(result);
          console.log("submitted");
          /////
           firebase.firestore().collection('visits').add({

                    form:this.form,
                    propertyid:this.id,
                    date: today,
                    seen:false
					// requestedDate: firebase.firestore.Timestamp.fromDate(new Date())
         
        }).catch(function(error){
          console.log("nhi hua")
           this.wrongOtp = true
        })
       
        alert("request Submittied")

        }).catch(function(error) {
         console.log("wrong otp");
           otpchange();
          console.log(error);
        });
        // if(this.validation!=true)
        this.wrongOtp=true;
        
    }
  },
   created(){
    let location ;
    let ForWhom ;
    let type;
    db.collection("properties")
      .get()
      .then((res) => {
        
        res.forEach((doc) => {
          if(this.id===doc.id)
          {this.property = doc.data();
          location = doc.data().location;
          type = doc.data().type;
          ForWhom = doc.data().forWhom;
          this.photos = doc.data().photos;  
          this.beds = doc.data().HouseFeature['Bedroom'];       
          }
        });
        res.forEach((doc) => {
        let val = JSON.parse(JSON.stringify(doc.data()));
        if(val.location.toLowerCase() == location.toLowerCase() && val.forWhom.toLowerCase()==ForWhom.toLowerCase()&&val.type.toLowerCase()==type.toLowerCase()&& this.id!=doc.id){
       
          this.SimilarPlaces.push(val);   
            
      } 
      
        });
        console.log(this.data)
 
      });

   },
   mounted(){
      
    firebase.auth().useDeviceLanguage();
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    console.log("hey");
    console.log(this.recaptchaVerifier)
 
   
    // window.onscroll = function() {scrollFunction()};
   },
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

 @media (max-width: 1201px){
   #booknow-xl{
       display: none;
   }
 }

div{
    font-family: 'Montserrat', sans-serif;
}
.sticky-top{
  top:50px!important;
}
.active {
    background-color: yellow!important;
}

.btn-secondary{
  background-color:yellow!important ;
  color:blue!important
}
.bg-secondary{
  background-color:yellow!important ;

}


</style>
