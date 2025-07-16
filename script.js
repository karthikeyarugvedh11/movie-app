const API_KEY="cb5849f0"
const API_LINK="http://www.omdbapi.com/?t=billa&apikey="
const searchBox=document.querySelector(".movieInput")
const searchButton=document.querySelector(".searchBtn")
async function getMovie(title) {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    const data=await response.json();
    document.querySelector(".title").innerHTML = data.Title;
    document.querySelector(".year").innerHTML = `Year: ${data.Year}`;
    document.querySelector(".actors").innerHTML = `Actors: ${data.Actors}`;
    document.querySelector(".rating").innerHTML = `IMDb Rating: ${data.imdbRating}`;
    document.querySelector(".plot").innerHTML = `Plot: ${data.Plot}`;
    document.querySelector(".poster").src = data.Poster;

}
searchButton.addEventListener("click",()=>{
    getMovie(searchBox.value);})