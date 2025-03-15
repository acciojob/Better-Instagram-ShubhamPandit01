let idArr = ["div1", "div2", "div3", "div4", "div5", "div6"];
let draggedItem = null;

document.querySelectorAll(".image").forEach((element, index) => {
  element.id = idArr[index];

  // DRAG START: Store the dragged element
  element.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.dataTransfer.setData("id", e.target.id);
  });

  // DRAG OVER: Allow drop
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // DROP: Swap background images and text
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    
    let dropLoc = e.currentTarget; 
    if (draggedItem === dropLoc) return;

    // Get computed background image if it's set via CSS
    let draggedBg = window.getComputedStyle(draggedItem).backgroundImage;
    let dropBg = window.getComputedStyle(dropLoc).backgroundImage;

    // Swap Background Image
    draggedItem.style.backgroundImage = dropBg;
    dropLoc.style.backgroundImage = draggedBg;

    // Swap Inner Text
    [draggedItem.innerText, dropLoc.innerText] = [dropLoc.innerText, draggedItem.innerText];
  });
});
