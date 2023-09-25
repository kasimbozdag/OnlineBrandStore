// src/entities/Brand.ts

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity
} from "typeorm";
import { Product } from "./Product";

@Entity('Brand')
export class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Product, product => product.brand, { cascade: true })
    products: Product[];

    constructor(name: string) {
        super();
        this.name = name;
    }

}
