$(document).ready(() => {
  const domain = 'meet.jit.si';
  const options = {
      roomName: 'JitsiMeetAPIExample',
      width: 700,
      height: 700,
      parentNode: $('#meet')[0]
  };

  const api = new JitsiMeetExternalAPI(domain, options);
});
