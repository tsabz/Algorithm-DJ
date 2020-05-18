# algorithm-DJ-Part-1
What is this app?

I making an app about Ariana Grande's song Needy and my remix to it.  

 









****************(authorization/token info)*****************************
a50e8af7f71f499f874125d893e94b60

adf4750881f940bb8412302969601d88



<iframe src="https://open.spotify.com/embed/playlist/5RA4pHTB7JQ7ChpZf87Bjy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>



GET https://api.spotify.com/v1/me


Implicit Grant Flow Authorize End point
"https://accounts.spotify.com/authorize?client_id=a50e8af7f71f499f874125d893e94b60&response_type=token&redirect_uri=https%3A%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F";

Old Authorization End Point
"https://accounts.spotify.com/authorize?client_id=a50e8af7f71f499f874125d893e94b60&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F"




Here's a complete code example of how to implement Implicit Grant flow:

// Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const redirectUri = 'http://localhost:8888';
const scopes = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
}













https://accounts.spotify.com/authorize?client_id=a50e8af7f71f499f874125d893e94b60&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F


a50e8af7f71f499f874125d893e94b60:adf4750881f940bb8412302969601d88


curl -H "Authorization: Basic YTUwZThhZjdmNzFmNDk5Zjg3NDEyNWQ4OTNlOTRiNjA6YWRmNDc1MDg4MWY5NDBiYjg0MTIzMDI5Njk2MDFkODg=" -d grant_type=authorization_code -d code=MQCbtKe...44KN -d redirect_uri=https%3A%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F https://accounts.spotify.com/api/token



Simple api calll
curl -X GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Authorization: Bearer AQBuJ_cNsPam2TZc1UtOTvtlkm1uIYD_JVeXNqgzrforU-UgdW9NWc6fG6xH6EMuA-o-ec3h_5JH1QUipnXvgyjSjed6hjuEoIfHFsgBrRwA2_8p99cdIciWsIMC1RvLlw5qrksHzu_yk34f5BAlafaskfWH3UMa0VqpwIlP6Od8Hfu3StIEsiYy44tWk97Qf6etV4BZga5cBGksH62IhtYO_Q"
