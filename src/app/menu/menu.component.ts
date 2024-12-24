import { Component } from '@angular/core';
import { RecruiterserviceService } from '../recruiterservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

constructor(private _recruiterService:RecruiterserviceService){}

  menuItems = [
    { 
      name: 'Breakfast', 
      description: 'Start your day with a healthy breakfast', 
      items: [
        { name: 'Pancakes', image: 'assets/breakfast.jpg', price: 120 },
        { name: 'Omelette', image: 'assets/breakfast.jpg', price: 100 },
        { name: 'Fruit Salad', image: 'assets/salad.jpg', price: 90 }
      ]
    },
    { 
      name: 'Lunch', 
      description: 'Satisfy your hunger with delicious lunch options', 
      items: [
        { name: 'Grilled Chicken', image: 'assets/grilledchicken.jpg', price: 199 },
        { name: 'Pasta', image: 'assets/pastaimg.jpg', price: 99 },
        { name: 'Salad', image: 'assets/salad.jpg', price: 130 }
      ]
    },
    { 
      name: 'Dinner', 
      description: 'Enjoy a fine dining experience with our dinner options', 
      items: [
        { name: 'Steak', image: 'assets/Burger.jpg', price: 199 },
        { name: 'Fish Tacos', image: 'assets/fish.jpg', price: 299 },
        { name: 'Vegetarian Dish', image: 'assets/veg.jpg', price: 114 }
      ]
    },
    { 
      name: 'Drinks', 
      description: 'Cool off with refreshing beverages', 
      items: [
        { name: 'Cocktails', image: 'assets/p1.jpg', price: 199 },
        { name: 'Mocktails', image: 'assets/p2.jpg', price: 149 },
        { name: 'Juices', image: 'assets/juices.jpg', price: 99 }
      ]
    }
  ];

  selectedItems: { image: string, name: string, price: number, quantity: number }[] = [];
  orderPlaced: boolean = false;
  orderDetailsVisible: boolean = false;
  orderDetails = { name: '', address: '', phone: '' };

  // Select or deselect item and handle quantity
  selectItemImage(image: string, name: string, price: number): void {
    const index = this.selectedItems.findIndex(item => item.image === image);

    if (index === -1) {
      // If the item is not selected yet, add it with quantity 1
      this.selectedItems.push({ image, name, price, quantity: 1 });
    } else {
      // If the item is already selected, increase the quantity by 1
      this.selectedItems[index].quantity += 1;
    }
  }

  // Get total price of selected items
  getTotalPrice(): number {
    return this.selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Place order logic
  placeOrder() {
    if (this.selectedItems.length > 0) {
      this.orderPlaced = true;
      this.orderDetailsVisible = true; // Show the order details form
      // Optionally, reset order data for the next order
      // this.selectedItems = [];
    }
  }

  // Delete selected item
  deleteItem(item: any) {
    this.selectedItems = this.selectedItems.filter(i => i !== item);
  }

  // Change quantity of selected item
  changeQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      item.quantity = quantity; // Update the quantity
    } else {
      this.deleteItem(item); // Remove item if quantity is 0 or less
    }
  }

  // Submit order details (for user information like name, address, etc.)
  submitOrderDetails() {
    // Handle order submission (e.g., send to server)
    console.log('Order submitted:', this.orderDetails);

      this._recruiterService.submitOrderDeatils(this.orderDetails).subscribe(data=>{
           console.log(data)
      })
    // Reset for the next order
    this.selectedItems = [];
    this.orderDetails = { name: '', address: '', phone: '' };
    this.orderPlaced = false;
    this.orderDetailsVisible = false;
  }
}

