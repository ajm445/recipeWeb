// 외부 클릭 시 메뉴 닫기 공통 함수
function closeMenuOnOutsideClick(menuElement, triggerElement) {
    document.addEventListener('click', (event) => {
        if (!menuElement.contains(event.target) && !triggerElement.contains(event.target)) {
            menuElement.classList.remove('active');
        }
    });
}

// 헤더 숨기기 on scroll
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add("hide"); // 아래로 스크롤 → 숨김
  } else {
    header.classList.remove("hide"); // 위로 스크롤 → 다시 보이기
  }
  lastScrollY = window.scrollY;
});
