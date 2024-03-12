class Cinema {
  constructor(numRows, seatsPerRow) {
    (this.numRows = numRows), (this.seatsPerRow = seatsPerRow);
  }
}

class Seat {
  constructor(row, number) {
    this.row = row;
    this.number = number;
    this.isBooked = false;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }

  getStatus() {
    return this.isBooked ? "Booked" : "Available";
  }
}
