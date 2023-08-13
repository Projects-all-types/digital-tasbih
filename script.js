const subhanAllahDisplay= document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn= document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn= document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay= document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn= document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn= document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay= document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn= document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn= document.getElementById('allahAkberDecrimentBtn');

const resetBtn= document.getElementById('resetBtn');


let suvanAllahInitialValue =0;
let alhamdulliahAllahInitialValue =0;
let allahHuAkbarInitialValue =0;

subhanAllahIncrimentBtn.addEventListener('click',function(){
  
    if(suvanAllahInitialValue===33){
        return alert('Subhan Allah Complete. Please Fillup anoter one')
    }
      
    suvanAllahInitialValue +=1;
    subhanAllahDisplay.innerText = suvanAllahInitialValue;

})

subhanAllahDecrimentBtn.addEventListener('click', function(){
 
      if(suvanAllahInitialValue===0){
        return alert('You can not added negetive value..')
      }

    suvanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = suvanAllahInitialValue;
})

alhamdulillahIncrimentBtn.addEventListener('click', function(){

    if(alhamdulliahAllahInitialValue===33){
        return alert('Alhamdulilah Complete. Please Fillup anoter one')
    }
    alhamdulliahAllahInitialValue += 1; 
    alhamdulillahDisplay.innerText = alhamdulliahAllahInitialValue;
})

alhamdulillahDecrimentBtn.addEventListener('click',function(){

    if(alhamdulliahAllahInitialValue===0){
        return alert('You can not added negetive value..') 
    }
    alhamdulliahAllahInitialValue -= 1; 
    alhamdulillahDisplay.innerText = alhamdulliahAllahInitialValue;
})


allahAkberIncrimentBtn.addEventListener('click', function(){
    if(allahHuAkbarInitialValue===33){
        return alert('Allahuakber Complete. Please Fillup anoter one') 
    }

    allahHuAkbarInitialValue +=1;
    allahAkberDisplay.innerText = allahHuAkbarInitialValue;
})

allahAkberDecrimentBtn.addEventListener('click', function(){
    if(alhamdulliahAllahInitialValue===0){
        return alert('You can not added negetive value..')
    }
    allahHuAkbarInitialValue -=1;
    allahAkberDisplay.innerText= allahHuAkbarInitialValue;
})

resetBtn.addEventListener('click', function(){
    
    allahAkberDisplay.innerText=0;
    allahHuAkbarInitialValue = 0;

    subhanAllahDisplay.innerText = 0;
    suvanAllahInitialValue = 0;

    alhamdulillahDisplay.innerText=0;
    alhamdulliahAllahInitialValue=0;
})