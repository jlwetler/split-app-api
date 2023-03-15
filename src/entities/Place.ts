import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import User from "./User";
import Product from "./Product";

@Entity("places")
export default class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;

    @ManyToOne(() => User, user => user.userPlaces)
    user: User;

    @OneToMany(() => Product, (products) => products)
    placeProduct: Product;
}