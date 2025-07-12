const secondHand=document.querySelector('.second-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');

function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    const secondsDegree=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;

    const mins=now.getMinutes();
    const minuteDegree=((mins/60)*360)+((seconds/60)*6)+90;
    minHand.style.transform=`rotate(${minuteDegree}deg)`;

    const hour= now.getHours();
    const hourDegree=((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;
    
}
setInterval(setDate, 1000);

setDate();