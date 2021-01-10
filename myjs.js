$(document).ready(function(){
    
    
      $("#btn1").click(function(){
       $("#pc1").show(); 
    });
      $("#btn1").click(function(){
       $("#pc2").show(); 
    });
     $("#btn1").click(function(){
       $("#pc3").show(); 
    });
     $("#btn1").click(function(){
       $("#pc4").show(); 
    });
    
   
    
//    web click
    
    $("#btn11").click(function(){
       $("#pc4").hide(); 
    });
    
    $("#btn11").click(function(){
       $("#pc3").hide(); 
    });
    
       $("#btn11").click(function(){
       $("#pc1").show(); 
    });
      $("#btn11").click(function(){
       $("#pc2").show(); 
    });
    
//    app click
    
     $("#btn12").click(function(){
       $("#pc1").hide(); 
    });
    
    $("#btn12").click(function(){
       $("#pc2").hide(); 
    });
     $("#btn12").click(function(){
       $("#pc3").show(); 
    });
     $("#btn12").click(function(){
       $("#pc4").show(); 
    });
    
    
//icon click
     $("#btn13").click(function(){
       $("#pc4").hide(); 
    });
      $("#btn13").click(function(){
       $("#pc1").show(); 
    });
      $("#btn13").click(function(){
       $("#pc2").show(); 
    });
     $("#btn13").click(function(){
       $("#pc3").show(); 
    });
    
//active buttons
    //    button one
      $("#btn1").click(function(){
       $("#btn1").addClass("active"); 
    });
    
     $("#btn1").click(function(){
       $("#btn11").removeClass("active"); 
    });
     $("#btn1").click(function(){
       $("#btn12").removeClass("active"); 
    });
     $("#btn1").click(function(){
       $("#btn13").removeClass("active"); 
    });
  
    //    button two
    
          $("#btn11").click(function(){
       $("#btn11").addClass("active"); 
    });
    
     $("#btn11").click(function(){
       $("#btn1").removeClass("active"); 
    });
     $("#btn11").click(function(){
       $("#btn12").removeClass("active"); 
    });
     $("#btn11").click(function(){
       $("#btn13").removeClass("active"); 
    });
    
    //    button three
           $("#btn12").click(function(){
       $("#btn12").addClass("active"); 
    });
    
     $("#btn12").click(function(){
       $("#btn1").removeClass("active"); 
    });
     $("#btn12").click(function(){
       $("#btn11").removeClass("active"); 
    });
     $("#btn12").click(function(){
       $("#btn13").removeClass("active"); 
    });
        //    button four
    
             $("#btn13").click(function(){
       $("#btn13").addClass("active"); 
    });
    
     $("#btn13").click(function(){
       $("#btn1").removeClass("active"); 
    });
     $("#btn13").click(function(){
       $("#btn11").removeClass("active"); 
    });
     $("#btn13").click(function(){
       $("#btn12").removeClass("active"); 
    });
    
})