export const catSlider = (elOne, elTwo, elThree) => {
  const mainParent = elOne.parentNode;
  const closedPOne = elTwo.parentNode;
  const closedPTwo = elThree.parentNode;

  // Hover
  mainParent.addEventListener("mouseover", () => {
    mainParent.classList.remove("col-4");
    closedPOne.classList.remove("col-4");
    closedPTwo.classList.remove("col-4");
    mainParent.classList.add("col-10");
    closedPOne.classList.add("col-1");
    closedPTwo.classList.add("col-1");
    elOne.children[0].style.opacity = "100";
  });

  // Leave hover
  mainParent.addEventListener("mouseleave", () => {
    mainParent.classList.remove("col-10");
    closedPOne.classList.remove("col-1");
    closedPTwo.classList.remove("col-1");
    mainParent.classList.add("col-4");
    closedPOne.classList.add("col-4");
    closedPTwo.classList.add("col-4");
    elOne.children[0].style.opacity = "0";
  });
};
