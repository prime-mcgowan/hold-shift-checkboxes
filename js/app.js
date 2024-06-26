//selects all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//creates
let lastChecked;

function handleCheck(e) {
  //   console.log(e);

  //check to see if user has shift key down
  //check to see if user is also checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      //checkbox that triggered the clickevent || last box checked
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check inbetween");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
