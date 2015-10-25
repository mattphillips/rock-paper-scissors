function Player(name, hand){
    this.name = name;
    this.hand = hand;
}

Player.prototype.getName = function() {
    return this.name;
}

Player.prototype.getHand = function() {
    return this.hand;
}