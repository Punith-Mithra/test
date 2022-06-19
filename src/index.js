import _ from 'lodash';
import style from './styles.css';

function component() {
  const element = document.createElement('img');

  // Lodash, now imported by this script
  element.src = './images/1.jpg';
  element.style = { width: '100px' };

  return element;
}

document.body.appendChild(component());
