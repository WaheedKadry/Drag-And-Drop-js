let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;
window.onload = (e) => {
  inp.focus();
};

document.onkeyup = (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
  if (e.key !== "Enter") {
    inp.focus();
  }
};
//add item to box step 1
btn.onclick = () => {
  if (inp.value != "") {
    boxs[0].innerHTML += `
<p class='item' draggable='true'>
${inp.value}
</p>
`;
    inp.value = "";
  }
  inp.focus();
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      // console.log("dragstart");
      drag = item;
      item.style.opacity = "0.5";
      console.log(drag);
    });
    item.addEventListener("dragend", () => {
      // console.log("dragend");
      drag = null;
      item.style.opacity = "1";
      console.log(drag);
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#090";
        this.style.color = "#fff";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
