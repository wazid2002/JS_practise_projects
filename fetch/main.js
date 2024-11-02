async function getmeme(){
    try {
        // Fetch meme with the keyword "rocket"
        let response = await fetch("https://api.humorapi.com/memes/random?keywords=rocket&api-key=fb545a884ed5458e882e360926b97b7c");
        let memeData = await response.json();

        // Log the meme URL
        console.log("Meme URL:", memeData.url);

        // Set the meme image URL to the video or image element
        let clip = document.getElementById("videoclip");
        if (clip) {
            clip.setAttribute("src", memeData.url);
        } else {
            console.warn("Element with ID 'videoclip' not found.");
        }
    } catch (error) {
        console.error("Error fetching meme:", error);
    }

}


let get=document.getElementById('get');
async function getjokes() {
    let response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    let jokeData = await response.json(); 
    let joke = jokeData.joke;
    get.innerHTML=joke 

    console.log(joke); 
}
