import _ from 'lodash'

function componet() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack'];
  element.innerHTML = _.join(array, ' ')
  return element;
};

document.body.appendChild(componet());