// html로드가 끝나기전에 함수가 로드되서 null값으로 들어감
// const big = document.querySelector("#bignav");  
// const min = document.querySelector("#minenav");
function sainin() {
  onclick = location.href = 'https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dko%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=ko&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
}
var big;
var min;
var video;
document.addEventListener("DOMContentLoaded", function(){
  big = document.querySelector("#bignav");
  console.log(big);
  min = document.querySelector("#minenav");
  console.log(min);
  video = document.querySelector("#contein");
  console.log(video);
});

function resize() {
  // console.log('실행');
  //높이+넓이가 같이저장된 변수를 넣음
  /* var w = window.clientWidth;
  var h = window.clientHeight;
  var clienttxt = "Window size: width=" + w + ", height=" + h;
  console.log("clint"+clienttxt); */
    var width = window.innerWidth;
  
  // console.log("inner"+innerline);
  if (1320 < width) {
    console.log("1320");
    big.style.display = "block";
    min.style.display = "none";
    video.style.left = '150px';
  } else if (810 < width) {
    console.log("810");
    big.style.display = "none";
    min.style.display = "block";
    video.style.left = '60px';
  } else {
    console.log("400");
    big.style.display = "none";
    min.style.display = "none";
    video.style.left = '0px';
  }
  /* var w = window.outerWidth;
  var h = window.outerHeight;
  var outertxt = "Window size: width=" + w + ", height=" + h;
  console.log("outer"+outertxt); */
  /* var w = window.offsetWidth;
  var h = window.offsetHeight;
  var offsettxt = "Window size: width=" + w + ", height=" + h;
  console.log("offset"+offsettxt);       */
}
function navtoggl() {
  // = 대입연산자
  // === 비교연산자
  //block에서 none으로 전환안됨
  //첫클릭 씹힘???
  if (810 < innerWidth) {
    if (big.style.display === "none") {
      console.log('논');
      big.style.display = "block";
      console.log(1);
      min.style.display = "none";
      console.log(2);
      video.style.left = "150px";
      video.style.width = "100vw";
      console.log(3);
      // alert("none");
    } else {
      console.log('블럭');
      big.style.display = "none";
      console.log(1);
      min.style.display = "block";
      console.log(2);
      video.style.left = "60px";
      video.style.width = "100vw";
      console.log(3);
      // alert("block");
    }
  
  } else {
    if (big.style.display === "none") {
      console.log('800논');
      big.style.display = "block";
      big.style.position = "absolute";
      console.log(1);
      video.style.width = "100vw";
      console.log(2);        
    } else {
      console.log('800블럭');
      big.style.display = "none";
      console.log(1);
      video.style.width = "100vw";
      console.log(3);
    }
  }
}
  /* 데이터 쓰기
  localStorage.setItem
  데이터 읽기
  localStorage.getItem
  데이터 삭제
  localStorage.removeItem
  모든 데이터 삭제
  localstorage.clear
  저장된 키/값 쌍의 개수
  localStorage.length */
  //주의: 문자형만 입력가능
function darkmode() {

  // var getmode = window.localStorage('color-mode', )
  // var selectmode = document.getElementsByName('selectmode:checked');
  // const light = document.getElementById('selectmode') 
  
  var check = document.querySelector("input[id=selectmode]:checked").value;
  console.log(check);
  var selectmode = localStorage.getItem('color-mode');
  // console.log(selectmode);
  document.querySelector('#selectmode').addEventListener('click', e => {
    // console.log('aa');
    if (e.value === 'dark') {
      console.log('ifdark');
      window.localStorage.setItem('color-mode', 'dark');
    } else {
      console.log('iflight');
      window.localStorage.setItem('color-mode', 'light');
    }
  });
  const osmode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  console.log(osmode);
}

window.onload = function () {
  

  var viewthema = selectmode ? selectmode : osmode;
  if (viewthema === 'dark') {
    localStorage.setItem('color-mode', 'dark')
    document.documentElement.setAttribute('color-mode', 'dark');
  } else {
    localStorage.setItem('color-mode', 'light')
    document.documentElement.setAttribute('color-mode', 'light');
  }
};