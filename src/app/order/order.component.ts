import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  selectedItems = [
    { name: 'Pizza', price: 200, image: 'assets/pizza.jpg' },
    { name: 'Pasta', price: 150, image: 'assets/pasta.jpg' }
  ];

  totalPrice = 350;  // Calculate based on selected items
  
  constructor() { }

  ngOnInit(): void {
  }

  // Order submission (for example, after filling address)
  submitOrder() {
    console.log('Order submitted with total price:', this.totalPrice);
    // Add the order submission logic here (e.g., send to backend)
  }


}
