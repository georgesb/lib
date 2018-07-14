function Timer(seconds, x, y) {
  
    this.seconds = seconds;
    this.secondDisplay;
    this.x = x;
    this.y = y;
    this.minutes = 0;
  
    this.display = function() {
        if(this.seconds > 0 )
        {
          this.minutes = int(this.seconds / 60);
          if(this.seconds >= 60)
          {
            this.secondDisplay = this.seconds - (60 * this.minutes);
          }
          else
         {
           	this.secondDisplay  = this.seconds;
          }
            
          text(this.minutes + ' : ' + formatNumber(this.secondDisplay), this.x, this.y);
        }
    }

    this.countdown = function() {
        if (frameCount % 60 == 0 && this.seconds > 0) {
            this.seconds--;
        }
    }
    
    this.gameOver = function() {
        return this.seconds == 0;
    }
}

function formatNumber(number) {
     return (number < 10 ? '0' : '') + number;
}
