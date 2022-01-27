class Clock {
    constructor() {
       let dateStart = new Date();
       this.hh = dateStart.getHours();
       this.mm = dateStart.getMinutes();
       this.ss = dateStart.getSeconds();
    };

    printTime() {
        console.log(`${this.hh}:${this.mm}:${this.ss}`)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }
};

clock = new Clock();
clock.printTime();