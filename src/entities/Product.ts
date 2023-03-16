import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Place from "./Place";

@Entity("products")
export default class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Place)
    @JoinColumn({ name: 'placeId' })
    place: Place;
}
