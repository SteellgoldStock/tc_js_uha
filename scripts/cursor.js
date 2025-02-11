document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.getElementById('custom-cursor');
  const cursorImage = document.getElementById('cursor-image');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
  });

  document.addEventListener('click', (event) => {
    const elementClicked = document.elementFromPoint(event.clientX, event.clientY);
    
    if (elementClicked && elementClicked.id === 'mole') cursorImage.src = 'assets/MART_HIT.png';
    else cursorImage.src = 'assets/MART_TRIGGERED.png';


    setTimeout(() => {
      cursorImage.src = 'assets/MART.png';
    }, 200);

    // if (elementClicked && elementClicked.id === 'mole' && !elementClicked.classList.contains('hit')) {
    //   cursorImage.src = 'assets/MART_HIT.png';
    // }
  });
});