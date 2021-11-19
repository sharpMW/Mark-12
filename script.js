const angleA = document.querySelector("#anglea");
const angleB = document.querySelector("#angleb");
const angleC = document.querySelector("#anglec");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#check");
checkButton.addEventListener('click', isTriangle)

function calculateSum(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSum(Number(angleA.value),Number(angleB.value),Number(angleC.value))
    if (sumOfAngles === 180){
    output.innerText = "Yes, it can form a triangle";
     }else {
        output.innerText = "Could not form triangle!";
    }
}