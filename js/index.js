// index.html용 JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuContainer = document.querySelector('.menu-container');

    // 햄버거 메뉴 토글
    hamburger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });

    // 외부 클릭 시 메뉴 닫기
    closeMenuOnOutsideClick(menuContainer, hamburger);
});