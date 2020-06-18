<template>
	<div   style="background-color:rgba(220,220,220,0.4);height:100%;">
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" style="display:none;" id="data-uploaded" data-toggle="modal" data-target="#exampleModalCenter">
			Launch demo modal
		</button>

		<!-- Modal -->
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="width:80%;;margin:0 auto;" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h6 class="modal-title" id="exampleModalLongTitle">Status</h6>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<h6>Request Submitted :)</h6>
					</div>
				</div>
			</div>
		</div>

		<nav style="width:100%;height:50px;box-shadow:0px 2px 4px rgba(0,0,0,0.6);position:fixed;top:0;background-color:white;">
			<h6 style="margin-top:13px;" >
				<router-link to="/dashboard"><i style="margin-left:20px; font-size:25px;" class="fa fa-long-arrow-left" aria-hidden="true"></i></router-link>
				<span style="margin-left:20px;font-size:22px;font-family:Montserrat;font-weight:600;"> Maintenance</span></h6>
			</nav>
			<div style="padding-top:60px;font-family:Montserrat;display:block;margin:0 auto;">
				<h6 style="text-align:center;font-weight:600;">New Service Request</h6>
			</div>
			<div id="mainten" style="padding-left:15px;margin-left:2px;display:block;margin:0 auto;">
				<form  accept-charset="utf-8" @submit.prevent="uplodMaintenanceData()">



					<label style="color:#3fb6c6;margin-bottom:1px">Service Type</label><br>
					<input list="services" required id="service_type"  @blur="changeSubHeading()"  style="width:80%;padding-left:5px;border:0.1px solid grey;" placeholder="Select your Service" />
					<datalist id="services">
						<option value="Furiture & Carpentry"></option>
						<option value="Electrical"></option>
						<option value="Electrical Appliances"></option>
						<option value="Plumbing"></option>
					</datalist>
					<br>
					<br>
					<label style="color:#3fb6c6;margin-bottom:1px">I have an issue with</label><br>
					<input list="issues" requried id="issue" style="width:80%;padding-left:5px;border:0.1px solid grey;" placeholder="Select your type of issue" />
					<datalist id="issues">
						<option  v-for="item in items" v-bind:value="item"></option>
					</datalist>
					<br>
					<br>
					<label style="color:#3fb6c6;margin-bottom:1px">Service Description</label>
					<br>
					<textarea id="des" style="width:80%;height:100px;margin-left:2px;" placeholder="Describe the service ..."></textarea>
					<br>
					<br>
					<aside style="float:left">
						<label style="color:#3fb6c6;margin-bottom:1px">Visit Date</label>
						<br>
						<input id="visit_date"  type="date" required title="Date" style="padding-left:5px">
						<i style="margin-left:-35px;font-size:15px;" class="fa fa-calendar" aria-hidden="true"></i>
					</aside>
					<aside style="float:right;margin-right:10%;">
						<label style="color:#3fb6c6;margin-bottom:1px">Visit Time</label>
						<br>
						<input id="visit_time" requried  type="time" required="required" title="time" style="width:100px;padding-left:5px"> <!-- make it to am and pm -->
						<i style="margin-left:-35px;font-size:15px;" class="fa fa-clock-o" aria-hidden="true"></i>
					</aside>
					<br>
					<br>
					<label style="color:#3fb6c6;margin-bottom:1px;float:left;margin-top:25px;margin-left:0%; width:100%;">Attach Photo</label><br>
					<input required  type="file" id="m_pic"  value="upload" style=" height: 35px; width:80%;; border:0 !important;outline:0px; background:none; padding-top: 4px;padding-left: 0px;"/>
					<br>
					<br>
					<br>
					<button type="submit" style="margin-left:60%;margin-bottom:10px;width:120px;height:33px;background-color:#3fb6c6;border:0px;border-radius:5px;color:white;font-family:Montserrat">SUBMIT</button>
				</form>
			</div>

			<div style="width:100%;margin-bottom:30px;">
				<div id="status" style="width:100%;background-color:white;height:25px;box-shadow:0px 2px 5px rgba(0,0,0,0.6);display:none;">
					<h6  style="text-align:center;color:grey;padding-top:3px;">STATUS</h6>
				</div>

				<div style="width:100%;" id="status_div">
					<!-- data from database -->

				</div>

				<button type="" style="display:none;" v-on:click="fetchData()">Fetch</button>

			</div>

		</div>
	</template>

	<script>
	var pic;
	import "regenerator-runtime/runtime";
	import store from '../vuex/store'
	import * as firebase from 'firebase';
	import 'firebase/storage'
	import 'firebase/firestore'
	export default {

		data () {
			return {
				imageid: "",
				uid: "",
				arrSolved: [],
				arrUnsolved: [],
				items: [],
				propertyManagerMobile: "",
				name: "",  // client name
				clientNumber: "",  // mobile number
				propertyName: "",  // property ID
				propertyAddress: "",
				adminPhone: ""

			}
		},
		methods:{
			changeSubHeading(){
				console.log(document.getElementById('service_type').value)

				if(document.getElementById('service_type').value==="Furiture & Carpentry"){

					this.items.push("Doors","Windows","Table","Bed","Mattress")
				}
				else if(document.getElementById('service_type').value==="Electrical"){
					this.items.push("Power cut","Power backup issue","Sparking/Short circuit","Voltage fluctuation","Fire")
				}
				else if(document.getElementById('service_type').value==="Electrical Appliances"){

					this.items.push("Washing machine not working","Water purifier","Water purifier","Fan not working","TV not working","DTH","Lift","Refrigerator","Gyser")

				}
				else if(document.getElementById('service_type').value==="Plumbing"){

					this.items.push("Commode Repair","Flush Tank Repair","Kitchen Sink Repair","Shower","Tap Repair","Wash Basin Repair","Water Tank Repair")
				}

			},
			uplodMaintenanceData(){
				let service_type = document.getElementById('service_type').value;
				let issue = document.getElementById('issue').value;
				let des = document.getElementById('des').value;
				let visit_date = document.getElementById('visit_date').value;
				let visit_time = document.getElementById('visit_time').value;

				var myFirebaseFirestoreTimestampFromDate = firebase.firestore.Timestamp.fromDate(new Date());
				console.log( myFirebaseFirestoreTimestampFromDate.seconds)
				console.log( myFirebaseFirestoreTimestampFromDate.toDate())



				var maintenid = Math.random().toString(36).substring(7);


				firebase.firestore().collection('userRequests').doc(this.uid).get().then(res =>{
					if(res.exists)
					{
						firebase.firestore().collection('userRequests').doc(this.uid).update({
							id: firebase.firestore.FieldValue.arrayUnion(maintenid)
						})
					}else{
						firebase.firestore().collection('userRequests').doc(this.uid).set({

							id: firebase.firestore.FieldValue.arrayUnion(maintenid)
						})
					}
				})


				var slnum = "SC_"+ Math.floor(Math.random()*1000000000).toString();
				this.imageid = slnum;


				var task = firebase.storage().ref("userMaintenanceImage/"+this.imageid).put(pic);

				firebase.firestore().collection('userMaintenance').doc(maintenid).set({
					date: myFirebaseFirestoreTimestampFromDate,
					description: des,
					issue: issue,
					service: service_type,
					visitDate: visit_date,
					visitTime: visit_time,
					photo: this.imageid,
					solved: false,
					sl: slnum
				})

				

				//----------------------------------------------------//

				var msg =`

				Hi ${this.name} ,
				Thank you for reaching out to us.
				We have received your service request for ${issue}.
				Our property manager will get back to you soon.
				For any assistance call (${this.propertyManagerMobile}) 

				For further complain :- 6388431021.

				`
				console.log(this.clientNumber)
				this.sendSMS(msg,this.clientNumber)

				//----------------------------------------------------//
				var msg = `

				Service request from ${ this.name } 
				Property name:- ${ this.propertyName } 
				Room/flat no. N/A 
				Address:- ${ this.propertyAddress } 
				Type of request:- ${ service_type } 
				Visit Date & time:- ${ visit_date +" "+ visit_time } 
				Customer phone no.:- ${ this.clientNumber } 

				`
				console.log(this.propertyManagerMobile)
				this.sendSMS(msg,this.propertyManagerMobile)
			

				//----------------------------------------------------//
				var msg =`

				Service request from  ${ this.name }
				Property name:- ${ this.propertyName }
				Room/flat no. N/A 
				Address:- ${ this.propertyAddress }
				Type of request:- ${ service_type }
				Visit Date & time:- ${ visit_date +" "+ visit_time }
				Customer phone no.:- ${ this.clientNumber }
				Customer ID :- ${ this.uid }
				Property manager no.:- ${ this.propertyManagerMobile }

				`
				console.log(this.adminPhone)
				this.sendSMS(msg,this.adminPhone)

				

			},
			sendSMS(msg,num){

				if(num === this.adminPhone)
					document.getElementById('data-uploaded').click(); // Done

				var settings = {
					"async": true,
					"crossDomain": true,
					"url": `https://www.fast2sms.com/dev/bulk?authorization=bLhTVlxWKv8sYJOynkBMCQPU2meNS3uAXjrZ5D47c6gqpi0a1obPWLc8ywd2tAZ1YgjN9GSBC5HnF0VI&sender_id=ALERT&message=${msg}&language=english&route=p&numbers=${num}`,
					"method": "GET"
				}

				$.ajax(settings).done(function (response) {
					console.log(response);
					return;
				});
			},
			async fetchData(){

				var arrID = [];

				await firebase.firestore().collection('userRequests').doc(this.uid).get().then(res =>{
					arrID = res.data().id;
				});

				for(let i = 0; i< arrID.length;i++){
					await firebase.firestore().collection('userMaintenance').doc(arrID[i]).get().then(res =>{
						document.getElementById('status').style.display = "block";
						var x = {
							sec:res.data().date.seconds,
							service:res.data().service,
							sl:res.data().sl,
							date:res.data().date.toDate().toString().substring(0,10)
						}

						if(res.data().solved){
							this.arrSolved.push(x)

						}else{
							
							this.arrUnsolved.push(x)	
						}

					})


				}


				this.arrUnsolved.sort(function(a,b){ return Number(b.sec) - Number(a.sec)});

				this.arrUnsolved.forEach(function(element, index) {
					if(element.date.charAt(9)=='1')
						element.date += "st";
					else if(element.date.charAt(9)=='2')
						element.date += "nd";
					else if(element.date.charAt(9)=='3')
						element.date += "rd";
					else
						element.date += "th";

					var disp = 'color:orange;font-size:7px;position:absolute;top:40%;left:-3%;display:inherit';
					if(window.innerWidth > 480){
						disp = 'color:orange;font-size:7px;position:absolute;top:40%;left:-3%;display:none;'
					}

					var newEle =`
					<div data-aos="fade-up"  data-aos-offset="120"style="width:95%;height:100px;background-color:white;border-radius:3px;border:1px solid #ddd;box-shadow:0px 2px 5px rgba(0,0,0,0.6);margin:12px auto;padding-top:7px;">
					<span style="color:grey;font-size:13px;padding-left:20px;margin-top:10px;">${element.sl}</span> <span style="float:right;margin-right:20px;color:grey;font-size:13px;margin-top:0px;">${element.date}</span>
					<h6 style="margin-left:20px;margin-top:7px;font-family:Montserrat;font-weight:700">${element.service}</h6>
					<p style="margin-top:-8px;margin-left:27px;font-size:13px;position:relative;"><i style=${disp} class="fa fa-circle" aria-hidden="true"></i><span style="font-family:Montserrat;"> Service on progress</span></p>
					</div>

					`
					document.getElementById('status_div').innerHTML += newEle

				});



				this.arrSolved.sort(function(a,b){ return Number(b.sec) - Number(a.sec)});
				this.arrSolved.forEach(function(element, index) {

					if(element.date.charAt(9)=='1')
						element.date += "st";
					else if(element.date.charAt(9)=='2')
						element.date += "nd";
					else if(element.date.charAt(9)=='3')
						element.date += "rd";
					else(element.date.charAt(9)=='0')
						element.date += "th";

					var disp = 'color:green;font-size:7px;position:absolute;top:40%;left:-3%;display:inherit';
					if(window.innerWidth > 480){
						disp = 'color:green;font-size:7px;position:absolute;top:40%;left:-3%;display:none;'
					}

					var newEle =`

					<div data-aos="fade-up"  data-aos-offset="120"style="width:95%;height:100px;background-color:white;border-radius:3px;border:1px solid #ddd;box-shadow:0px 2px 5px rgba(0,0,0,0.6);margin:12px auto;padding-top:7px;">
					<span style="color:grey;font-size:13px;padding-left:20px;margin-top:10px;">${element.sl}</span> <span style="float:right;margin-right:20px;color:grey;font-size:13px;margin-top:0px;">${element.date}</span>
					<h6 style="margin-left:20px;margin-top:7px;font-family:Montserrat;font-weight:700">${element.service}</h6>
					<p style="margin-top:-8px;margin-left:27px;font-size:13px;position:relative;"><span style="font-family:Montserrat;color:green;font-weight:700;">  Done</span></p>
					<p style="margin-top:-15px;float:right;margin-right:10px;font-family:Montserrat;color:#3fb6c6;font-weight:600;">FEEDBACK</p>
					</div>

					`
					document.getElementById('status_div').innerHTML += newEle;

				});



			}
		},
		async mounted(){
			if(user_profile!=false){
				this.uid = user_profile.getId();
			}else{
				this.uid = store.state.email+store.state.phone;
			}

			try {
				this.fetchData();
			} catch(e) {
				console.log(e)
			}


			firebase.firestore().collection('userProfile').doc(this.uid).get().then(res =>{
				this.name = res.data().name;
				this.clientNumber = res.data().personal.mobile
			}).catch(err =>{
				alert("Fill your Personal Info in My Profile");
			})



			 firebase.firestore().collection('propertyManager').get().then(res =>{   //I have to put .where query 
				res.docs.forEach((ele)=>{
					this.propertyManagerMobile = ele.id;
				})
			})

			await firebase.firestore().collection('registeredUser').doc(this.uid).get().then(res =>{
				this.propertyName = res.data().propertyId;
			})

			await firebase.firestore().collection("properties").doc(this.propertyName).get().then(res =>{
				this.propertyAddress = res.data().location;
			})

			firebase.firestore().collection("Admin").get().then(res =>{
				var adminNum = [];
				res.docs.forEach((ele)=>{
					adminNum.push(ele.id)
				})
				this.adminPhone = adminNum[0];
			})





		this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar 
		document.getElementById('m_pic').addEventListener('change', function(e){
 			pic = e.target.files[0]; // attach mainten. img file
 		});





		if(window.innerWidth >480){
			document.getElementById('mainten').style.width = '60%';
		}



	},
	created(){

		if(user_profile!=false){
			this.uid = user_profile.getId();
		}else{
			this.uid = store.state.email+store.state.phone;
		}
	}
}
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Montserrat');
option{
	height:30px;
}
</style>
