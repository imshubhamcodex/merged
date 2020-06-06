<template>
	<div>
		<nav style="width:100%;height:50px;box-shadow:0px 2px 4px rgba(0,0,0,0.6);position:fixed;top:0;background-color:white;">
			<h6 style="margin-top:13px;" >
				<router-link to="/dashboard"><i style="margin-left:20px; font-size:25px;" class="fa fa-long-arrow-left" aria-hidden="true"></i></router-link>
				<span style="margin-left:20px;font-size:22px;font-family:Montserrat;font-weight:600;"> Overhead Bills</span></h6>
			</nav>

			<div style="margin-top:80px">
				contact : {{phoneNumber}}
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
				phoneNumber:"XXXXXXXXXX"
			}
		},
		mounted(){
  	this.$root.$children[0].$children[0].$el.style.display="none"; // to hide old nav bar  
  	firebase.firestore().collection('overheadBills').doc("ownerId").get().then( res =>{
  		this.phoneNumber = res.data().number; 
  	})
  }
}
</script>

<style>

</style>
