import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity("customers_items")
export default class CustomerItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: number;

    @Column()
    ItemId: number;
}