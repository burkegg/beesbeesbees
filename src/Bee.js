
var Bee = function() {
  Grub.call(this); // ask about this?
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  console.log(Grub.food);
  
};
Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;