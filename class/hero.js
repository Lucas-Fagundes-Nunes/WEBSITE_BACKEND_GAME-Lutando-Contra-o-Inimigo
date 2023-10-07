class Hero {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.life = 100
    }

    attack() {
        if (this.type['attack'] > 0) {
            return this.type['attack']; 
        } else {
            return false
        }
    }

    power() {
        if (this.type['power'] > 0) {
            return this.type['power']
        } else {
            return false
        }
        
    }

    cure() {
        if (this.type['cure'] > 0) {
            this.life = this.life + this.type['cure']
            return true
        } else {
            return false
        }
    }

    lifeCharacter(value) {
        this.life = this.life - value
        if (this.life <= 0) {
            this.life = 0
        }
        return this.life
    }
}

module.exports = { Hero }