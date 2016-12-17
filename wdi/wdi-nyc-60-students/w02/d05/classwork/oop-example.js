class Automobile {
  constructor(doors, color) {
    this.doors = doors;
    this.engine = 'v6';
    this.color = color;
    this.wheels = 4;
  }

  honk() {
    console.log("BEEP BEEP!");
  }

}

class SUV extends Automobile {
  constructor(doors, color) {
    super(doors, color);
    this.seats = 7;
  }
  honk() {
    console.log("BOMP BOMP");
  }
  rearDoorOpen() {
    console.log("back door opens by itself man!");
  }
}
