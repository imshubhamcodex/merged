<template>
	<div id="protal-showcase">
		<div class="container">
			<div class="row" style="margin:0 auto;">
				<div class="col-sm" style="margin-bottom:20px;" >
					<router-link to="/login_signup_user">
						<div class="card" style="width: 10rem;margin:0 auto;">
							<div class="card-body">
								<h5 class="card-title">User info</h5>
								<p class="card-text">With supporting text below.</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="col-sm" style="margin-bottom:20px;">
					<div class="card" style="width: 10rem;margin:0 auto;">
						<div class="card-body">
							<h5 class="card-title">Owner</h5>
							<p class="card-text">With supporting text below. </p>

						</div>
					</div>
				</div>
				<div class="col-sm" style="margin-bottom:20px;">
					<div class="card" style="width: 10rem;margin:0 auto;">
						<div class="card-body">
							<h5 class="card-title">Agent</h5>
							<p class="card-text">With supporting text below.</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			title: "my vue file"
		}
	},
	mounted(){
		this.$root.$children[0].$children[0].$el.style.display="block";
	}

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#protal-showcase{
	margin-top:30px;
	font-family:Montserrat;
	font-weight:400;
}
.card{
	transition: all ease 0.2s;
}
.card:active{
	transform:scale(0.98);
}
</style>
