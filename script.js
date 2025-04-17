/*let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let Password = document.querySelector("#Password");
let Password2 = document.querySelector("#Password2");
let Form = document.querySelector("#Form");
function showError(input, message){
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;

}

function showsuccess(input){
    const FormControl = input.parentElement
    FormControl.className = "form-control success";

}

function checkmaile (input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;
    if(RegEx.test(input.value)){
        showsuccess(input)
    }else{
        showError(input, "Email is Not vailed");
    }
}

function checkInputLength(input,min,max){
    if(input.value.lenght < min){
        showError(input, `${GetFieldName(input)} You Much Be At Least ${min}characters`);
    }else if(input.value.lenght > max){
        showError(input, `${GetFieldName(input)} You Much Be less then ${max}characters`);
    }
    else{
        showError(input)
    }

}


function GetFieldName (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkPassWordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password Is Not")
    }
}

Form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputLength(Username, 3, 20)
    checkInputLength(Password, 3, 20)
    checkmaile(email)
    checkPassWordMatch(Password,Password2)
})


const group = document.querySelector(".group");
const output = document.querySelector(".output");

const sizes =["XLL","XL","M","L","s"];

group.innerHTML = sizes.map((size)=> `<div>
    <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
    </div>`
).join(" ");
    
const RadioButton = document.querySelectorAll("input");

for(const radioBtn of RadioButton){
    radioBtn.addEventListener("change", output)
}


function showOutput(e){
    console.log(e);

    if(this.checked){
        document.querySelector(".output").innerHTML = `You selected ${this.value}`;
    }
}


const btn = document.querySelector("#btn");


btn.addEventListener("click",(e)=> {
    let checkbox = document.querySelectorAll("input[name='color']:checkbox");
    let values =[];
    checkbox.forEach((checkbox)=> {
        values.push(checkbox.value);
    });

    console.log(values)
})


const lang = document.querySelector(".lang");
const btn = document.querySelector(".btn");

btn.onclick = (e) => {
    e.preventDefault();
    const optionsValue = [].filter
    .call(LockManager.options, (option) => option.selected )
    .map((option) => option.text );
    alert(optionsValue)
}


const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("input",()=> {
    result.textContent = message.value;
});*/


const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input  = DragArea.querySelector("input");
let Myfile ; 



button.onclick  = () => {
    input.click()
}

input.addEventListener("change" ,function(){
    Myfile = this.files[0];
    DragArea.classList.add("active"); 
    ShowMe()
    
})

DragArea.addEventListener("dragover", (event)=> {
event.preventDefault(); 
DragArea.classList.add("active"); 

DragText.textContent = "Release to Upload File";

} ) 

DragArea.addEventListener("dragleave",  ()=> {
    DragArea.classList.remove("active"); 
    DragText.textContent = "Drag & Drop";
}); 


DragArea.addEventListener("drop", (event)=>{ 
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];

    ShowMe()
})

function ShowMe(){
    let filetype = Myfile.type; 
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

    if(VaildEx.includes(filetype)){
        
      let fileReader  = new FileReader(); 

      fileReader.onload = () => {
          let imgUrl = fileReader.result; 
          let img  = `<img src="${imgUrl}" alt="">`

          DragArea.innerHTML = img
      }
      fileReader.readAsDataURL(Myfile); 
    }
    else  {
        alert("আপনার ফাইল টা ভালো না পচা । দয়া করে ইমেজ ফাইল ব্যবহার করুন 🥰"); 
        DragArea.classList.remove("active"); 
        DragText.textContent = "Drag & Drop";
    }
}

