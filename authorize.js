console.log('authorize');
// Redirect user to authorize with Spotify
console.log('redirecting');
const redirect = "https://accounts.spotify.com/authorize?client_id=a50e8af7f71f499f874125d893e94b60&response_type=token&redirect_uri=https%3A%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F";
window.location.replace(redirect); ///redirect the user to the spotify auth page
console.log('redirect done');
