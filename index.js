let btn = document.getElementById("subscribeButton");
let input = document.getElementById("email");
let spanMessage = document.getElementById("message");
let emailSpan = document.getElementById("emailSpan");
let successPage = document.querySelector(".success");
let formPage = document.querySelector(".container");
let dismissBtn = document.querySelector(".btn button");

console.log(successPage);


input.addEventListener("keydown", e => {
    if (spanMessage.classList.contains("show")){
        spanMessage.classList.remove("show");
    }
    if (input.classList.contains("wrong")) {
        input.classList.remove("wrong");
    }
})

dismissBtn.onclick = () => {
    successPage.classList.add("hide");
    formPage.classList.remove("hide");
}

btn.onclick = () => {
    let regex = /\w+@\w+.\w+/gi;
    let inputValue = input.value
    if (inputValue == ""){
        spanMessage.classList.add("show");
        input.classList.add("wrong");
    }
    if (inputValue.match(regex)){
        emailSpan.innerHTML = inputValue;
        successPage.classList.remove("hide");
        formPage.classList.add("hide");
        return;
    }
    spanMessage.classList.add("show");
    input.classList.add("wrong");

}