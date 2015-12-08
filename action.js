$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));


jQuery.each( jQuery.browser, function( i, val ) {
  $( "<div>" + i + " : <span>" + val + "</span>" )
  .appendTo( "#params" );
});



$(document).ready(function() {
  // run test on initial page load
  chooselayout()
  $( "<div>" + "width" + " : <span>" + $(window).width() + "</span>" ).appendTo( "#params" );
  $( "<div>" + "height" + " : <span>" + $(window).height() + "</span>" ).appendTo( "#params" );
  $("<hr>"+"body").appendTo( "#params" );


});


$(window).on('resize', function(){chooselayout()});


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



});


