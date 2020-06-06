<template>
	<div style="background:rgba(0,0,0,0.07);">
		<section style="background:white;max-width:800px;margin-top:0;padding-top:0;margin:10px auto;font-family:'Exo', sans-serif; box-shadow:0px 2px 5px rgba(0,0,0,0.6)" id="print" >
			<img src="~../assets/rll.png" style="width:530px;margin:0 0; display:block;" alt="">
			<h5 style="margin-left:25px;font-weight:900;color:black">PAYMENT RECEIPT <button style="float:right;margin-right:25px;color:#3fb6c6;border:2px solid #3fb6c6;background:none;font-family:Montserrat;font-weight:700;font-size:17px;">PAID</button></h5>
			<hr style="margin-left:25px;margin-right:25px;border:1px solid grey;">
			<h6 style="margin-top:30px;;margin-left:25px;color:#3fb6c6;font-weight:700;" >HOUSE DETAILS</h6>
			
			<table style="width:100%;margin-left:25px;">
				<tbody>
					<tr style="">
						<td  style="padding-top:20px;"><span style="font-weight:700;">Owner</span> <span style="margin-left:40px;">:</span> <span style="margin-left:30px;" >{{ownerName}}</span></td>
						<td  style="padding-top:20px;"><span style="font-weight:700;">Receipt #</span> <span style="margin-left:50px;">:</span> <span style="margin-left:30px;" >{{reciptId}}</span></td>
					</tr>
					<tr>
						<td  style="padding-top:20px;"><span style="font-weight:700;">Contact</span> <span style="margin-left:32px;">:</span> <span style="margin-left:30px;" >{{ownerContact}}</span></td>
						<td  style="padding-top:20px;"><span style="font-weight:700;">Receipt Date</span> <span style="margin-left:27px;">:</span> <span style="margin-left:30px;" >{{reciptDate}}</span></td>
					</tr>
					<tr style="padding-top:25px;">
						<td  style="padding-top:20px;"><span style="font-weight:700;">House ID</span> <span style="margin-left:23px;">:</span> <span style="margin-left:30px;" >{{houseId}}</span></td>
						<td  style="padding-top:20px;"><span style="font-weight:700;">Due Date</span> <span style="margin-left:53px;">:</span> <span style="margin-left:30px;" >{{dueDate}}</span></td>
					</tr>
				</tbody>
			</table>
			<hr style="margin-bottom:0;margin-left:25px;margin-right:25px;border:1px solid grey;">
			<h6 style="margin-top:30px;;margin-left:25px;color:#3fb6c6;font-weight:700;" >TENANT DETAILS</h6>

			<ul style="margin-left:25px;padding:0;margin-top:20px;">
				<li style="display:block;padding-bottom:20px;">
					<span style="font-weight:700;">Tenants</span> <span style="margin-left:30px;">:</span> <span style="margin-left:30px;" >{{tenants}}</span>
				</li>
				<li style="display:block;padding-bottom:20px;">
					<span style="font-weight:700;">Address</span> <span style="margin-left:30px;">:</span> <span style="margin-left:30px;" >{{tenantsAddress}}</span>
				</li>
				<br>
				<li style="display:block;padding-bottom:20px;">
					<span style="font-weight:700;">Email</span> <span style="margin-left:48px;">:</span> <span style="margin-left:30px;" >{{tenantsEmail }}</span>
				</li>
				<li style="display:block;">
					<span style="font-weight:700;">Contact</span> <span style="margin-left:33px;">:</span> <span style="margin-left:30px;" >{{tenantsContact}}</span>
				</li>
			</ul>
			<hr style="margin-left:25px;margin-right:25px;border:1px solid grey;">
			<h6 style="margin-top:30px;margin-left:25px;;color:#3fb6c6;font-weight:700;margin-bottom:20px;" >DESCRIPTION</h6>
			<p style="margin-left:25px;font-weight:700; font-size:15px;">RENT_{{rentMonth }}  ({{dueDate}} to {{lastDate}})<span style="float:right;margin-right:125px">₹ {{amount}}/-</span></p>
			<p  style="margin-left:25px;font-weight:700;font-size:15px;">Payment Mode via {{payMode}}</p>
			<br>
			<br>
			<div style="background-color:rgba(169,169,169,0.5);height:30px;">
				<p style="margin-left:25px;font-weight:700;padding-top:5px;">Total Rs: <span style=" float:right;margin-right:125px">₹ {{amount}}/-</span></p>
			</div>
			<br>
			<p  style="margin-left:25px;font-weight:500;padding-top:5px;color:rgba(169,169,169,0.8);font-size:15px">This is system generated report.No signature is requried</p>
			<button @click="print()" id="print-btn" type="" style="color:white;background:black;width:150px;height:35px;border:0;outline:0;float:right;margin-right:25px;">Print</button>
			<br>
			<br>
			<br>
		</section>
	</div>
</template>

<script>
import "regenerator-runtime/runtime";
import store from '../vuex/store'
import * as firebase from 'firebase';
export default {
	data () {
		return {
			ownerId:"unknown",
			ownerName:"unknown",
			ownerContact:"unknown",
			houseId:"unknown",
			reciptId:"unknown",
			reciptDate:"unknown",
			dueDate:"unknown",
			tenants:"unknown",
			tenantsAddress:"unknown",
			tenantsEmail:"unknown",
			tenantsContact:"unknown",
			rentMonthDuration:"unknown",
			paymentMode:"unknown",
			amount:"unknown",
			invoiceNumber:"unknown",
			uid:"unknown",
			lastDate:"unknown",
			rentMonth:"unknown",
			payMode:"unknown"

		}
	},
	methods:{
		print(){

			document.getElementById('print-btn').style.display="none";

			var ele = document.getElementById('print');
			ele.style.fontFamily = 'inherit'
			window.print();
			ele.style.fontFamily = "'Exo', sans-serif";
			document.getElementById('print-btn').style.display="block";

		}
	},
	async mounted(){

		this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar 
		if(this.invoiceNumber!=="unknown"){
			// get paid amount and details
			firebase.firestore().collection('rentPaid').doc(this.uid).get().then(res =>{
				res.data().paid.forEach((element) => {
					if(this.invoiceNumber === element.vn ){
						this.reciptId = element.vn;
						this.reciptDate = firebase.firestore.Timestamp.fromDate(new Date()).toDate().toString().substring(0,10);
						this.dueDate = element.date.toDate().toString().substring(0,10);

						if(element.date.toDate().toString().charAt(9)=='1')
							this.dueDate += "st";
						else if(element.date.toDate().toString().charAt(9)=='2')
							this.dueDate += "nd";
						else if(element.date.toDate().toString().charAt(9)=='3')
							this.dueDate += "rd";
						else
							this.dueDate += "th";

						this.reciptDate += this.dueDate.substring(10,12);

						// setting next month of payment
						var d = new Date(element.date.toDate().toString());
						var mlist = [ "Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
						this.lastDate = this.dueDate.substring(0,4) + mlist[d.getMonth() + 1] + this.dueDate.substring(7,this.dueDate.length)
						this.rentMonth = element.month;

						this.amount =  element.amount;
						this.payMode = element.mode;
					}
				});
				
			}).catch( err =>{
				console.log(err)
			})


			// to get all ID
			await firebase.firestore().collection('registeredUser').doc(this.uid).get().then(res =>{
				this.houseId = res.data().propertyId;
				this.ownerId = res.data().ownerId;
			}).catch( err =>{
				console.log(err)
			})


			firebase.firestore().collection('ownerProfile').doc(this.ownerId).get().then( res =>{
				this.ownerName = res.data().name;
				this.ownerContact = res.data().phone;

			}).catch( err =>{
				console.log(err)
			})

			firebase.firestore().collection('userProfile').doc(this.uid).get().then(res =>{
				this.tenants = res.data().personal.name;
				this.tenantsContact = res.data().personal.mobile;
				this.tenantsEmail = res.data().personal.email;
				this.tenantsAddress = res.data().contact.emergencyAddress;
			})



		}

	},
	created(){
		this.invoiceNumber =  localStorage['invoiceNumber'] || invoiceNumber;

		if(user_profile!=false){
			this.uid = user_profile.getId();
		}else{
			this.uid = store.state.email+store.state.phone;
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url("https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,500;0,700;0,800;1,900&display=swap");

@media(max-width:480px){
	span{
		margin-left:0px !important;
		font-size:12px;
	}
}



</style>
