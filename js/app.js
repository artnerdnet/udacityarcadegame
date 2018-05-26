


// Enemies our player must avoid

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
            speed = this.x * dt;
           // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        } 
      }

class Player {
        constructor(x=2, y=1, speed) {
          this.x = x;
          this.y = y;
          this.speed = speed;
          this.sprite = 'images/char-boy.png';
        }

        render() { // Draw the player on the screen, required method for game
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }

        update(dt) {
            
           // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
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
let player = new Player(100,204);
let enemy = new Enemy(200,300); 

allEnemies = []
/* this for the enemies inside the arrays, for reset and for lvl up
allEnemies.push(

)*/ 


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