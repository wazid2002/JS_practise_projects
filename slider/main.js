const slider=document.querySelector(".slider");
const dotsContainer=document.querySelector('.dots-container')

async function fetchimages() {
    try{
        const response=await fetch('https://api.unsplash.com/photos/random?client_id=Jd_hDv9F_Zg1WKM7J45pWUI9tt5HkiROo3wpfgksdos&count=5',{
            method:'GET'
        });
        const imageList=await response.json();
        console.log("API Called");
        
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

    dotsContainer.innerHTML= getImageList.map(
        (item,index) =>`
        <span class="dot ${index === 0 ? 'active': " "}" data-slide=${index}></span>`
            
    ).join(" ");



}

fetchimages();



setTimeout(()=>{


    const slides=document.querySelectorAll('.slide');
    const prevbtn=document.querySelector('.prev')
    const nextbtn=document.querySelector('.next');

    let currentSlide=0;

    function activeDot(slide){
        document.querySelectorAll('.dot').forEach(dotItem=> dotItem.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');


    }

    function changeCurrentSlide(currentSlide){
        slides.forEach((index,slideItem)=>
            (slideItem.style.transform = `translateX(${100*(index-currentSlide)}%)`)
        );
    }

    changeCurrentSlide(currentSlide)

    nextbtn.addEventListener('click',()=>{
        currentSlide++

        if(slides.length -1 < currentSlide){
            currentSlide = 0
        }

        activeDot(currentSlide);

    })

    prevbtn.addEventListener('click',()=>{
        currentSlide--

        if(0>= currentSlide){
            currentSlide = 0;
        }

        activeDot(currentSlide);


    })

    dotsContainer.addEventListener('click',()=>{

    })
}

,1000)

