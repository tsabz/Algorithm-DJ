$(() => {
  console.log('access v.45');////my browser does not refresh every time, had to keep a tracker of which version gets uploaded.


  // Audio tracks defined globally
  const audioDrums = new Audio("soundz/SONNY_D_percussion_loop_04_133.wav");
  const audioVocals = new Audio("soundz/needy (Studio Acapella).mp3");
  const audioShakers = new Audio("soundz/OLIVER_percussion_loop_shaker_and_tambourine_102.wav");
  const audioKick = new Audio("soundz/SONNY_D_kick_07.wav");
  let audioDrumsCount = 0 // counter
  let audioVocalsCount = 0 //counter

  $('#drums').click(function() {
    audioDrumsCount++ ///adds to the counter
    if(audioDrumsCount % 2 !== 0) { ///if the click is not even or divisible by two
      audioDrums.play(); ///play the song
  } else { // all else - which would be odd
    audioDrums.pause(); //pause
  }
  });

  $('#vocals').click(function() {
    audioVocalsCount++
    if(audioVocalsCount % 2 !== 0){
      audioVocals.play();
    } else {
      audioVocals.pause();
    }
  });

  $('#shakers').click(function() {
    audioShakers.play();
  });

  $('#kick').click(function() {
    audioKick.play();
  });
/////https://stackoverflow.com/questions/2988050/html5-audio-player-jquery-toggle-click-play-pause

  const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');

      console.log(`window.location.href ${window.location.href}`);
      console.log(`sURLVariables ${sURLVariables}`);
      ///sURLVariables access_token=BQDrSKfcWtBS7Jf_I3-NwkyKddJu2vRcm4KmmM15kBgVM0lwPepmh6qy7lQ1N8Ij1HRdbmXA3mqkfiaVaIFOogN93JG9urXQcPrMuP2MLiKC0EP-M7SJFQtAR71M339hHc1Rpy1gUCQ,token_type=Bearer,expires_in=3600

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          console.log(`sParameterName[0] ${sParameterName[0]}`); ///sParameterName[0] access_token
          console.log(`sParam ${sParam}`); ////sParam access_token
          console.log(`sParameterName[0] === sParam ${sParameterName[0] === sParam}`); ////sParameterName[0] === sParam true
          if (sParameterName[0] === sParam) {
              console.log(`sParameterName[1] ${sParameterName[1]}`); ////sParameterName[1] BQDrSKfcWtBS7Jf_I3-NwkyKddJu2vRcm4KmmM15kBgVM0lwPepmh6qy7lQ1N8Ij1HRdbmXA3mqkfiaVaIFOogN93JG9urXQcPrMuP2MLiKC0EP-M7SJFQtAR71M339hHc1Rpy1gUCQ <------ console logging the token number itself
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };  /////////https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
  /////https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  ////https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js

  const accessToken = getUrlParameter('access_token'); ///accessToken BQDrSKfcWtBS7Jf_I3-NwkyKddJu2vRcm4KmmM15kBgVM0lwPepmh6qy7lQ1N8Ij1HRdbmXA3mqkfiaVaIFOogN93JG9urXQcPrMuP2MLiKC0EP-M7SJFQtAR71M339hHc1Rpy1gUCQ
  console.log(`accessToken ${accessToken}`);

  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=needy&type=track',
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log('Success'); ////log success if the token goes through

        // Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
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
