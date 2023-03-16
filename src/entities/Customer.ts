import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity("customers")
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

}
