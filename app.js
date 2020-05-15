console.log('hello');




$.ajax(
  {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {
      "grant_type":    "authorization_code",
      "code":          code,
      "redirect_uri":  'https://google.com',
      "client_secret": adf4750881f940bb8412302969601d88,
      "client_id":     a50e8af7f71f499f874125d893e94b60
    },
    success: function(result) {
      // handle result...
    },
  }
)



// const accessToken = "adf4750881f940bb8412302969601d88";
//
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: 'dark side of the moon',
//             type: 'album'
//         },
//         success: function (response) {
//           console.log('Great');
//         }
//     });



//
// $.ajax({
//     url: 'https://api.spotify.com/v1',
//     type: 'GET',
//     headers: {
//         'Authorization' : 'Bearer ' + accessToken
//     },
//     success: function(data) {
//         console.log('great!');
//         console.log(data);
//     }
// });
