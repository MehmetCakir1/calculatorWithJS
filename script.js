let firstScreen=document.querySelector(".firstScreen")
let secondScreen=document.querySelector(".secondScreen")
let buttons=document.querySelector(".buttons");


    buttons.addEventListener("click",(e)=>{
        if(e.target.classList.contains("buttons")){
            null
        }else{
            if(e.target.classList.contains("ac")){
                e.target.closest(".container").querySelector(".firstScreen").innerText="";
                e.target.closest(".container").querySelector(".secondScreen").innerText="";
            }
            else if(e.target.classList.contains("num")){
                if(secondScreen.innerText==0 && secondScreen.innerText.match(/\./)==null){
                    secondScreen.innerHTML=e.target.innerText;
                }else{
                    secondScreen.innerHTML+=e.target.innerText;
                }
                
            }
            else if(e.target.classList.contains("dot")){
                if(secondScreen.innerText && secondScreen.innerText.match(/\./)==null && secondScreen.innerText.length<=5){
                    secondScreen.innerText+=e.target.innerText;
                }
            }
            else if(e.target.classList.contains("operator")){
               if(firstScreen.innerText.length==0 && secondScreen.innerText && secondScreen.innerText.match(/[\.]$/)==null){
                    secondScreen.innerText+=e.target.innerText;
                    firstScreen.innerText=secondScreen.innerText;
                    secondScreen.innerText="";
                }
                else if(firstScreen.innerText && secondScreen.innerText.length==0){
                    firstScreen.innerText=firstScreen.innerText.replace(firstScreen.innerText[firstScreen.innerText.length-1],e.target.innerText)
                }
                else if(firstScreen.innerText && secondScreen.innerText && secondScreen.innerText.endsWith(".")==false){
                    operationSecond();
                    firstScreen.innerText+=e.target.innerText;
                }
            }
            else if(e.target.classList.contains("equal")){
                if(secondScreen.innerText && firstScreen.innerText && secondScreen.innerText.match(/[\.]$/)==null){
                    operation()
                }
                
            }
            else if(e.target.classList.contains("plusminus")){
                if(secondScreen.innerText!=0){
                    secondScreen.innerText= "-1" * secondScreen.innerText;
                }
            }
            else if(e.target.classList.contains("percent")){
            if(firstScreen.innerText=="" && secondScreen.innerText.match(/[.]$/)==null){
                secondScreen.innerText=Number(secondScreen.innerText)/100;
            }
                
            }
        }
    
})

function operation(){
    switch(firstScreen.innerText[firstScreen.innerText.length-1]){
        case "+": secondScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1))+Number(secondScreen.innerText)).toFixed(4)); 
        firstScreen.innerText="";
        break;
        case "-":secondScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) - Number(secondScreen.innerText)).toFixed(4));
        firstScreen.innerText="";
        break;
        case "x":secondScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) * Number(secondScreen.innerText)).toFixed(4));
        firstScreen.innerText="";
        break;
        case "/": secondScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) / Number(secondScreen.innerText)).toFixed(4));
        firstScreen.innerText="";
        break;
        default: break
    }

}
function operationSecond(){
    switch(firstScreen.innerText[firstScreen.innerText.length-1]){
        case "+": firstScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1))+Number(secondScreen.innerText)).toFixed(4));
        secondScreen.innerText="";
        break;
        case "-":firstScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) - Number(secondScreen.innerText)).toFixed(4));
        secondScreen.innerText="";
        break;
        case "x":firstScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) * Number(secondScreen.innerText)).toFixed(4));
        secondScreen.innerText="";
        break;
        case "/": firstScreen.innerText=Number((Number(firstScreen.innerText.slice(0,firstScreen.innerText.length-1)) / Number(secondScreen.innerText)).toFixed(4));
        secondScreen.innerText="";
        break;
        default: break
    }
}
