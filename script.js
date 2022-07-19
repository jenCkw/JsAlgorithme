let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersBoarded > 0) {
  passengersBoarded++;
  passengersStillToBoard--;
  seatsLeft--;
}

console.log(passengersBoarded);
