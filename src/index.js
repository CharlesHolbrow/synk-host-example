import { Connection } from 'synk-js';
import Logger from './Logger.js';

window.Logger = Logger;
window.Connection = Connection;

window.conn = new Connection('ws://localhost:3000/ws');
window.l = new Logger();
window.l.log('logger', 'is', 'working');

console.log('synk-host!!');
