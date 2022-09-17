//  to store the input given by user in variable input
const input = document.getElementById("numOfwords");

const container = document.querySelector(".container");


// Function to Generate Word
const generateWord = (n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;++i){
        const random = (Math.random()*25).toFixed(0);

        text+=letters[random];
    }
    return text;
}

//Function to Generate Paragraph
const generatePara = ()=>{

    let numOfWords = Number(input.value);
    const para = document.createElement("p");
    let data = "";
    
    for(let i=0;i<numOfWords;++i){
        const randomNumber = (Math.random()*15).toFixed(0);
        data+=generateWord(randomNumber).toLowerCase();
        data+=" ";
    }

    para.innerText=data;
    para.setAttribute("class", "paras")
    container.append(para);
}
