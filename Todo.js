
const inputVal = document.querySelector("#myInput");
const btn = document.querySelector(".addBtn");
const list = document.querySelector("#myUL");




btn.addEventListener("click", () => {
    if (inputVal.value.trim() !== "") {
        const newlist = document.createElement("li");
        newlist.innerText = inputVal.value;

        
        const deletbtn = document.createElement("span");
        deletbtn.innerText = "×";
        deletbtn.classList.add("close");
        newlist.appendChild(deletbtn);
        
        
        list.appendChild(newlist);

        
        deletbtn.addEventListener("click", () => {
            list.removeChild(newlist);
        });
        
        
        newlist.addEventListener("click", () => {
            newlist.classList.toggle("checked");
        });


        inputVal.value = "";
    } else {
        alert("Please type a valid task");
    }
});



