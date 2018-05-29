


// Enemies our player must avoid

class Enemy {
    constructor (x=340, h=60, w=60) {
        this.x = x;
        this.y = yPositions[Math.floor(Math.random() * yPositions.length)];;
        this.w = w;
        this.h = h;
        this.speed = Math.random() * (500 - 100) + 100;
        this.sprite = 'images/enemy-bug.png';
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update(dt){
        this.x += this.speed * dt;
        if (this.x >=400) { this.x = -10 };
        if (player.x < this.x + this.w  && player.x + player.w  > this.x && // Explanation from http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
            player.y < this.y + this.h && player.y + player.h > this.y)
            {
                gameReset();
            }    

    }
}

let yPositions = [45, 128, 211]

class Player {
        constructor(x=2, y=1, speed=423, w=60, h=60) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.speed = (100 + Math.floor(Math.random())) * 10;
          this.sprite = 'images/char-boy.png';
        }

        render() { // Draw the player on the screen, required method for game
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
            if (this.y <= -10) { 
                //this.y= this.y % 83;
                gameReset();
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
allEnemies = [];

function gameReset() {
    allEnemies = [];
    player.reset();
    allEnemies.push(for(var i=0;i<3;i++){
    var enemy=new Enemy(-300,40+i*90);
});
}


gameReset();

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
