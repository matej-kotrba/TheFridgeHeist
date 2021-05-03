function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Hrac {
    constructor() {
        this.x = 500
        this.y = 500
        this.w = 100
        this.h = 75
        this.t = 0
        this.cooldown = 0
        this.realx = this.x - this.w / 2
        this.realy = this.y - this.h / 2
        this.obrazek = new Image()
        this.obrazek.src = "4dice.png"
    }

    pohyb() {
        this.t++
        this.realx = this.x + this.w / 2
        this.realy = this.y + this.h / 2
        if (this.www && !(this.realy < this.h / 2)) {
            this.y -= 8 * dt;
        }
        if (this.ddd && !(this.realx > this.w / 2 + 1700)) {
            this.x += 8 * dt;
        }
        if (this.sss && !(this.realy > this.h / 2 + 810)) {
            this.y += 8 * dt;
        }
        if (this.aaa && !(this.realx < this.w / 2)) {
            this.x -= 8 * dt;
        }
        if (this.q && this.cooldown <= 0 && this.x - 350 > 0) {
            this.x -= 350
            this.cooldown = 180
        }
        if (this.e && this.cooldown <= 0 && this.x + 350 + this.w < 1800) {
            this.x += 350 
            this.cooldown = 180
        }
        if (this.cooldown > 0) {
            this.cooldown--
        }

        c.drawImage(this.obrazek, this.x, this.y, this.w, this.h)
        c.fillStyle = "green"
        c.beginPath();
        c.arc(1750, 50, 30, 0, this.cooldown / 90 * Math.PI);
        c.fill();
        c.stroke();
    }
}

var pravda = 0

class Lednice {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 100
        this.h = 150
        this.image = new Image()
        this.image.src = "lednice-edited.png"
    }
    lednice() {
        if(player.y > this.y - player.h && player.x < this.x + this.w && player.y < this.y + this.h && player.x > this.x - player.w) {
            pravda = 1
            this.x = player.x - 30
            this.y = player.y - 80
            var uhel = 45
            var x = this.x + this.w / 2
            var y = this.y + this.h / 2
            c.save();
            c.translate(x, y);
            c.rotate((90 - uhel) * Math.PI / 180);
            c.translate(0 - x, 0 - y);
            c.save();
            c.globalAlpha = 1;
            c.drawImage(this.image, this.x, this.y, this.w, this.h);
            c.restore();
            c.restore();
        }
        else {
        c.drawImage(this.image, this.x, this.y, this.w, this.h);
        pravda = 0
        
        }
    }
}

class Lokace {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.w = 120
        this.h = 150
        this.image = new Image()
        this.image.src = "dum.png" 
    }
    spawnLokace() {
        if(player.y > this.y - player.h && player.x < this.x + this.w && player.y < this.y + this.h && player.x > this.x - player.w && pravda == 1) {
            pravda = 0
            lednicky.splice(lednicky.indexOf(this), 1)
            extraction.splice(extraction.indexOf(this), 1)
            skore++
        }
        
        c.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

class Mrkev {
    constructor(x, y, i) {
        this.x = x
        this.y = y
        this.w = 150
        this.h = 25
        this.i = i - 0.5 * -2
        this.image = new Image()
        this.image.src = "mrkev.png"
        this.image1 = new Image()
        this.image1.src = "mrkev3.png"
    } 
    mrkev() {
        
        if (this.i == 1) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
            this.x += 7
        }
        if (this.i == 2) {
            c.drawImage(this.image1, this.x, this.y, this.w, this.h)
            this.x -= 7 
        }
        if(player.y > this.y - player.h && player.x < this.x + this.w && player.y < this.y + this.h && player.x > this.x - player.w) {
            zivoty--
        mrkve.splice(mrkve.indexOf(this), 1)
        }
    }
}

class Mrkev1 {
    constructor(x, y, k) {
        this.x = x
        this.y = y
        this.w = 25
        this.h = 150
        this.k = k - 0.5 * -2
        this.image = new Image()
        this.image.src = "mrkev1.png"
        this.image1 = new Image()
        this.image1.src = "mrkev2.png"
    } 
    mrkev() {
        
        if (this.k == 1) {
            c.drawImage(this.image, this.x, this.y, this.w, this.h)
            this.y += 7 
        }
        if (this.k == 2) {
            c.drawImage(this.image1, this.x, this.y, this.w, this.h)
            this.y -= 7 
        }
        if(player.y > this.y - player.h && player.x < this.x + this.w && player.y < this.y + this.h && player.x > this.x - player.w) {
            zivoty--
            mrkve.splice(mrkve.indexOf(this), 1)
        }
       
    }
}

var skore = 0
var zivoty = 3
var mrkve = []
var lednicky = []
var extraction = []
var player = new Hrac
var time = 0
var dt = 0 

function main(timestamp) {
    dt = (timestamp - time) / (1000 / 60)
    time = timestamp
    c.fillStyle = "rgba(247, 247, 247, 0.8)"
    c.fillRect(0, 0, 1800, 880)
    c.font = "20px Arial"
    c.fillStyle = "black"   
    c.fillText("Fridges stolen: " + skore, 1000, 20)  
    c.fillText("Fat storage left: " + zivoty, 800, 20)
    if (lednicky == 0) {
    lednicky.push(new Lednice(Math.random() * 1600 + 100, Math.random() * 700 + 100))
    }
    for(var i = 0; i < lednicky.length; i++) {
        lednicky[i].lednice()
    }
    if (pravda == 1 && extraction == 0) {
        extraction.push(new Lokace(Math.random() * 1600 + 100, Math.random() * 700 + 100))
        }
        for(var i = 0; i < extraction.length; i++) {
            extraction[i].spawnLokace()
        }
    if(player.t % 60 == 0) {
        var i = getRandomInt(0,1)
        var k = getRandomInt(0,1)
        mrkve.push(new Mrkev(i * 2100 - 150, getRandomInt(1,4) * 880 / 5, i))
        mrkve.push(new Mrkev1(getRandomInt(1,8) * 1800 / 9, k * 1180 - 150, k))
         }    
    for(var i = 0; i < mrkve.length; i++) {
        mrkve[i].mrkev()
    }
    if (zivoty <= 0) {
        window.alert('GAME OVER - 4dice zhubnul')
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
    }
    player.pohyb()
    window.requestAnimationFrame(main)
}
window.requestAnimationFrame(main)