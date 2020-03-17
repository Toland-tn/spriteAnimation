function moveDino(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = animation[0].w;
    this.len = animation.length;
    this.speed = speed;

    this.show = function () {
        clear()
        //Find what direction its facing and when sprite is no longer moving keep it facing that direction
        if (facingRight === true) {
            image(animation[0], this.x, this.y)
        }
        if (facingRight === false) {
            image(animationL[0], this.x, this.y)
        }
    }
    this.animate = function () {
        //% is the modulus that finds the "remainder" of how many times a value can fit in the value before the %
        //If the key that is being pressed is 'd' then cycle through multiple images while moving the x right
        if (keyIsDown(68)) {
            clear();
            image(dinoRun[frameCount % dinoRun.length], this.x, this.y);
            this.x += this.speed * 40;
            facingRight = true;
        }
        //If the key that is being pressed is 'a' then cycle through multiple images while moving the x left
        if (keyIsDown(65)) {
            clear();
            image(dinoRunL[frameCount % dinoRunL.length], this.x, this.y);
            this.x -= this.speed * 40;
            facingRight = false;
        }
        //Move the sprite up or down
        if (keyIsDown(83)) {
            clear()
            image(animation[6], this.x, this.y)
            this.y += this.speed * 40;
        }
        if (keyIsDown(87)) {
            clear()
            image(animation[6], this.x, this.y)
            this.y -= this.speed * 40;
        }
    }
}