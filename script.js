function initialize() {var cent=new google.maps.LatLng(13.83400426224201, 75.70363922229001);
        var myOptions = {
          center: cent,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

//this creates the map
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);

//putting a marker in the center of the map
var marker=new google.maps.Marker({title:"latlang finder",position:cent,map:map,draggable:true


});


google.maps.event.addListener(marker,'position_changed',function(){

var pos=marker.getPosition().toString();

 $("#deb").html(pos);

});


return map;


      };




$(document).ready(function(){
	var map=initialize();



$("#sidebar").animate({height:400},"slow",function(){$("#hidden").fadeIn(1000,'linear');}).draggable();

$("#foot").hover(function(){

	$("#ds").slideToggle();
});



// putting blue map over

var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(13.809727106326216, 75.6655049998779 ),
  new google.maps.LatLng(13.8562671724377, 75.73255520129391)
  
    
    );



var blue = new google.maps.GroundOverlay(
    "image.png",
    imageBounds);
blue.setOpacity(.5)
blue.setMap(map);

function toggleOver(map,overlay){if(overlay.getMap()){
  overlay.setMap(null);
}else{overlay.setMap(map);}

}
// $("#ovl").hover(function(){$(this).removeClass("over")},function(){$(this).addClass("over")}) not working
$("#ovl").click(function(){
if($(this).hasClass("pressed"))
  $(this).removeClass("pressed");
else
  $(this).addClass("pressed")
toggleOver(map,blue);
});


$("#annehally").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/annehaly.html")
$("#box").fadeIn();
});


$("#anekoppa").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/anekoppa.html")
$("#box").fadeIn();
});

$("#bullapura").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/bullapura.html")
$("#box").fadeIn();
});

$("#hutha").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/hutha.html")
$("#box").fadeIn();
});

$("#jannapura").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/jannapura.html")
$("#box").fadeIn();
});

$("#ujannipura").click(function(){
// $("#info").html("<iframe height='100%' width='100%'src='gooogleapi/annehaly.html'><iframe>")
$("iframe").attr("src","gooogleapi/ujannipura.html")
$("#box").fadeIn();
});
















$("#shinfo").click(function(){

  $("#box").fadeOut();
});



$("#slider").slider({
min:0,
value:0.5,
max:1,
step:.1,

slide:function(event ,ui){
$("#opacity").html(ui.value);
blue.setOpacity(ui.value);
}

});



});



 

