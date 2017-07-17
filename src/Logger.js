export default class Logger {
    constructor() {
        this.data = [];
    }
    log() {
        this.data.push(arguments);
        console.log.apply(console, arguments);
    }
}
