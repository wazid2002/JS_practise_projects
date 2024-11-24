const slider=document.querySelector(".slider");
const dotsContainer=document.querySelector('.dots-container')

async function fetchimages() {
    try{
        const response=await fetch('https://api.unsplash.com/photos/random?client_id=Jd_hDv9F_Zg1WKM7J45pWUI9tt5HkiROo3wpfgksdos&count=5',{
            method:'GET'
        });
        const imageList=await response.json();

        if (imageList && imageList.length > 0) displayImages(imageList);


    }
    catch(error){
        console.log(error);
    } 
}


function displayImages(getImageList){
    slider.innerHTML=getImageList.map(
        (item)=> `
        <div class="slide">
        <img src=${item.urls.full} >
        </div>`
    ).join(" ");

    // dotsContainer.innerHTML= getImageList.map(
    //     (item,index) =>`
    //     <span class="dot" data-slide=${index}></span>`
            
    // ).join(" ");



}

fetchimages();

