document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 17L1 17" stroke="#FAEDCF" stroke-width="2" stroke-linecap="round" />
  <path d="M25 9L1 9" stroke="#FAEDCF" stroke-width="2" stroke-linecap="round" />
  <path d="M25 1L1 1" stroke="#FAEDCF" stroke-width="2" stroke-linecap="round" />
</svg>
    `;
  
    const crossIcon = `
<svg width="28" height="28" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.1663 34.1667L6.83301 6.83333M34.1663 6.83333L6.83301 34.1667" stroke="#FAEDCF" stroke-width="2" stroke-linecap="round" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });