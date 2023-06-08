// Function to handle the search button click
function handleSearch() {
    var input = document.querySelector('.search-input');
    var movieName = input.value;

    // Generate the YouTube link with the movie name
    var youtubeLink = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(movieName);

    // Create a movie link element and append it to the movie results div
    var movieResults = document.getElementById('movie-results');
    var movieLink = document.createElement('a');
    movieLink.href = youtubeLink;
    movieLink.className = 'movie-link';
    movieLink.target = '_blank';
    movieLink.innerText = movieName;
    movieResults.appendChild(movieLink);

    // Clear the search input
    input.value = '';
}

// Attach event listener to the search button
var searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', handleSearch);

// Add event listener for movie link clicks
var movieResults = document.getElementById('movie-results');
movieResults.addEventListener('click', function(event) {
    if (event.target.matches('.movie-link')) {
        event.preventDefault();

        // Create an overlay div to cover the YouTube logo
        var overlay = document.createElement('div');
        overlay.className = 'youtube-overlay';

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Redirect the user to the YouTube link after a short delay
        var youtubeLink = event.target.href;
        setTimeout(function() {
            window.location.href = youtubeLink;
        }, 1000);
    }
});