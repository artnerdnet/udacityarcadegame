


// Enemies our player must avoid

class Enemy {
    constructor (x=340, y=45, speed, h=60, w=60) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update(dt){
        this.speed = 300;
        this.x += this.speed * dt;
        if (this.x >=400) { this.x = -10 };
        if (player.x < this.x + this.w  && player.x + player.w  > this.x &&
            player.y < this.y + this.h && player.y + player.h > this.y)
            {player.reset()}

    }
}

let enemy = new Enemy;

let allEnemies = [];

allEnemies.push(enemy);

/*
class Enemy {
        constructor(x=1, y=2, speed) {
          this.x = x;
          this.y = y;
          this.speed = speed;
          this.sprite = 'images/enemy-bug.png';

        }
        render() { // Draw the enemy on the screen, required method for game
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        update(dt) {
            this.speed = 100;
            this.x += this.speed * dt;
            if (this.x >= 400) {
                this.x= 400;
            }
           // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        } 
      }
*/








class Player {
        constructor(x=2, y=1, speed=423, w=60, h=60) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.speed = speed;
          this.sprite = 'images/char-boy.png';
        }

        render() { // Draw the player on the screen, required method for game
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }

        update(dt) {
            
           // dt = this.x * this.speed;
           // this.speed = dt * this.x; // not working, how to calculate?
           // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        } 

        reset() {
            this.x = 0;
            this.y = 370;
        }

    handleInput(keyPressed) {
        if (keyPressed == 'left') {
            this.x = this.x -= 101; 
            if (this.x <= 0) {
                this.x = 0;
            }
        } else if (keyPressed == 'up') {
            this.y = this.y -= 83;
            if (this.y <= 0) { 
                this.y= this.y % 83;
            }
        } else if (keyPressed == 'right') {
            this.x = this.x += 101;
            if (this.x >= 400) {
                this.x= 400;
            }
        }  else if (keyPressed == 'down') {
            this.y = this.y += 83;
            if (this.y >= 400) {
                this.y= 370;
            }
        }
    }

}



    
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
let player = new Player(0,370);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
