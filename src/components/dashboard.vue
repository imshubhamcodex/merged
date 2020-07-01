<template>
	<div>
		<div v-show = "shownav" id="nav_menu" style="margin-top:0px; font-family:Montserrat; margin-bottom:50px; background:white; width:100%; padding-top:20px;min-height:630px;">
			<div v-on:click="showLinks()" style="width:100%;height:54px;background:rgb(60, 183, 198);position:relative;">
					<img v-bind:src="img" style="width:55px;height:55px;margin-top:0px;margin-left:20px;" alt="">
				<div style="position:absolute; top:10%;margin-left:100px;color:white;">
					<span style="font-size:15px;" > What's up {{ user_name}}</span>
					<br>
					<span><router-link to="/user" style="color:white;">View Profile</router-link></span>	
				</div>

				<i @click="closeNav()" style="position:absolute; top:50%;left:90%;color:white;transform:translate(0,-50%)" class="fa fa-times" aria-hidden="true"></i>
			</div>

			<div v-if="showlinks" id="nav_links" style="background:rgb(60, 183, 198);padding:20px;color:white;font-family:Montserrat;margin-top:-2px">

				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Links</p></li>
			</div>


			<ul style="margin:0;padding:0;padding-left:20px;padding-right:20px;">
				<br>
				<li style="list-style:none;"><router-link style="color:black;" to="/"><p>Home</p></router-link></li>
				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>Scheduled Visits</p></li>
				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>My Dashboard</p></li>
				<li style="list-style:none;margin-top:14px;" @click="closeNav()"><p>My Service Requests</p></li>
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
				<li style="list-style:none;margin:30px;margin-left:200px;" @click="signOut()"><button type="" style="font-family:Montserrat;background:black;color:white;padding-top:2px;padding-left:3px;padding-right:3px;width:100px;height:35px;">LOG OUT</button></li>
			</ul>

		</div>

		<div v-show = "showbar">


			<section>
				<div style="background-color:rgb(60, 183, 198);width:100%;height:200px;position:relative;">
					<nav style="background-color:rgb(60, 183, 198) !important;z-index:5" class="navbar navbar-expand-lg navbar-light">
						<router-link to="/user">
							<img v-bind:src="img" style="border-radius:50%;width:65px;height:65px;margin-top:10px;margin-left:0px;" alt="">
							<p style="margin-left:0px;font-weight:600; font-size:14px;color:black;">My profile</p>
						</router-link>
						<button v-show = "showbar" @click="showNav()" style="margin-top:-20px;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span style="color:white !important;font-size:30px;" class=" fa fa-bars"  data-toggle="collapse" data-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></span>
						</button>

					</nav>

				</div>



				<div class="glide" style="margin-top:-70px;z-index:2">
					<div class="glide__track" data-glide-el="track" style="height:134px;">
						<ul class="glide__slides" style="height:134px;">
							<li class="glide__slide--active">
								<div style="width:100%;height:130px;box-shadow: 0 0.1em 0.2em 0 rgba(0,0,0,0.8);border-radius:5px;background:white;">
									<p style="padding:8px; overflow:auto;color:black;">
										{{user_name}} !<br>
										How are you<br>
										We are at your service.
										1
										<img src="~../assets/char1.png" style="width:60px;margin-top:15px;float:right;">	

									</p>
								</div>
							</li>
							<li class="glide__slide">
								<div style="width:100%;height:130px;box-shadow: 0 0.1em 0.2em 0 rgba(0,0,0,0.8);border-radius:5px;background:white;">
									<p style="padding:8px; overflow:auto;color:black;">
										{{user_name}} !<br>
										How are you<br>
										We are at your service.
										2
									</p>
									<img src="" alt="">	
								</div>
							</li>
							<li class="glide__slide">
								<div style="width:100%;height:130px;box-shadow: 0 0.1em 0.2em 0 rgba(0,0,0,0.8);border-radius:5px;background:white;">
									<p style="padding:8px; overflow:auto;color:black;">
										{{user_name}} !<br>
										How are you<br>
										We are at your service.
										3
									</p>
									<img src="" alt="">	
								</div>
							</li>
							<li class="glide__slide">
								<div style="width:100%;height:130px;box-shadow: 0 0.1em 0.2em 0 rgba(0,0,0,0.8);border-radius:5px;background:white;">
									<p style="padding:8px; overflow:auto;color:black;">
										{{user_name}} !<br>
										How are you<br>
										We are at your service.
										4
									</p>
									<img src="" alt="">	
								</div>
							</li>
						</ul>
					</div>
					<div class="glide__arrows" data-glide-el="controls">
						<i id="glideleft" class="glide__arrow glide__arrow--left fa fa-chevron-left" data-glide-dir="<"></i>
						<i id="glideright" class="glide__arrow glide__arrow--right fa fa-chevron-right" data-glide-dir=">"></i>
					</div>
				</div>
			</section>
			<section style="margin-top:40px;margin-bottom:20px; width:100%;height:100%;">
				<table style="width:100%;height:100%;">
					<tbody style="margin:0 auto;">
						<tr style="margin:0 auto;height:100px;">
							<td style="margin:0 auto;text-align:center;"><img src="~../assets/mybooking.png" style="height:100px;margin:0 auto;display:block" alt=""></td>
							<td style="margin:0 auto;text-align:center;"><router-link to="/payment"><img src="~../assets/payment.png" style="height:100px;margin:0 auto;display:block" alt=""></router-link></td>
							<td style="margin:0 auto;text-align:center;"><router-link to="/overheadBills"><img src="~../assets/overheadbills.png" style="height:100px;margin:0 auto;display:block" alt=""></router-link></td>
						</tr>
						<br>
						<tr style="margin:0 auto;height:100px;">
							<td v-on:click="downloadChecklist()" style="margin:0 auto;text-align:center;"><img src="~../assets/checklist.png" style="height:100px;margin:0 auto;display:block" alt=""></td>
							<td style="margin:0 auto;text-align:center;"><router-link to="/maintenanceUser"><img src="~../assets/maintenance.png" style="height:100px;margin:0 auto;display:block" alt=""></router-link></td>
							<td style="margin:0 auto;text-align:center;"><router-link to="/houseKeeping"><img src="~../assets/housekeeping.png" style="height:100px;margin:0 auto;display:block" alt=""></router-link></td>
						</tr style="margin:0 auto;">
						<br>
						<tr style="margin:0 auto;height:100px;">
							<td  v-on:click="downloadAgreement()" style="margin:0 auto;text-align:center;"><img src="~../assets/agreement.png" style="height:100px;margin:0 auto;display:block" alt=""></td>
							<td style="margin:0 auto;text-align:center;"><router-link to="/exitPage"><img src="~../assets/exithome.png" style="height:100px;margin:0 auto;display:block" alt=""></router-link></td>
							<td style="margin:0 auto;text-align:center;"><img src="~../assets/refer.png" style="height:100px;margin:0 auto;display:block" alt=""></td>
						</tr>

					</tbody>
				</table>
			</section>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
import store from '../vuex/store'
import Glide from '@glidejs/glide'
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'
export default {
	data(){
		return{
			title: "my vue file",
			img:"https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg",
			user_name:"",
			propertyId:"",
			uid:"",
			showbar:true,
			shownav:false,
			showlinks:false
		}
	},
	methods:{
		showLinks(){
			this.showlinks = !this.showlinks;
		},
		showNav(){
			
			var x = document.getElementById('nav_menu');
			gsap.from(x,0.5,{opacity:0,ease:Power2.easeInOut,x:50})
			this.showbar = false;
			this.shownav = true;
			
		},
		closeNav(){
			this.showbar = true;
			this.shownav = false;
		},
		signOut() {
			// if(user_profile != false){
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(() => {
					console.log('User signed out.');
					user_profile=false;
              	this.loggedin = false; //to hide link to dashboard
          })
			// }

			  // set data of user in vuex to use in user.vue
              store.commit({
                type: 'change',
                email: "",
                phone: ""
              });

			localStorage.clear();
			alert("Logged Out")
			this.$router.push("/")
			
		},
		downloadChecklist(){ // always we have to put pdf in database
			firebase.storage().ref("checklist/"+this.propertyId).getDownloadURL().then(url =>{
				console.log(this.propertyId)
				window.open(url,'_blank')
			}).catch(err =>{
				console.log(err)
			})
		},
		downloadAgreement(){
			firebase.storage().ref("agreement/"+this.uid).getDownloadURL().then(url =>{
				window.open(url,'_blank')
			}).catch(err =>{
				console.log(err);
			})
		}
	},
	mounted(){
		this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar  

		if(window.innerWidth > 480 )  // slider for desktop version
		{
			var glide = new Glide('.glide',{
				type: 'carousel',
				autoplay: 2000,
				bound:true,
				perView: 4,
				peek: 70,
				focusAt:0,
				animationTimingFunc: 'linear',
				animationDuration: 500,
				touchAngle:45,
				hoverpause:true,
				startAt:0,
				gap:30,
			})

		}
		else{									// slider for mobile version
			var glide = new Glide('.glide',{
				type: 'carousel',
				autoplay: 2000,
				bound:true,
				perView: 1,
				peek: 70,
				focusAt:0,
				animationTimingFunc: 'linear',
				animationDuration: 500,
				touchAngle:45,
				hoverpause:true,
				startAt:0,
				gap:30,
			})
		}
		

		glide.mount({Controls})



		
		if(user_profile !=false ){  // if logged in via gmail
			this.img = user_profile.getImageUrl();
			firebase.firestore().collection('userProfile').doc(user_profile.getId()).get().then(res =>{
				this.user_name = res.data().name;
				if(res.data().personal.photo != undefined){
					this.img = res.data().personal.photo // get user image 
					this.user_name = res.data().personal.name				
				}else{
					this.img = res.data().image;
					this.user_name = res.data().name;
				}

				}).catch(err =>{
					console.log(err);
					
				})
		}else{ // error on new registration
			var uid = store.state.email+store.state.phone;

			firebase.firestore().collection('userProfile').doc(uid).get().then(res =>{
				this.user_name = res.data().personal.name
			})

			firebase.storage().ref("userImage/"+uid).getDownloadURL().then(url =>{
				this.img = url;
			}).catch(err =>{
				this.img = "https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
			})
		}

		if(window.innerWidth > 480){
			this.shownav =  true;
		}

		this.closeNav(); // to close nav menu

		
		
	},
	created(){
		this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar  

		if(user_profile!=false){
			this.uid = user_profile.getId();
		}else{
			this.uid = store.state.email+store.state.phone;
		}

		firebase.firestore().collection('registeredUser').doc(this.uid).get().then(res =>{
			this.propertyId = res.data().propertyId
		})

	}

}
</script>

<style scoped>

@import url('../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css');
@import url('../../node_modules/@glidejs/glide/dist/css/glide.core.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");

#glideright,#glideleft{
	border:0 !important;
	outline:0 !important;
	background:none !important;
	background-color:transparent !important;
	box-shadow:0px 0px 0px 0px;
	color:black !important;
	font-size:30px;
}
#glideright{
	margin-right:-50px;
	width:50px;
	height:50px;
}
#glideleft{
	margin-left:-50px;
	width:50px;
	height:50px;
}
.glide__arrow{
	box-shadow: 0 0em 0em 0 rgba(0,0,0,0.1) !important;
}
td img:active{
	transform:scale(0.97);
}


</style>
