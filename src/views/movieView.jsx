export default
function MovieView(props){
    function addToFaveButton(evt){ 
        return props.faveAdderFired()
    }
    function backToSearch(){
        console.log(props.toggleCheck)
        if (props.toggleCheck === true){
            window.location.hash="#/movieresults"}
        else {
            window.location.hash="#/writer"}
   
    }

    return ( 
    <div>
        <img src={props.movieData.Poster}></img>
        <tr>Plot: {props.movieData.Plot}</tr>
        <tr>Writer: {props.movieData.Writer}</tr>
        <tr>Director: {props.movieData.Director}</tr>
        <tr>IMDB rating: {props.movieData.imdbRating}</tr>
        <button class="search-button"disabled={props.isMovieInFaves} onClick={addToFaveButton}>Add to Favourites</button>
        <button class="search-button"onClick={backToSearch}>Back</button>
    </div>
    )
}