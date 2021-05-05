export const catSlider = (elOne, elTwo, elThree) => {
  const mainParent = elOne.parentNode;
  const closedPOne = elTwo.parentNode;
  const closedPTwo = elThree.parentNode;

  // Hover
  mainParent.addEventListener('mouseover', () => {
    mainParent.classList.remove('col-4');
    closedPOne.classList.remove('col-4');
    closedPTwo.classList.remove('col-4');
    mainParent.classList.add('col-8');
    closedPOne.classList.add('col-2');
    closedPTwo.classList.add('col-2');
    elOne.children[0].style.opacity = '100';
  });

  // Leave hover
  mainParent.addEventListener('mouseleave', () => {
    mainParent.classList.remove('col-8');
    closedPOne.classList.remove('col-2');
    closedPTwo.classList.remove('col-2');
    mainParent.classList.add('col-4');
    closedPOne.classList.add('col-4');
    closedPTwo.classList.add('col-4');
    elOne.children[0].style.opacity = '0';
  });
};
