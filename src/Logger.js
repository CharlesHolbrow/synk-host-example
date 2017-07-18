import Kefir from 'kefir';

export default class Logger {
    constructor() {
        this.data = [];
    }
    log() {
        this.data.push(arguments);
        console.log.apply(console, arguments);
    }
    silly(){
        Kefir.sequentially(100, [1, 2, 3, 4, 5, 88, 99]).log();
    }
}
