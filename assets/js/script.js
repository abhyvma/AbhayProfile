


$( document ).ready(function() {
    var arr = ['bg_1.jpg','bg_2.jpg','bg_3.jpg'];
    
    var i = 0;
    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img); 
     
    }, 4000)

});

function expCalculator() {  
    var joindate = new Date("03/15/2021");  
    var month_diff = Date.now() - joindate
    var age_dt = new Date(month_diff);   
    var month=age_dt.getMonth(); 
    var year = age_dt.getUTCFullYear();  
    var exp = year - 1970; 
    
   return document.getElementById("exp").innerHTML = exp+" Year "+month+" Month"
             
}




