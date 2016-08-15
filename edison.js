// JQuery Document

$( document ).ready(function() {




	
$('.box').click(function(event) {
	var viewportWidth = $(window).width();
	console.log(viewportWidth);	
	alert(event.target.id);
	var name = event.target.id;
		/*name =(name.val());*/
		console.log(name);
		
		
	if (viewportWidth > 550) {
		console.log("desktop view");
		//$('.contentWrap').css({'height' : '15vmin' , 'maxHeight' : '90px', 'transition' : 'all .5s ease-in-out'});
		$('.contentWrap').addClass('openCW');
		//$('.menuBox').css({'width' : '16.6%' , 'height' : '100%', 'transition' : 'all .5s ease-in-out'});
		$('.menuBox').addClass('small');
		//$('.mainContentWrap').css('display', 'block');
		//$('.desktopContent:hidden').slideToggle();
		$('.desktopContent').addClass('openDC');
		
		
		buildSlides(name);	
		
	}
	else if (viewportWidth < 450) {
		console.log("Mobile view");
		var $mobileContent = $('.mobileContent');
		var $MC = $(this).parent().next(".mobileContent").stop(true).slideToggle(200);
		$mobileContent.not($MC).filter(':visible').stop(true).slideUp();	
	}
	else {
		console.log("Tablet View");
		//$(this).parent().siblings(".tabletContent").slideToggle(200);
		console.log($(this).parent().siblings(".tabletContent"));
		var $tabletContent = $('.tabletContent');
		var $TC = $(this).parent().nextAll(".tabletContent").eq(0).stop(true).slideToggle(200);
		$tabletContent.not($TC).filter(':visible').stop(true).slideUp();
	}
	
});


$('#logoBox').click(function() {
	console.log("you clicked the logo");
	$('.desktopContent').removeClass('openDC');
	//$('.contentWrap').css({'height' : '50vmin' , 'maxHeight' : '300px', 'transition' : 'all .5s ease-in-out'});
	$('.contentWrap').removeClass('openCW');
	//$('.menuBox').css({'width' : '33.3%' , 'height' : '50%', 'transition' : 'all .5s ease-in-out'});
	$('.menuBox').removeClass('small');
	//$('.mainContentWrap').css('display', 'none');
	//$('.desktopContent:visible').slideUp(500);
	
});



	
//	$('.box').click(function() {
//		console.log("you clicked a box");
//		//$(this).parent().next(".mobileContent").slideToggle();
//		
//		var $mobileContent = $('.mobileContent');
//		var $MC = $(this).parent().next(".mobileContent").stop(true).slideToggle(200);
//		$mobileContent.not($MC).filter(':visible').stop(true).slideUp();	
//	})
 
    
 
});

//var errMsg = document.getElementById("errMsg");
//var fName = document.getElementById("fName").addEventListener('blur', vFName, false);
//var lName = document.getElementById("lName").addEventListener('blur', vLName, false);
//var eMail = document.getElementById("eMail").addEventListener('blur', vEMail, false);
//var zCode = document.getElementById("zCode").addEventListener('blur', vZCode, false);
//var gender = document.getElementById("sex").addEventListener('blur', vGender, false);
//var username = document.getElementById("username");
//username.addEventListener('focus', function(){slideOpen('usernameInstr');}, false);
//username.addEventListener('blur', vUsername, false);
//username.addEventListener('blur', function(){slideClosed('usernameInstr');}, false);
//var password = document.getElementById("password");
//password.addEventListener('focus',function(){slideOpen('passwordInstr');}, false);
//password.addEventListener('blur', function(){slideClosed('passwordInstr');}, false);
//password.addEventListener('blur', vPassword, false);
//var cpassword = document.getElementById("cpassword").addEventListener('blur', vCPassword, false);
//var submitBtn = document.getElementById("submitBtn").addEventListener('click', delay, false);
//
//
//function vFName() {
//	if ((this.value == null) ||  (this.value == "")) {
//		errMsg.style.visibility = "visible";
//		errMsg.textContent = "Your First name is required";
//		document.getElementById("fName").focus();
//	}else{
//		errMsg.textContent = "";
//		errMsg.style.visibility = "hidden";
//	}
//}
//
//
//
//function vZCode() {
//	if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.value))
//	{
//	errMsg.style.visibility = "hidden";
//	errMsg.textContent = ""; 
//   	return (true) 
//	}
//	errMsg.style.visibility = "visible";
//	errMsg.textContent = "That is not a valid zipcode";
//	document.getElementById("zCode").focus();
//    return (false)
//}
//function vGender () {
//	 var radios = document.getElementsByName("gender");
//
//     for (var i = 0, len = radios.length; i < len; i++) {
//          if (radios[i].checked) {
//			  errMsg.style.visibility = "hidden";
//			  errMsg.textContent = "";
//              return true;
//          }
//     }
//	errMsg.style.visibility = "visible";
//	errMsg.textContent = "Please select either male or female";
//	document.getElementById("sex").focus();
//     return false;
// }
//function vUsername() {
//	if ((this.value == null) ||  (this.value.length < 5)) {
//		errMsg.style.visibility = "visible";
//		errMsg.textContent = "Username must be at least 5 characters";
//		document.getElementById("username").focus();
//	}else{
//		errMsg.style.visibility = "hidden";
//		errMsg.textContent = "";
//	}
//}
//
//function slideOpen(el){
//	var elem = document.getElementById(el);
//	elem.style.transition = "height 0.3s linear 0s";
//	elem.style.height = "60px";
//	elem.style.padding = "5px";
//	elem.style.border = "solid 1px #ff9800";
//	elem.style.borderRadius="0px 7px 0px 7px";
//}
//function slideClosed(el){
//	var elem = document.getElementById(el);
//	elem.style.transition = "height 0.3s linear 0s";
//	elem.style.height = "0px";
//	elem.style.border = "none";
//	elem.style.padding = "0px";
//}
//
//
//function vPassword(){
//	var form = document.getElementById("form");
//	//var node = document.getElementsByClassName("pInstr");
//	form.removeChild(form.lastChild);
//	if (/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(this.value)) 
//	{ 
//	errMsg.style.visibility = "hidden";
//	errMsg.textContent = ""; 
//   	return (true)  
//  	}
//	errMsg.style.visibility = "visible";  
//    errMsg.textContent = "That is not a valid password";
//	document.getElementById("password").focus();
//    return (false)
//}  
//function vCPassword(){
//	var password = document.getElementById("password");
//	console.log(password);
//	console.log(this.value);
//	if(this.value === password.value) {
//		errMsg.style.visibility = "hidden";
//		errMsg.textContent = "";
//		var submitBtn = document.getElementById("submitBtn");
//		submitBtn.style.visibility = "visible";
//	}else{
//		errMsg.style.visibility = "visible";
//		errMsg.textContent = "The passwords do not match";
//		document.getElementById("cpassword").focus();
//	}
//}
//function delay(){
//	setTimeout(launchMPlayer(),10000)
//}
//
//function launchMPlayer() {
//	var account = document.getElementById("account");	
//	  account.style.visibility = "hidden";
//	var submitBtn = document.getElementById("submitBtn");
//	  submitBtn.style.visibility = "hidden";
//	var mPlayer = document.getElementById("mPlayer");
//	  mPlayer.style.visibility = "visible";
//	  mPlayer.style.transition = "width .6s linear 0s";
//	  mPlayer.style.width = "600px";
//	var uName = document.getElementById("uName");
//	var fName = document.getElementById("fName")
//	uName.innerHTML = " " + fName.value;
//}
