import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Place from "./Place"
import Customer from "./Customer";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Place, (places) => places.user)
    userPlaces: Place;

    @OneToMany(() => Customer, (customers) => customers)
    userCustomer: Customer;
}