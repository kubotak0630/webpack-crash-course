import _ from 'lodash'
import { Nijou } from './utilities'

console.log(Nijou(2));

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());