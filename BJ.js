let cancel1 = document.getElementById("back_ground");
let cancel2 = document.getElementById("login_block");
let icon = document.getElementById("cancel_Icon");
let login = document.getElementById("login");
let kakao = document.getElementById("use_kakao");
let naver = document.getElementById("use_naver");
let facebook = document.getElementById("use_facebook");
let self_identify = document.getElementById("use_identify");

login.addEventListener('click', function(){
  if(cancel1.style.display == "none" && cancel2.style.display == "none"){
    cancel1.style.display = "block";
    cancel2.style.display = "block";
  }
  else{
    cancel1.style.display = "none";
    cancel2.style.display = "none";
  }
})

icon.addEventListener('click', function(){
  cancel1.style.display = "none";
  cancel2.style.display = "none";
})
/*로그인 창 마우스 이벤트 관련*/
kakao.addEventListener('mouseover',function(){
  kakao.style.backgroundColor = "#fae100";
})

naver.addEventListener('mouseover',function(){
  naver.style.backgroundColor = "#03CF5D";
})

facebook.addEventListener('mouseover',function(){
  facebook.style.backgroundColor = "#3B5998";
})

self_identify.addEventListener('mouseover',function(){
  self_identify.style.backgroundColor = "#D3D3D3";
})

kakao.addEventListener('mouseout',function(){
  kakao.style.backgroundColor = "#FFFFFF";
})

naver.addEventListener('mouseout',function(){
  naver.style.backgroundColor = "#FFFFFF";
})

facebook.addEventListener('mouseout',function(){
  facebook.style.backgroundColor = "#FFFFFF";
})

self_identify.addEventListener('mouseout',function(){
  self_identify.style.backgroundColor = "#FFFFFF";
})