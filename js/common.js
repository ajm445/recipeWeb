// 외부 클릭 시 메뉴 닫기 공통 함수
function closeMenuOnOutsideClick(menuElement, triggerElement) {
    document.addEventListener('click', (event) => {
        if (!menuElement.contains(event.target) && !triggerElement.contains(event.target)) {
            menuElement.classList.remove('active');
        }
    });
}