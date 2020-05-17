$(() => {
  console.log('access v.37');////my browser does not refresh every time, had to keep a tracker of which version gets uploaded.



  // $("#btn").on("click", function() {
  //   var audio = $("#audio")[0];
  //   audio.play();
  // });


  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;

      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');

      console.log(`window.location.href ${window.location.href}`);
      console.log(`sURLVariables ${sURLVariables}`);

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          console.log(`sParameterName[0] ${sParameterName[0]}`);
          console.log(`sParam ${sParam}`);
          console.log(`sParameterName[0] === sParam ${sParameterName[0] === sParam}`);
          if (sParameterName[0] === sParam) {
              console.log(`sParameterName[1] ${sParameterName[1]}`);
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  const accessToken = getUrlParameter('access_token');
  console.log(`accessToken ${accessToken}`);

  $.ajax({
      url: 'https://api.spotify.com/v1/search?q=needy&type=track',
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log(' ');
        console.log(' ');
        console.log('================================ SUCCESS ========================');
        console.log('Success');
        console.log(JSON.stringify(data));
        // Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(`id ${id}`);
        // Add id value to the src attribute of thespotify  iframe
        // construct the following string https://open.spotify.com/track/ + id
        let src_str = `https://open.spotify.com/embed/track/${id}`;
        console.log(`src_str ${src_str}`);
        let iframe = `<iframe src=${src_str} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        let parent_div = $('#parent-div');
        parent_div.append(iframe);
        // $("#needy").attr("src", src_str);
      }
  });


})
