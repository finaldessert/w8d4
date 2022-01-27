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
    };

    _tick() {
        setTimeout (() => {
            this.printTime()
            if (this.ss < 60) {
                this.ss += 1;
            } else if (this.ss === 60) {
                this.ss = 0;
                this.mm += 1;
                if (this.mm === 60) {
                    this.mm = 0;
                    this.hh += 1;
                    if (this.hh === 24) {
                        this.hh = 1;
                    }
                }
            }
            this._tick()
        }, 1000);
        // 1. Increment the time by one second.
        // 2. Call printTime.
      };
};


clock = new Clock();
clock._tick();