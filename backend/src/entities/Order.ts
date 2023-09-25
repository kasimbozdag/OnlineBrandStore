// src/entity/Order.ts

import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", { precision: 7, scale: 2 })
    total_product_value: number;

    @Column("decimal", { precision: 7, scale: 2 })
    total_shipping_value: number;

    @Column()
    client_name: string;

    @Column()
    client_address: string;
}
