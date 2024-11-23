const numCmdButtons = document.querySelectorAll(".num,.cmd");
const input = document.querySelector("input");
const operationArray = [];

numCmdButtons.forEach((button)=>{
        button.addEventListener("click", function (e){
            operationArray.push(e.target.textContent);
            input.value = operationArray.join("");
        });
});




function operate (a, operator, b){
    
    switch(operator){
        case("+"):return a+b;
        case("-"):return a-b;
        case("*"):return a*b;
        case("/"):return a/b;
        default:{
            console.log("illegal operator");
            return null;
        }
    }
}

// console.log(operate(1,"+",1));