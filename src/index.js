import { Conn } from 'synk-js';
import Logger from './Logger.js';

const t = new Conn();
const l = new Logger();
l.log('logger', 'is', 'working');

console.log('synk-host!!');
