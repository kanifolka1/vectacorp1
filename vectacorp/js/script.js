$(function() {
//THE HEADINGS
$('h2').css('border','solid').css('border-size','1px').css('border-color','black');
$('h2').css('color', '#CC1C0D');
$('h2').css('padding-top','3px').css('padding-left','20px').css('padding-bottom','3px');
$('h2').css('border-top-right-radius','5px').css('border-bottom-left-radius','5px');
$('h2').css('background-color','#DFE3E6');
//THE NAVIGATION MENU
$('a').addClass("navigation");
$('.navigation').css('border-color','#929CA4').css('border','solid');
//$('.navigation').css('color','#CC1C0D');
$('.navigation').css('padding-top','3px').css('padding-left','20px').css('padding-bottom','3px');
$('.navigation').css('background-color', '#DFE3E6.');
//THE MAIN CONTENT
$('main p').removeClass("vprospect");
$('main p').removeClass("vconvert");
$('main p').removeClass("vretain");
$('aside p:last').append('<br>','<span>"Chevy Dealers Association” <span>')
$('aside p:first').wrap('<q></q>');
//PRACTICE WITH JQUERY EVENTS
//$("#myButton").click(function(){
    //window.alert ('You clicked the button');
//});
//$('#myButton').bind("click", function(event){
    //window.alert ('You has clicked the button');
//});
//$('#myButton').on("click",function(event){
   // window.alert ('You just has clicked the button');
//});
//$('body').on({
   // click:function(events){
       // window.alert("Hello, you clicked the button");
    //}
//}, 'button');
//$('div').css('height', '400px').css('weight','400px');
//$('div').on({
  // mouseenter:function () {
     //  window.alert("Hovered over the div!");
   //},
   //mouseleave:function () {
     //  window.alert("Mouse left  the div!");
  // },
  // click:function () {
    //   window.alert(" You clicked the div!");
   //}
//});

//$(function(){
    //$('div').on('mouseenter', 'mouseleave', 'span', function(){
        //window.console.log('Mouse entered or left the span tag');
    //})
//})
    // var theLink = $('<a>',{
      //   text:"Modulemedia",
       //  href:"www.modulemedia.com"
     //}).appendTo('main p:first');
    
    
    //$('theLink').on(function(event){
       //event.preventDefault();
    //$('theLink').css('color','red');
    //window.alert(event.target.nodeName+"trigered event");
//});
//23//
//$('main').wrap('<div></div>');
//$(window).resize(function (){
    //$('div').text($(window).width());
//});
//$(window).resize(function (){
    //$('div').text($(window).height());
//});
//24//
//$('input').focus(function(){
    //$('input').css('backgroud-color','#ccc');
//});
//25//
//$('#submitBt').click(function(){
 //$('input').text(i+=1);
 //if (i>=1){
   // $('input').css('border','red');
 //} else if (i!==1);
   // $('input').css('border','green');
   //window.alert('You should fill up the both fields');
//});

});