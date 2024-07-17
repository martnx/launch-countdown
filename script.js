
const output = document.querySelector('.output');
const para = document.createElement('p');
output.appendChild(para);

for(let i = 10; i >= 0;i--){
    console.log(i);
    
    const para = document.createElement('p')
    if(i == 10){
        para.textContent += "Countdown 10";
    }else{
        para.textContent += `\n${i}\n`;
        
    }
    if(i == 0){
        para.textContent += "Blast off!";
    }
    output.appendChild(para);
    console.log("the appendChild is running here");
}

console.log("test");



