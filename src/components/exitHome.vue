<template>
	<div>
		<nav style="width:100%;height:50px;box-shadow:0px 2px 4px rgba(0,0,0,0.6);position:fixed;top:0;background-color:white;">
			<h6 style="margin-top:13px;" >
				<router-link to="/dashboard"><i style="margin-left:20px; font-size:25px;" class="fa fa-long-arrow-left" aria-hidden="true"></i></router-link>
				<span style="margin-left:20px;font-size:22px;font-family:Montserrat;font-weight:600;"> Exit</span></h6>
			</nav>

			<main style="margin-top:60px;margin-bottom:30px;">
				<div class="box1">
					<img src="~../assets/char2.png" style="width:100px;float:left;" alt="">
				</div>
				<div class="box2">
					<ul style="margin:0;padding:0;float:right;">
						<li style="list-style:none;float:right;">
							<h5 style="font-family:Montserrat;float:right;">You have lived in this house for <span id="days" style="color:#3fb6c6;font-size:18px;">{{stay}} </span><span id="text-days" style="color:black;font-size:18px;">days.</span></h5>
						</li><br>
						<li id="tagL2" style="list-style:none;float:right;margin-top:-15px;display:none;">
							<span style="color:#3fb6c6;">{{stay}} </span><span style="color:black;">days.</span>
						</li><br><br>
						<li id="tagL1" style="list-style:none;float:right;margin-top:-15px;">
							<span style="font-family:Montserrat; font-size:17px;">Your friends gonna miss you.</span>
						</li><br>
					</ul>
				</div>
				<div class="box3" style="margin-top:20px;">
					<ul>
						<li style="list-style:none;float:right;">
							<h5 style="font-family:Montserrat;font-weight:700;">Give us another chance</h5>
						</li><br><br>
						<li style="list-style:none;float:right;margin-top:-20px;">
							<span style="font-family:Montserrat; font-size:18px;" >Broken things can be mended.</span>
						</li><br>
						<li  style="list-style:none;float:right;margin-top:-12px;">
							<span style="font-family:Montserrat; font-size:18px;" >Tell us how we can help you stay with us longer ?</span>
						</li>
					</ul>
					
					<span style="font-family:Montserrat;float:right;"><br></span>
					<button type="" style="float:right;background:none;border:1px solid black;outline:0;width:200px;height:35px;font-family:Montserrat;color:grey;margin-top:15px;">REACH OUT TO ME</button>

				</div>
			</main>
			<button id="continueExit" @click="showDays()" style="margin:0 auto; background:black; border:0; outline:0; width:95%; height:40px; font-family:Montserrat;color:white;display:block;">CONTINUE EXIT</button>

			<div id="exitDiv" style="margin:20px auto;margin-top:80px;margin-bottom:50px;border:1px solid black;height:300px;width:95%;opacity:0;">
				<h5 style="font-family:Montserrat;margin:20px auto;text-align:center;">When you are planing to exit</h5>

				<ul style="padding:0;margin:0px auto; width:100%;  display: flex; justify-content: space-between;font-family:Montserrat;">
					<li style="list-style:none;display:block;margin-left:10px;">
						<div id="seven" @click="setDays('7')" style="margin:30px auto;margin-top:30px;margin-bottom:50px;border:1px solid black;height:100px;width:100px;position:relative;">
							<span id="s-seven" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);width:100px;">
								<span style="margin:0 auto; text-align:center; display:block; font-size:13px;  margin-left:-10px;">With in</span>
								<span style="margin:0 auto;text-align:center;display:block;font-weight:700;">7 Days</span>
							</span>
						</div>
					</li>
					<li  style="list-style:none;display:block;">
						<div id="fifteen" @click="setDays('15')" style="margin:30px auto;margin-top:30px;margin-bottom:50px;border:1px solid black;height:100px;width:100px;position:relative;">
							<span id="s-fifteen" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);width:100px;">
								<span style="margin:0 auto; text-align:center; display:block; font-size:13px;  margin-left:-10px;">With in</span>
								<span style="margin:0 auto;text-align:center;display:block;font-weight:700;">15 Days</span>
							</span>
						</div>
					</li>
					<li  style="list-style:none;display:block;margin-right:20px;">
						<div id="month" @click="setDays('30')" style="margin:30px auto;margin-top:30px;margin-bottom:50px;border:1px solid black;height:100px;width:100px;position:relative;">
							<span id="s-month" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);width:100px;">
								<span style="margin:0 auto; text-align:center; display:block; font-size:13px;  margin-left:-10px;">With in</span>
								<span style="margin:0 auto;text-align:center;display:block;font-weight:700;">1 Month</span>
							</span>
						</div>
					</li>
				</ul>
				<button @click="requestExit()" style="margin:0px auto; margin-bottom:40px; background:black; border:0; outline:0; width:95%; height:40px; font-family:Montserrat;color:white;display:block;">SUBMIT</button>
			</div>
		</div>
	</template>

	<script>
	import "regenerator-runtime/runtime";
	import store from '../vuex/store'
	import 'firebase/firestore'
	import * as firebase from 'firebase';
	export default {
		data () {
			return {
				uid:"",
				propertyId:"",
				days:"7 days",
				stay:"",
				seconds:"",
				userNum: 9999999999
			}
		},
		methods:{
			requestExit(){

				firebase.firestore().collection('exitRequest').doc(this.uid).set({

					withIn : this.days,
					propertyId: this.propertyId,
					uid: this.uid,
					requestedDate: firebase.firestore.Timestamp.fromDate(new Date()),
					exit : false

				})

				alert('Request Submitted')

				var msg = "Your request for exit property has been received. Very soon we will update you." 

				var settings = {
					"async": true,
					"crossDomain": true,
					"url": `https://www.fast2sms.com/dev/bulk?authorization=bLhTVlxWKv8sYJOynkBMCQPU2meNS3uAXjrZ5D47c6gqpi0a1obPWLc8ywd2tAZ1YgjN9GSBC5HnF0VI&sender_id=RLL&message=${msg}&language=english&route=p&numbers=${this.userNum}`,
					"method": "GET"
				}

				$.ajax(settings).done(function (response) {
					console.log(response);
				});
			},

			showDays(){
				gsap.to("#exitDiv",1,{opacity:1,ease:Power3.easeInOut,y:-40})
				document.getElementById('continueExit').disabled="true";
				document.getElementById('continueExit').style.backgroundColor = '#ddd'
			},

			setDays(days){

				this.days = days +" days";

				if(days === '7'){
					document.getElementById('seven').style.background = '#3fb6c6'
					document.getElementById('s-seven').style.color = "white";


					document.getElementById('fifteen').style.background = 'white'
					document.getElementById('s-fifteen').style.color = "black";
					document.getElementById('month').style.background = 'white'
					document.getElementById('s-month').style.color = "black";
				}
				else if(days === '15'){

					document.getElementById('fifteen').style.background = '#3fb6c6'
					document.getElementById('s-fifteen').style.color = "white";

					document.getElementById('seven').style.background = 'white'
					document.getElementById('s-seven').style.color = "black";
					document.getElementById('month').style.background = 'white'
					document.getElementById('s-month').style.color = "black";
				}
				else if(days === '30'){

					document.getElementById('month').style.background = '#3fb6c6'
					document.getElementById('s-month').style.color = "white";

					document.getElementById('seven').style.background = 'white'
					document.getElementById('s-seven').style.color = "black";
					document.getElementById('fifteen').style.background = 'white'
					document.getElementById('s-fifteen').style.color = "black";
				}

			}

		},
		async mounted(){
	 	this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar  

	 	if(window.innerWidth>480){
	 		document.getElementById('tagL2').style.marginTop = '0px';
	 		document.getElementById('tagL2').style.display = 'block';
	 		document.getElementById('days').style.display = 'none';
	 		document.getElementById('text-days').style.display = 'none';

	 	}

	 	document.getElementById('seven').style.background = '#3fb6c6'
	 	document.getElementById('s-seven').style.color = "white";



	 	await firebase.firestore().collection('registeredUser').doc(this.uid).get().then( res =>{
	 		console.log(res.data());
	 		this.propertyId = res.data().propertyId;
	 		this.seconds =  res.data().seconds;
	 	})



	 	var myFirebaseFirestoreTimestampFromDate = firebase.firestore.Timestamp.fromDate(new Date());
	 	var diff = myFirebaseFirestoreTimestampFromDate.seconds - this.seconds;

	 	var min = diff/60;
	 	var hours = min/60;
	 	var days = hours/24;

	 	this.stay = days.toString().substring(0,3);   

	 	await firebase.firestore().collection('userProfile').doc(this.uid).get().then(res=>{
	 		this.userNum = res.data().personal.mobile;
	 	}).catch(err =>{
	 		alert("Mobile number not found")
	 	})



	 },
	 created(){
	 	if(user_profile!=false){
	 		this.imageid = user_profile.getId();
	 		this.uid = user_profile.getId();
	 	}else{
	 		this.imageid = store.state.email+store.state.phone;
	 		this.uid = store.state.email+store.state.phone;
	 	}
	 }
	}
	</script>

	<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Montserrat');
	main{
		width:92%;
		margin:0 auto; 
		display:grid;
		grid-template-columns: 160px 1fr;
		grid-template-row: 300px 300px;
	}
	.box3{
		grid-row: 2/3;
		grid-column: 1/-1;
	}
	button:active{
		transition: all ease 0.2s;
		transform:scale(0.98);
	}

	</style>
