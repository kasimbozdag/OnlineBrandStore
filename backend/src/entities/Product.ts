// src/entities/Product.ts

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    BaseEntity
} from "typeorm";
import { Brand } from "./Brand";

@Entity('Product')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Brand, brand => brand.products)
    @JoinColumn({ name: "brand_id" })
    brand: Brand;

    @Column()
    name: string;

    @Column("decimal", { precision: 7, scale: 2 })
    price: number;

    constructor(name: string, price: number, brand: Brand) {
        super();
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
}
