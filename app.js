$(document).ready(function(){
  console.log('access v.6');

  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  const accessToken = getUrlParameter('access_token');
  console.log(accessToken);

  // $.ajax({
  //     url: 'https://api.spotify.com/v1/search?q=macklemore&type=artist',
  //     type: 'GET',
  //     headers: {
  //         'Authorization' : 'Bearer ' + accessToken
  //     },
  //     success: function(data) {
  //       console.log('Success');
  //       console.log(data);
  //     }
  // });

})
