const text = [
    "Cyber Security Engineer",
    "Ethical Hacker",
    "Web Developer",
    "Student at SSMRV College"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < text[textIndex].length){

        typing.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typing.textContent=text[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        textIndex++;

        if(textIndex>=text.length){

            textIndex=0;

        }

        setTimeout(typeEffect,500);

    }

}

typeEffect();
