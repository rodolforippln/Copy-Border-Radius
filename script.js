var boxBorder = document.querySelector('.box__border');
        
var sliderLeft = document.getElementById("slider-left");
var sliderRight = document.getElementById("slider-right");
var sliderTop = document.getElementById("slider-top");        
var sliderBottom = document.getElementById("slider-bottom");

var buttonCopy = document.querySelector('.button-copy');
var resultCopy = document.getElementById("result-copy");
var tooltip = document.querySelector('.tooltip');

tooltip.style.display = 'none';

boxBorder.style.borderRadius = '24% 76% 10% 90% / 40% 10% 90% 60%';

sliderTop.value = 24;
sliderBottom.value = 10;
sliderLeft.value = 40;
sliderRight.value = 10;  

sliderLeft.oninput = customBorderRadius;
sliderRight.oninput = customBorderRadius;
sliderTop.oninput = customBorderRadius;
sliderBottom.oninput = customBorderRadius;

function customBorderRadius() {            
    result = `
        ${sliderTop.value}% 
        ${100 - sliderTop.value}% 
        ${sliderBottom.value}% 
        ${100 - sliderBottom.value}% / 
        ${sliderLeft.value}% 
        ${sliderRight.value}% 
        ${100 - sliderRight.value}% 
        ${100 - sliderLeft.value}%`;
        resultCopy.innerHTML = result;                
        boxBorder.style.borderRadius = result               
}

buttonCopy.addEventListener('click', function() {
    navigator.clipboard.writeText('border-radius: ' + resultCopy.innerText + ';');
    tooltip.style.display = 'flex';
    tooltip.style.opacity = 1;
    resultCopy.style.backgroundColor = '#dafa9f';
    setTimeout(function() {
        resultCopy.style.backgroundColor = '#e2e1e1'
    }, 200)
    
})
buttonCopy.addEventListener('mouseout', function() {     
    tooltip.style.opacity = 0;             
    setTimeout(function() {
        tooltip.style.display = 'none';
    }, 300)
    
})