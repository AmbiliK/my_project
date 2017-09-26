$(document).ready(function(){
    $(".two1").click(function(){
        $(".two1").css("background","linear-gradient(white 50%,#E8E8E8 50%)");
        $(this).css("background","white");
    });
   
    
  // Get the modal
var modal = document.getElementById('myModal');
var select=0;
// Get the button that opens the modal
var btn1= document.getElementById("mybut1");
    var btn2= document.getElementById("mybut2");
    var btn3= document.getElementById("mybut3");
    var btn4= document.getElementById("mybut4");
    var btn5= document.getElementById("mybut5");
    var btn6= document.getElementById("mybut6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
     select=1;
    
    var a=($(".head1").text());
    var b=($("#tab1").text());
        $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head1").text(x.toString());
            var y=$("#n2").val();
            $("#tab1").text(y.toString());
            
            $("#n1").val(a);
             $("#n2").val(b);
      });
}
btn2.onclick = function() {
    modal.style.display = "block";
     select=2;
     var a=($(".head2").text());
    var b=($("#tab2").text());
    $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head2").text(x.toString());
         var y=$("#n2").val();
            $("#tab2").text(y.toString());
         
            $("#n1").val(a);
        $("#n2").val(b);
        
       
    });
}
btn3.onclick = function() {
    modal.style.display = "block";
     select=3;
     var a=($(".head3").text());
    var b=($("#tab3").text());
    $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head3").text(x.toString());
         var y=$("#n2").val();
            $("#tab3").text(y.toString());
         $("#n1").val(a);
        $("#n2").val(b);
           
        
    });

}
btn4.onclick = function() {
    modal.style.display = "block";
     select=4;
     var a=($(".head4").text());
    var b=($("#tab4").text());
     $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head4").text(x.toString());
          var y=$("#n2").val();
            $("#tab4").text(y.toString());
          $("#n1").val(a);
         $("#n2").val(b);
           
    });

    
}
btn5.onclick = function() {
    modal.style.display = "block";
     select=5;
     var a=($(".head5").text());
    var b=($("#tab5").text());
     $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head5").text(x.toString());
          var y=$("#n2").val();
            $("#tab5").text(y.toString());
          
         $("#n1").val(a);
         $("#n2").val(b);
            
    });
}
btn6.onclick = function() {
    modal.style.display = "block";
     select=6;
     var a=($(".head6").text());
    var b=($("#tab6").text());
    $("#n3").click(function(){
       
         var x=$("#n1").val();
        $(".head6").text(x.toString());
         var y=$("#n2").val();
            $("#tab6").text(y.toString());
         
          $("#n1").val(a);
        $("#n2").val(b);
          
    });
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
   
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


};

    
    
});



        $( function() {
    $( "#accordion" ).accordion();
  } );
     
        
        var i=0; 
        var reqid="#b";
        
        var arr_img=["image/s1.png","image/s2.png","image/s3.png","image/s4.png","image/s5.png","image/s6.png"];
 $(document).ready(function(){
    
    
     setInterval(function(){
    console.log(""+i);
       if(i>=6)
           {
               i=0;
           }
         
         if(i<6)
           {
       $(".jes").attr("src",arr_img[i]);
       $(".a1").css("background","grey");
        $(reqid+i).css("background","purple");      
       i=i+1;
  
           }
   }, 2000);
   
   $(".next").click(function(){
    console.log(""+i);
       if(i>=6)
           {
               i=0;
           }
       
       if(i<6)
           {
       $(".jes").attr("src",arr_img[i]);
       $(".a1").css("background","grey");
        $(reqid+i).css("background","purple");      
       i=i+1;
  
           }
    
   }); 
 });  
        
         $(document).ready(function() {
    $( "some1" ).accordion();
  } );
        
         $(document).ready(function(){
     
            
      $(".prev").click(function(){
    console.log(""+i);
          if(i<0)
              {
                  i=5;
              }
          
          
          if(i>=0)
              {
       $(".jes").attr("src",arr_img[i]);
                   $(".a1").css("background","grey");
          $(reqid+i).css("background","purple");   
       i=i-1;
              }
   }); 
 });
      $(document).ready(function(){
         $(".smallash1").click(function(){
             $(".a1").css("background","grey");
             $(".smallash1").css("background","purple");
           $(".jes").attr("src","image/s1.png");   
             i=0;
         }); 
           $(".smallash2").click(function(){
                $(".a1").css("background","grey");
             $(".smallash2").css("background","purple");
           $(".jes").attr("src","image/s2.png");   
             i=1;
         }); 
           $(".smallash3").click(function(){
                $(".a1").css("background","grey");
             $(".smallash3").css("background","purple");
           $(".jes").attr("src","image/s3.png");   
             i=2;
         }); 
           $(".smallash4").click(function(){
                $(".a1").css("background","grey");
             $(".smallash4").css("background","purple");
           $(".jes").attr("src","image/s4.png");   
             i=3
         }); 
           $(".smallash5").click(function(){
                $(".a1").css("background","grey");
             $(".smallash5").css("background","purple");
           $(".jes").attr("src","image/s5.png");   
             i=4;
         }); 
           $(".smallash6").click(function(){
                $(".a1").css("background","grey");
             $(".smallash6").css("background","purple");
           $(".jes").attr("src","image/s6.png");   
             i=5;
         }); 
      });










$( function() {
           var icons = {
         header: "repeatbutton",
         activeHeader: "downbutton"
     };
   $( "#accordion" ).accordion({
       icons: icons
        
         
   });
 } );
       