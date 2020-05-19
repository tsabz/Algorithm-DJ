$(() => {
  console.log('access v.41');////my browser does not refresh every time, had to keep a tracker of which version gets uploaded.
  // Audio tracks defined globally

  $('#drums').click(function() {
    const audioDrums = new Audio("soundz/SONNY_D_percussion_loop_04_133.wav");
    audioDrums.play();
  });

  $('#vocals').click(function() {
    const audioVocals = new Audio("soundz/needy (Studio Acapella).mp3");
    audioVocals.play();
  });

  $('#shakers').click(function() {
    const audioShakers = new Audio("soundz/OLIVER_percussion_loop_shaker_and_tambourine_102.wav");
    audioShakers.play();
  });

  $('#kick').click(function() {
    const audioKick = new Audio("soundz/SONNY_D_kick_07.wav");
    audioKick.play();
  });

/////https://stackoverflow.com/questions/2988050/html5-audio-player-jquery-toggle-click-play-pause

  const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),
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
  };  /////////https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
  /////https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters .... had outside help with this issue.

  const accessToken = getUrlParameter('access_token');
  console.log(`accessToken ${accessToken}`);

  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=needy&type=track',
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log('Success');

        // Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(`id ${id}`);
        // Add id value to the src attribute of thespotify  iframe
        // construct the following string https://open.spotify.com/track/ + id
        let src_str = `https://open.spotify.com/embed/track/${id}`;
        console.log(`src_str ${src_str}`);
        let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        let parent_div = $('#parent-div');
        parent_div.append(iframe);
        // $("#needy").attr("src", src_str);
      }
  });


})
