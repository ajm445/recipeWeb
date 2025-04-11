// recipe.html용 JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // 사이드바 메뉴 토글
    const menuToggles = document.querySelectorAll('.menu-toggle');
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const subMenu = toggle.nextElementSibling;
            subMenu.classList.toggle('active');
        });
    });

    // 모바일 사이드바 토글
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // 외부 클릭 시 사이드바 닫기
    closeMenuOnOutsideClick(sidebar, hamburger);
});