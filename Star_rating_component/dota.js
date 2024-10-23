const stars = document.querySelectorAll('.fa-star-o');
const selectedRatingValueText = document.querySelector('.Selected-rating');


stars.forEach((starItem, index) => {
   starItem.dataset.rating = index+1
   starItem.addEventListener('mouseover',handleMouseOver)
})


function handleMouseOver(event){
 let currentTotalSelectedStars = event.target.dataset.rating;
 console.log(currentTotalSelectedStars);
 

 
}