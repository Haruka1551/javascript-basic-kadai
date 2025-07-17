const clickBtn = document.getElementById('btn');
const addText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
    setTimeout(() => {
      addText.textContent = ('ボタンをクリックしました')
    }, 2000);
});