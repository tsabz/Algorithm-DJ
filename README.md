PROJECT STATUS  
first ever project.. looking to further my skills and continue this concept for my website. 


# algorithm-DJ-Part-1

#Motivation for this app
What is this app?

I making an app about Ariana Grande's song Needy and my remix to it.  
My motivation behind this is to start building a portfolio that showcases
my DEV projects and audio production together.  
*******************
Features
sticky nav hightling my social media and streaming sites of where you can find my music,
the original track called needy by Ariana Grande and the my remix to it
then created some buttons to hear some of the samples I used to create the song. 
**********
When clicking on the link to the project, you are clicking on an authorize link that will redirect you to my page. Why?
I am using spotify's API, which will need the user to authorize their account before they are able to check out the data pulled from the site, which in this case is Ariana Grande's - Needy track.  - Think about it this way..Are you able to use spotify if you do not sign in? Check out the link below for an example of the page. 

https://github.com/tsabz/Algorthim-DJ-Part-1-/issues/1#issue-621161995 

This gave me a lot of difficulty as a beginner DEV and this being my first project, I had not yet heard of creating an additional HTML and JS file just for the authorize page.  I was stuck on this issue for a bit, without creating those files, my page kept refereshing itself , because the URL redirect was the page itself. Let's take a look at the url below:
https://accounts.spotify.com/en/authorize?client_id=a50e8af7f71f499f874125d893e94b60&response_type=token&redirect_uri=https:%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F 
When creating a spoitfy DEV acount I was given a client ID and a secret client ID and was also asked to input my Recirect URL page , the endpoint being my main site. 
The key Value pairs in the URL:  
https://accounts.spotify.com/en/authorize? - the link to the authorize spotify page
Client Id = a50e8af7f71f499f874125d893e94b60
Response_Type = token - This token is CRUCIAL to accessing spotify's data, we are retrieving this value once we authorize. 
redirect_uri = https:%2F%2Ftsabz.github.io%2FAlgorthim-DJ-Part-1-%2F - this being my webpage which we will be redirected to once we authorize. 
**************************
Once we have been granted access we are redirected to the webpage that has then give us the token in the URI 
https://github.com/tsabz/Algorthim-DJ-Part-1-/issues/2#issue-621174072

lets take a closer look at this URI
https://tsabz.github.io/Algorthim-DJ-Part-1-/#access_token=BQC1XtNy7kQAyjwuzN97UmvAWQUXOJNZJndj74OB-Inq9zbGK1es_uZLHHEUkk4CNRsOxg67hxzHvhum4F8OI3W61UF32fStdchiHEJSGA7P3ocTa6ozIiM7APAxjLYahDQLmlHndVc&token_type=Bearer&expires_in=3600

Here we have an our https link to our site ... 
https://tsabz.github.io/Algorthim-DJ-Part-1-/ 
#access_token=BQC1XtNy7kQAyjwuzN97UmvAWQUXOJNZJndj74OB-     Inq9zbGK1es_uZLHHEUkk4CNRsOxg67hxzHvhum4F8OI3W61UF32fStdchiHEJSGA7P3ocTa6ozIiM7APAxjLYahDQLmlHndVc - our access token NEEDED 
for our AJAX code, without this we are unable to access spotify's data.  
*******************************
We now been redirected , lets jump into app.js code . 
spotify provides us with their ajax code --- 
  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=needy&type=track', <------- my end point to the track "needy" 
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken <-------------NOTE YOU CANNOT HARD CODE THE TOKEN (learned the hard way)
      },
      success: function(data) {
        console.log('Success');

therefore... 
We must pull the token from the URL itself. I used a code from stackoverflow
https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
In this code , all we are doing is pull the token and splitting off all the extra characters : 
https://tsabz.github.io/Algorthim-DJ-Part-1-/#access_token=BQC1XtNy7kQAyjwuzN97UmvAWQUXOJNZJndj74OB-Inq9zbGK1es_uZLHHEUkk4CNRsOxg67hxzHvhum4F8OI3W61UF32fStdchiHEJSGA7P3ocTa6ozIiM7APAxjLYahDQLmlHndVc&token_type=Bearer&expires_in=3600

Using window.location.search will take the substring of the url in this case:  #access_token=BQC1XtNy7kQAyjwuzN97UmvAWQUXOJNZJndj74OB-Inq9zbGK1es_uZLHHEUkk4CNRsOxg67hxzHvhum4F8OI3W61UF32fStdchiHEJSGA7P3ocTa6ozIiM7APAxjLYahDQLmlHndVc&token_type=Bearer&expires_in=3600

Please refer to app.js file for further notes on get URL code. 

*
*
*
*
*
*
*
*
*
*
*
*
*
*
*


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
