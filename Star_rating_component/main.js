const stars=documented.querySelectorAll('.fa-star');
const selectedRatingValueText=document.querySelector('.Selected-rating');

let currentTotalSelectedStars=-1;

stars.forEach((starItem,index)=>{
    starItem.dataset.rating=index +1;
    starItem.addEventListener('mouseover','handleMouseOver')
    starItem.addEventListener('click','handleclick')
})

