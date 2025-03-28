document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const toggleElementBtn = document.getElementById("toggleElementBtn");
  const container = document.getElementById("dynamicContainer");

  
  changeTextBtn.addEventListener("click", () => {
      description.textContent = "The text has been changed!";
      description.style.color = "blue"; 
  });

  
  toggleElementBtn.addEventListener("click", () => {
      if (!document.getElementById("newElement")) {
          const newElement = document.createElement("p");
          newElement.id = "newElement";
          newElement.textContent = "This is a dynamically added paragraph!";
          newElement.style.color = "green";
          container.appendChild(newElement);
          toggleElementBtn.textContent = "Remove Element";
      } else {
          document.getElementById("newElement").remove();
          toggleElementBtn.textContent = "Add Element";
      }
  });
});
