const randomize = document.querySelector('#randomize');

const classes = {
  title: ['heading-font-1', 'heading-font-2', 'heading-font-3', 'heading-font-4'],
  body: ['body-serif', 'body-sans', 'body-monospace'],
  color: ['color-red', 'color-blue', 'color-green']
};

const random = (array) => array.at(Math.random() * array.length);

const setRandomClasses = () => {
  document.body.className = '';
  
  document.body.classList.add(random(classes.title));
  document.body.classList.add(random(classes.body));
  document.body.classList.add(random(classes.color));
};
  
randomize.addEventListener('click', setRandomClasses);

setRandomClasses();