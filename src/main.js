import _ from 'lodash'
// import { Nijou, NAME } from './utilities'
import * as utls from './utilities'
import Lion1 from './utilities'

console.log(utls.Nijou(2));
console.log(utls.NAME);
console.log(Lion1.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());