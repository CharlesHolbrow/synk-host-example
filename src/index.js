import './main.css';

import { Connection } from 'synk-js';
import './index.js';

window.Connection = Connection;
window.conn = new Connection('ws://localhost:3000/ws');

console.log('synk-host!!');
