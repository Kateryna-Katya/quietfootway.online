document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 12L14 22L4 12" stroke="#8B8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M24 6L14 16L4 6" stroke="#8B8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        const minusIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 16L14 6L4 16" stroke="#8B8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M24 22L14 12L4 22" stroke="#8B8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});