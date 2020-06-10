<template>
	<div  style="background-color:rgba(220,220,220,0.4);height:100%;">
		<div style="margin:0 auto;display:block;" >
			

			<div style="background-color:white;" >
				<nav style="width:100%;height:50px;box-shadow:0px 2px 4px rgba(0,0,0,0.6);position:fixed;top:0;background-color:white;z-index:10;">
					<h6 style="margin-top:13px;" >
						<router-link to="/dashboard"><i style="margin-left:20px; font-size:25px;" class="fa fa-long-arrow-left" aria-hidden="true"></i></router-link>
						<span style="margin-left:20px;font-size:22px;font-family:Montserrat;font-weight:600;">  Payment</span></h6>
					</nav>
					<div style="margin-top:70px;position:relative;" id="payment_div"  >
						<img style="width:80%; margin:0 auto;display:block;" src="~../assets/bill.png" alt="">

						<div style="position:absolute; top:20px;left:10%;" id = "duepayment">
							<div style="max-width:185px;">
								<p style="margin-left:0px;text-align:center;font-family:Montserrat;font-weight:600;font-size:18px;">Hey {{name}}</p>
								<p style="margin-left:0px;text-align:center;margin-top:8px;font-family:Montserrat;font-weight:600;font-size:14px;">Your rent of {{duemonth}} is due</p>
								<p style="margin-left:0px;text-align:center;margin-top:8px;font-family:Montserrat;font-weight:600;font-size:17px;">Amount due: ₹ {{dueamount}} </p>
								<p style="margin-left:0px;margin-top:5px;margin-bottom:0; text-align:center;font-family:Montserrat;font-weight:600;font-size:14px;">Pay before {{duedate}} to avoid late payment charge. </p>
								<router-link to="/paymentPage" target="_blank" style="text-decoration: none; cursor: pointer;"><button type=""style="text-align:center;margin-left:20px;width:150px;margin-top:9px;height:33px;background-color:#3fb6c6;border:0px;border-radius:5px;color:white;font-family:Montserrat">Make payment</button></router-link>
							</div>

						</div>
					</div>
				</div>

				<div style="width:100%;margin-bottom:30px;">
					<div id="paid" style="width:100%;background-color:white;height:25px;box-shadow:0px 2px 5px rgba(0,0,0,0.6);">
						<h6  style="text-align:center;color:black;padding-top:3px;font-family:Montserrat;font-weight:300;">PAID</h6>
					</div>

					<router-link to="/invoice" target="_blank" style="text-decoration: none; cursor: pointer;color:black;"><div style="width:100%;" id="rent_div">
						<!-- data from database -->
					<!-- <div data-aos="fade-up"  data-aos-offset="120"style="width:95%;height:105px;background-color:white;border-radius:0px;border:1px solid #ddd;box-shadow:0px 2px 5px rgba(0,0,0,0.6);margin:12px auto;position:relative;">
						<div style="border-left: 2px solid rgb(219, 219, 219);height:53px;position:absolute;top:50%;margin-left:30px;transform:translate(0%,-50%)"></div>
						<span style="color:black; font-size:13px; width:100%; height:24px; background:rgb(211, 211, 211); display:block;box-shadow:0px 2px 2px rgba(0,0,0,0.7);"><span style="margin-left:12px;font-family:Montserrat;font-weight:600;font-size:15px;">Invoice No.: </span><span style="color:#3fb6c6;font-family:Montserrat;font-weight:600;font-size:15px;">${element.vn}</span></span> 
						<h6 style="margin-left:40px;margin-top:14px;font-family:Montserrat;font-weight:700"><i class="fa fa-circle-o" aria-hidden="true" style="position:absolute;margin-left:-16px;color:#3fb6c6;background-color:white;"></i>Rent ${element.service} <span style="float:right;margin-right:10px;">${element.amount}</span></h6>
						<p style="margin-top:-7px;margin-left:40px;font-size:13px;position:relative;"><span style="font-family:Montserrat;"> Paid on</span></p>
						<hr style="margin-top:-13px;margin-bottom:0;">
						<p style="margin-left:15px;font-family:Montserrat;font-weight:600;font-size:15px;">Total: ₹ ${element.total}<span style="float:right;margin-right:10px;">VIEW INVOICE</span></p>
					</div> -->

				</div></router-link>
				<button type="" style="display:none" v-on:click="makePayment()">Pay</button>

				<button type="" style="display:none" v-on:click="fetchData()">Fetch</button>
			</div>
		</div>
	</div>
</template>
<script>
import "regenerator-runtime/runtime"
import store from '../vuex/store'
import * as firebase from 'firebase';
export default {
	data () {
		return {
			uid:"",
			dueAmount:"",  
			rentArr:[],
			name:"",
			dueamount:"",
			duemonth:"",  
			duedate:""
		}
	},
	methods:{
		async fetchData(){
			await firebase.firestore().collection('rentPaid').doc(this.uid).get().then(res =>{
				document.getElementById('paid').style.display = "block";

				(res.data().paid).forEach( (ele) => {

					var x = {
							sec: ele.date.seconds, //second of timestamp
							amount: ele.amount,
							total: ele.total,
							vn: ele.vn,
							date: ele.date.toDate().toString().substring(0,10),
							month:  ele.month
						}
						this.rentArr.push(x);

					});

				this.rentArr.sort(function(a,b){ return Number(b.sec) - Number(a.sec)});
				this.rentArr.forEach((element, index) => {
					console.log(element)

					if(element.date.charAt(9)=='1')
						element.date += "st";
					else if(element.date.charAt(9)=='2')
						element.date += "nd";
					else if(element.date.charAt(9)=='3')
						element.date += "rd";
					else
						element.date += "th";

					var newEle =`
					<div data-aos="fade-up"  onclick="invoice('${element.vn}')"  data-aos-offset="20"style="width:95%;height:105px;background-color:white;border-radius:0px;border:1px solid #ddd;box-shadow:0px 2px 5px rgba(0,0,0,0.6);margin:12px auto;position:relative;">
					<div style="border-left: 2px solid rgb(219, 219, 219);height:53px;position:absolute;top:50%;margin-left:30px;transform:translate(0%,-50%)"></div>

					<span style="color:black; font-size:13px; width:100%; height:24px; background:rgb(211, 211, 211); display:block;box-shadow:0px 2px 2px rgba(0,0,0,0.7);"><span style="margin-left:12px;font-family:Montserrat;font-weight:600;font-size:15px;">Invoice No.: </span><span style="color:#3fb6c6;font-family:Montserrat;font-weight:600;font-size:15px;">${element.vn}</span></span> 
					<h6 style="margin-left:40px;margin-top:14px;font-family:Montserrat;font-weight:700"><i class="fa fa-circle-o" aria-hidden="true" style="position:absolute;margin-left:-16px;color:#3fb6c6;background-color:white;"></i>Rent ${element.month} <span style="float:right;margin-right:10px;"> ₹ ${element.amount}</span></h6>
					<p style="margin-top:0px;margin-left:40px;font-size:13px;position:relative;"><span style="font-family:Montserrat;"> Paid on ${element.date}</span></p>
					<hr style="margin-top:0px !important;margin-bottom:5px !important ;">
					<p style="margin-left:15px;font-family:Montserrat;font-weight:600;font-size:15px;">Total: ₹ ${element.total}<span style="float:right;margin-right:10px;">VIEW INVOICE</span></p>
					</div>
					`
					document.getElementById('rent_div').innerHTML += newEle;

					// this.$router.push({
					// 	path: '/invoice'
					// });



				});

			})




		},
		makePayment(){

			var myFirebaseFirestoreTimestampFromDate = firebase.firestore.Timestamp.fromDate(new Date());
			console.log( myFirebaseFirestoreTimestampFromDate.seconds)
			console.log( myFirebaseFirestoreTimestampFromDate.toDate());

			firebase.firestore().collection('rentPaid').doc(this.uid).get().then(res =>{
				if(res.exists)
				{
					firebase.firestore().collection('rentPaid').doc(this.uid).update({
						paid:firebase.firestore.FieldValue.arrayUnion({
							amount:this.dueAmount,
							total:this.dueAmount,
							vn:"RLLVNSO"+ Math.floor(Math.random()*10000000).toString(),
							date: firebase.firestore.Timestamp.fromDate(new Date()),
							mode:"cash",
							month: myFirebaseFirestoreTimestampFromDate.toDate().toString().substring(0,4).toUpperCase()

						})
					})
				}else{
					firebase.firestore().collection('rentPaid').doc(this.uid).set({

						paid:firebase.firestore.FieldValue.arrayUnion({
							amount:this.dueAmount,
							total:this.dueAmount,
							vn:"RLLVNSO"+ Math.floor(Math.random()*10000000).toString(),
							date: firebase.firestore.Timestamp.fromDate(new Date()),
							mode:"cash"

						})
					})
				}
			})


		}

	},

	async mounted(){
		this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar  
		await firebase.firestore().collection('rentDue').doc(this.uid).get().then(res =>{
			if(res.exists){
				this.dueamount = res.data().total;
				var length = res.data().due.length;
				var element = res.data().due[res.data().due.length - 1]
				this.name = element.name;
				this.duemonth = element.month;
				this.duedate = element.lastDate.toDate().toString().substring(0,10)

				if(element.lastDate.toDate().toString().charAt(9)=='1')
					this.duedate += "st";
				else if(element.lastDate.toDate().toString().charAt(9)=='2')
					this.duedate += "nd";
				else if(element.lastDate.toDate().toString().charAt(9)=='3')
					this.duedate += "rd";
				else
					this.duedate += "th";


				this.fetchData();
			}
			else{
				alert("no due")
			}

		});

		if(window.innerWidth >480){   // for desktop version

			document.getElementById('payment_div').style.width = "60%";
			document.getElementById('duepayment').style.top = '50%'
			document.getElementById('duepayment').style.left = '35%'
			document.getElementById('duepayment').style.transform = 'translate(-50%, -50%)'


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
</script >

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url("https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,500;0,700;0,800;1,900&display=swap");

button:active{
	trasform:scale(0.97);
	transition:all ease 0.2s;
	outline:0;
	border:0;
}

</style>
