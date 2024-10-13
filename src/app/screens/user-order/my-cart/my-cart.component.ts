import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from 'src/app/models/orderItem';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})
export class MyCartComponent {
  @Input() orderItems: OrderItem[] = [];
  @Input() isVisible: boolean = false;
  @Output() cartClosed: EventEmitter<OrderItem[]> = new EventEmitter();

  closeCart(): void {
    this.isVisible = false;
    this.cartClosed.emit(this.orderItems);
  }

  createOrder(): void {
    console.log('Creating order...', this.orderItems);
  }

  getTotalPrice(): number {
    return this.orderItems.reduce((total, item) => total + (item.amount * parseFloat(item.product_price)), 0);
  }

  incrementProduct(productId: number): void {
    const orderItem = this.orderItems.find(item => item.product_id === productId);
    if (orderItem) {
      orderItem.amount += 1;
    }
  }

  decrementProduct(productId: number): void {
    const orderItem = this.orderItems.find(item => item.product_id === productId);
    if (orderItem && orderItem.amount > 1) {
      orderItem.amount -= 1;
    } else if (orderItem && orderItem.amount === 1) {
      this.orderItems = this.orderItems.filter(item => item.product_id !== productId);
    }
  }
}
