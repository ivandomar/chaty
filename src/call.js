const domain = 'meet.jit.si';
const options = {
  roomName: 'chaty-room',
  width: 700,
  height: 500,
};

const setFrame = (element) => {
  options.parentNode = element;
};

const start = () => {
  return new JitsiMeetExternalAPI(domain, options);
};

export default {
  setFrame,
  start,
};
