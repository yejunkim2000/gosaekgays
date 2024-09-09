// Navbar 토글 기능
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// 메뉴 아이콘 클릭 시, 네비게이션 바 활성화/비활성화
menu.onclick = () => {
  navbar.classList.toggle('active');
};

// 스크롤 시, 네비게이션 바 비활성화
window.onscroll = () => {
  navbar.classList.remove('active');
};

// 다크 모드 기능
let darkmode = document.querySelector('#darkmode');

// 다크 모드 버튼 클릭 시, 아이콘 및 배경 모드 전환
darkmode.onclick = () => {
  if(darkmode.classList.contains('bx-moon')){
    darkmode.classList.replace('bx-moon','bx-sun');
    document.body.classList.add('active');
  }else{
    darkmode.classList.replace('bx-sun','bx-moon');
    document.body.classList.remove('active');
  }
};

// ScrollReveal 설정
const sr = ScrollReveal ({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
});

// ScrollReveal로 요소들 애니메이션 효과 적용
sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .btn, .connect-text, .contact-box', {
  interval: 200
});
