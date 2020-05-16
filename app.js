console.log('hello');

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "genius.p.rapidapi.com",
// 		"x-rapidapi-key": "2a79a99423mshe3dc790583fb944p142f91jsn7ee73bdf4fab"
// 	}
// }
//
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


// var data = {
//   'A' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'S' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'D' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'F' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'G' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'H' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'},
//   'J' : {name: 'clap', sound: 'soundz/SONNY_D_percussion_loop_04_133.wav'}
// }
//
// var drumkit = document.getElementById('drumkit');
//
// const construct = () => {
//   for (var key in data) {
//     var drumEl = document.createElement('div');
//     drumEl.classList.add('drum');
//
//     var h2 = document.createElement('h2');
//     h2.textContent = key;
//
//     var span = document.createElement('span');
//     span.textContent = data[key].name;
//
//     drumEl.appendChild(h2);
//     // drumEl.appendChild(span);
//     drumkit.appendChild(drumEl);
//
//     data[key].el = drumEl
//
//   }
// };
//
// construct();





// $.ajax(
//   {
//     method: "POST",
//     url: "https://accounts.spotify.com/api/token",
//     data: {
//       "grant_type":    "authorization_code",
//       "code":          code,
//       "redirect_uri":  'https://google.com',
//       "client_secret": adf4750881f940bb8412302969601d88,
//       "client_id":     a50e8af7f71f499f874125d893e94b60
//     },
//     success: function(result) {
//       // handle result...
//     },
//   }
// )



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




// $.ajax({
//     url: 'https://binaryjazz.us/wp-json/genrenator/v1/genre/',
//     type: 'GET',
//     success: function(data) {
//             console.log(data)
//         }
//
// })
