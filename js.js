const keepReading = () => {
  alert('keep reading');
};

const comment = () => {
  alert('keep comment');
};

const like = () => {
  alert('keep liking');
};

const sharing = () => {
  setVisible(true);
};

const nextPage = () => {
  alert(' next page');
};

const thanks = () => {
  setVisible(false);
  alert('thank you for sharing');
};

const disablesharing = () => {};

const setVisible = (isVisible) => {
  const elm = document.getElementById('background-black');
  if (isVisible) {
    elm.classList.remove('hide');
    elm.classList.add('show');
  } else {
    elm.classList.remove('show');
    elm.classList.add('hide');
  }
};
