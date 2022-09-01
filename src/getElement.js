
// get document element
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error("element not found");
  };
  
  export default getElement;
  