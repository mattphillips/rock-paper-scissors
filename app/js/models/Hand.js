function Hand(description, value){
    this.description = description;
    this.value = value;
}

Hand.prototype.getDescription = function() {
    return this.description;
}

Hand.prototype.getValue = function() {
    return this.value;
}