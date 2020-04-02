import call from './src/call';

$(document).ready(() => {

  let myCall = null;

  $('button#startCall').click(() => {

    const frame = $('#frame')[0];

    call.setFrame(frame);

    myCall = call.start();

  });

  $('button#seeCall').click(() => {

    console.log(myCall);

  });

});
