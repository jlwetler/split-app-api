import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity("places")
export default class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

}
