const randomize = document.querySelector('#randomize');

const classes = {
  title: ['heading-font-1', 'heading-font-2', 'heading-font-3', 'heading-font-4', 'heading-font-5'],
  body: ['body-font-1', 'body-font-2', 'body-font-3', 'body-font-4'],
  color: ['background-gradient-1', 'background-gradient-2', 'background-gradient-3', 'background-gradient-4', 'background-gradient-5']
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