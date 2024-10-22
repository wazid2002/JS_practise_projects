const stars=document.querySelectorAll('.fa-star-o');
const selectedRatingValueText=document.querySelector('.Selected-rating');
let currentTotalSelectedStars=-1;

stars.forEach((starItem,index)=>{
    starItem.dataset.rating=index +1;
    starItem.addEventListener('mouseover',handleMouseOver);
    starItem.addEventListener('click',handleClick);
    starItem.addEventListener('mouseleave',handleMouseLeave);
})  

function handleMouseOver(event){
    currentTotalSelectedStars=event.target.dataset.rating;
    if(!currentTotalSelectedStars) return
    else handleUpdateRatingState(currentTotalSelectedStars)


}

function handleUpdateRatingState(getCurrentratingValue){
    for(let i=0;i<5;i++){
        if(i<getCurrentratingValue){
            stars[i].classList.replace("fa-star-o","fa-star");
        }
        else{
            stars[i].classList.replace("fa-star","fa-star-o");
        }
    }
}

function handleClick(event) {
    const currentTotalSelectedStars=event.target.dataset.rating;
    handleUpdateRatingState(currentTotalSelectedStars);
    selectedRatingValueText.textContent=currentTotalSelectedStars;

    
}

function handleMouseLeave() {
    handleUpdateRatingState(currentTotalSelectedStars);

    
}


