document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.getElementById('custom-cursor');
  const cursorImage = document.getElementById('cursor-image');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
  });

  document.addEventListener('click', () => {
    console.log('click');
    cursorImage.src = 'assets/MART_TRIGGERED.png';

    setTimeout(() => {
      cursorImage.src = 'assets/MART.png';
    }, 200);
  });
});