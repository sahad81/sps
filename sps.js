$(document).ready(function(){
    

    $("#form-r").validate({
    rules:{
        nameofst:{
            minlength:4,
            
            required:true
            
            
        },
        place:{
            required:true
        
        },emailad:{
            email:true,
             required:true
          
     },education:{
            required:true, 
       
        },somthing:{
            required:true,
        },motive:{
            required:true,
        },learn:{
            required:true

        },tic:{
            required:true
        },clg:{
             required:true

        
        },contact:{
            required:true
        },year:{
            required:true,
            

        },status1:{
            required:true
        },gender1:{
            required:true
        }

    }
    })
})

