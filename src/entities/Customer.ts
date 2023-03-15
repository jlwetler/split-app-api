import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import User from "./User";

@Entity("customers")
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;

    @ManyToOne(() => User, user => user.userCustomer)
    user: User;
}