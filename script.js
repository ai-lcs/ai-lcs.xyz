document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = '邮箱已复制';
    } catch {
      copyStatus.textContent = '请长按或选中下方邮箱复制';
    }
  });
}
