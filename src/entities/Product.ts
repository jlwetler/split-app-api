import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
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

    @Column()
    placeId: number;

    @ManyToOne(() => Place, (places) => places.placeProduct)
    productPlace: Place;
}