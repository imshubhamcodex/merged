<template lang="html">
  <div>
    <vs-tabs :color="colorx" alignment="center">
      <vs-tab @click="colorx = 'success'" label="Tenant">
        <div class=" text-center mx-auto ">
            
         <div class="text-left mx-auto" style="width: fit-content;background-color: #dbdbdb;">  
             <div>
                 <div class="row p-3"> 
                     <div class="col-1">
                         <div class="vl"><div class="sl"></div><div class="dl"></div></div>
                         
                         </div>
                    <div class="col-11"> 
         <h4 class="text-left">House tenant Detail</h4>
         <h5>The tenant will be contacted in this detail</h5>
     
       <vs-input  label-placeholder="Tenant name" class="mt-4" />
       <vs-input  label-placeholder="+91| Tenant Phone number" class="mt-4" />
       <vs-input  label-placeholder="House location or city" class="mt-4" />
       <h4 class="text-left mt-3">Your Detail</h4>
         <h5>you will be contacted for UPI verification</h5>
     <vs-input  label-placeholder=" Name" class="mt-4" />
       <vs-input  label-placeholder="+91|  Phone number" class="mt-4 mb-2" />
       <span class="text-muted mt-3">
           <input type = "checkbox" class="bg-success">
           I agree to be contacted by Roomlelo as per roomlelo's Privacy policy
       </span>
       <button class="btn btn-primary text-right">
              submit
       </button>
        </div>
        </div>
     
        </div>
        </div>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'danger'" label="Owner">
         <div class=" text-center mx-auto ">
            
         <div class="text-left mx-auto" style="width: fit-content;background-color: #dbdbdb;">  
             <div>
                 <div class="row p-3"> 
                     <div class="col-1">
                         <div class="vl"><div class="sl"></div><div class="dl"></div></div>
                         </div>
                    <div class="col-11"> 
         <h4 class="text-left">House Owner Detail</h4>
         <h5>The tenant will be contacted in this detail</h5>
     
       <vs-input  label-placeholder="Owner name" class="mt-4" />
       <vs-input  label-placeholder="+91| Tenant Phone number" class="mt-4" />
       <vs-input  label-placeholder="House location or city" class="mt-4" />
       <h4 class="text-left mt-3">Your Detail</h4>
         <h5>you will be contacted for UPI verification</h5>
     <vs-input  label-placeholder=" Name" class="mt-4" />
       <vs-input  label-placeholder="+91|  Phone number" class="mt-4 mb-2" />
       <div>
       <p class="text-muted mt-3">
           <input type = "checkbox" class="bg-success">
           I agree to be contacted by Roomlelo as per roomlelo's Privacy policy
       </p>
       </div>
       <br>
       <button class="btn btn-primary" style="">
              submit
       </button>
        </div>
        </div>
     
        </div>
        </div>
        </div>
      </vs-tab>
     
      
       
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success',
    inp:[],
  }),
  methods:{
      inp1(){
          console.log(this.inp)
      }
  }
}
</script>
<style  scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
    text-align: center;
  }
  .vl {
  border-left: 6px solid grey;
  height: 550px;
}
  .sl {
  border-left: 6px solid rgb(21, 158, 204);
  height: 10px;
  position: relative;
  top:10px;
  right:6px;


}
  .dl {
  border-left: 6px solid rgb(21, 158, 204);
  height: 10px;
  position: relative;
  top:290px;
  right:6px;
  
}
</style>