const numCmdButtons = document.querySelectorAll(".num,.cmd");
const input = document.querySelector("input");
const operationArray = [];
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac")

numCmdButtons.forEach((button)=>{
        button.addEventListener("click", function (e){
            operationArray.push(e.target.textContent);
            input.value = operationArray.join("");
        });
});

equals.addEventListener("click", ()=>{
    let result = operate(operationArray[0], operationArray[1], operationArray[2]);
    input.value = result;
    operationArray.length = 0;
    console.log(result);
    if(!isNaN(result)) operationArray.push(result);
    else{console.log("not a number")}
});
ac.addEventListener("click", ()=>{
    input.value = "";
    operationArray.length = 0;

})

function operate (a, operator, b){
    if(operator == "/" && b == "0"){

      return "division by zero";
    }
    
    a = +a;
    b = +b;

    switch(operator){
        case("+"):return a+b;
        case("-"):return a-b;
        case("X"):return a*b;
        case("/"):return (Math.round(a/b*100000000000000))/100000000000000;
        default:{
            console.log("illegal operator");
            return null;
        }
    }
}

// console.log(operate(1,"+",1));