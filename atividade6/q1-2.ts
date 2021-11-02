class Hotel {
    quantReservas: number;
    adicionarReserva(quantReservas:number): void {
    quantReservas++;
    }
  
    constructor(quantReservas: number) {
    this.quantReservas = quantReservas; 
    }
  }
let hotel: Hotel = new Hotel(10);
 console.log(hotel.quantReservas);
  