var HoneyMakerBee = function() {
  Grub.call(this);
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot = this.honeyPot + 1;
}
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}