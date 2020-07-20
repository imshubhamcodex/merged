import searchresult from '../components/searchresult.vue';
import home from '../components/home.vue';
import detail from '../components/detail.vue';
import propertyRegister from '../components/propertyRegister.vue';
import referAndEarn from '../components/referAndEarn.vue';

import login_signup_user from '../components/login_signup_user.vue';
import dashboard from '../components/dashboard.vue';
import user from '../components/user.vue';
import maintenanceUser from '../components/userMaintenance.vue';
import payment from '../components/userPayment.vue'
import invoice from '../components/Invoice.vue'
import paymentPage from '../components/paymentPage.vue'
import exitPage from '../components/exitHome.vue'
import houseKeeping from '../components/houseKeeping.vue'
import overheadBills from '../components/overheadBills.vue'

export default [

{path:'/result',name:'result',component: searchresult,props: true},
{path:'/',component: home},
{path:'/detail:id',component: detail},
{path:'/propertyRegister', name:'propertyRegister',component: propertyRegister},
{path:'/referAndEarn', name:'referAndEarn',component: referAndEarn},


{
	path: '/login_signup_user',
	component: login_signup_user
},
{
	path: '/dashboard',
	component: dashboard
}, 
{
	path: '/user',
	component: user
},
{
	path: '/maintenanceUser',
	component: maintenanceUser
},
{
	path: '/payment',
	component: payment
},
{
	path:'/invoice',
	component: invoice
},
{
	path:'/paymentPage',
	component: paymentPage
},
{
	path:'/exitPage',
	component: exitPage
},
{
	path:'/houseKeeping',
	component: houseKeeping
},
{
	path:'/overheadBills',
	component: overheadBills
},
]
