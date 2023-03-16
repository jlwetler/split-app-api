import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Customer from "./Customer";
import Product from "./Product";

@Entity("customers_items")
export default class CustomerItem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;
}
