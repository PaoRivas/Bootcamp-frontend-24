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
class Cinema {
  seat = new Seat();
  constructor(numRows, seatsPerRow) {
    this.numRows = numRows;
    this.seatsPerRow = seatsPerRow;
    this.totalSeats = numRows * seatsPerRow;
    this.seatMatrix = this.generateMatrix();
  }

  generateMatrix() {
    const seatMatrix = [];
    for (let i = 0; i < this.numRows; i++) {
      const row = [];
      for (let j = 0; j < this.seatsPerRow; j++) {
        row.push(new Seat(i + 1, j + 1));
      }
      seatMatrix.push(row);
    }
    return seatMatrix;
  }

  bookSeat(row, number) {
    const seat = this.seatMatrix[row - 1][number - 1];
    if (seat.isBooked) {
      console.log("Seat is already booked.");
      return false;
    }

    seat.book();
    console.log(`Seat ${row}-${number} booked successfully.`);
    return true;
  }

  matrixState() {
    console.log("Matrix Status:");
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.seatsPerRow; j++) {
        const seat = this.seatMatrix[i][j];
        console.log(`Seat ${seat.row}-${seat.number}: ${seat.getStatus()}`);
      }
    }
  }
}

function testCinema() {
  const cinema = new Cinema(6, 8);

  console.log("Estado inicial de la sala:");
  cinema.matrixState();

  cinema.bookSeat(3, 5);
  cinema.bookSeat(1, 7);
  cinema.bookSeat(3, 3);
  cinema.bookSeat(1, 8);
  cinema.bookSeat(2, 5);
  cinema.bookSeat(5, 7);
  cinema.bookSeat(3, 5);

  console.log("\nEstado de la sala después de las reservas:");
  cinema.matrixState();
}

testCinema();
