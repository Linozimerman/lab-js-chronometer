class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
      this.intervalId = setInterval(() => { 
      this.currentTime ++;

      if(printTimeCallback){
        printTimeCallback()
      }
    },1000)
  }
  

  getMinutes() {
    // ... your code goes here
    let minutes = parseInt(Number(this.currentTime/60))
    return minutes;
    
  }

  getSeconds() {
    // ... your code goes here
    let seconds = parseInt(Number(this.currentTime % 60))
    return seconds;    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const numberAsString = value.toString();
    const length = numberAsString.length;

    if(length === 1 ){
      let two = "0" + numberAsString
      
    return two;
    } else { 
      return numberAsString;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const splitNumbers = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    
    return splitNumbers;
  }
}
