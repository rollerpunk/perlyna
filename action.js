$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));



jQuery.each( jQuery.browser, function( i, val ) {
  $( "<div>" + i + " : <span>" + val + "</span>" )
  .appendTo( "#params" );
});



$(document).ready(function() {
  // run test on initial page load
  chooselayout()
  setmap()



  $( "<div>" + "width" + " : <span>" + $(window).width() + "</span>" ).appendTo( "#params" );
  $( "<div>" + "height" + " : <span>" + $(window).height() + "</span>" ).appendTo( "#params" );
  $("<hr>"+"body").appendTo( "#params" );


});  
//---for debug (check what to delite)-------------------------------------

$(window).on('resize', function(){chooselayout()});



function setmap(){
	//set acceptable height of map view area
    var useragent = navigator.userAgent;
  	if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) 
  	{

  		$("#map_canvas").height($(window).height()-100);
  	}
    else
    {
    	$("#map_canvas").height(500);
    }


    
//google api
	var position = new google.maps.LatLng(49.7839334,24.0541865);
    var myOptions = {
      zoom: 16,
      center:position,
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    };

    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);
 
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"Перлина"
    });  
 
    var contentString = '<img src="perlina.png" style="width: 30px; height:30px"><strong> Перлина</strong><br><b>097 23-99-111</b>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
 
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}


function chooselayout(){
    var win = $(window); //this = window
  	if (win.width() < 550) 
	{ //small view
		$("#menu").addClass("hiden");
		$("#menu").hide();
		$(".logo").addClass("lactivated");
        $("#menu").addClass("menusmall");
        $("#menu").removeClass("menubig");
        $(".topline").show();
        if (win.width()<300) {
        	$(".headline").hide();
        }
        else
        {
        	$(".headline").show();
        }
	}
	else
	{ // NORMAL view
		$(".topline").hide();
		$("#menu").removeClass("hiden");
		$("#menu").show();
		$(".logo").removeClass("lactivated");
		$("#menu").addClass("menubig");
		$("#menu").removeClass("menusmall");
		
	}
};


$(".logo").click(function() {
  	if  (($("#menu").css("iammedia") == "true" )  || ($(".logo").hasClass("lactivated")))		
	{
	  if ($("#menu").is(':visible') )
	  {
	    $("#menu").hide();
	    $("#menu").addClass("hiden");

	    $(".showtext").show();
	    $(".showtext").removeClass("hiden");
      }	
	 
	  else
	  {

		$("#menu").show();
		$("#menu").removeClass("hiden");

		$(".showtext").hide();
		$(".showtext").addClass("hiden");

	  }
	}
});


$(".barlink").click(function() {
	if (($("#menu").css("iammedia") == "true" ) || ($("#menu").hasClass("menusmall")))
	{
		$("#menu").hide();	
		$("#menu").addClass("hiden");	
	}
    $(".showtext").removeAttr( 'style' );
    $(".showtext").removeClass("hiden");

	var tmp = $(".amenu");
	tmp.removeClass("amenu");
	tmp.addClass("barlink");
	$(this).removeClass("barlink");
	$(this).addClass("amenu");
    
	tmp = $(".showtext");
	tmp.removeClass("showtext");
	tmp.addClass("hidetext");
	
	tmp= $("#"+$(this).attr("textpart"));
	tmp.addClass("showtext");
	tmp.removeClass("hidetext");
	$(document).scrollTop(0);
});


// the same for @mobiles


jQuery.fn.switchClass = function(old,neew) {
    $(this).removeClass(old);
    $(this).addClass(neew);
};


/*	
$(document).on("scrollstop",function(){
  alert ("mobile scroll: " + $(document).scrollTop());
  if ($(document).scrollTop()>10)
    {
    	$(".menubig").switchClass("menubig","menuscroll")
    }
    else
    {
       $(".menuscroll").switchClass("menuscroll","menubig")
    }
});
*/

if ($.browser.device==true)
{
	$(".menubig").switchClass("menubig","menuscroll")
}

$(document).scroll(function() {
    if ($(document).scrollTop()>15)
    {
    	$(".menubig").switchClass("menubig","menuscroll")
    }
    else
    {
       $(".menuscroll").switchClass("menuscroll","menubig")
    }
});

