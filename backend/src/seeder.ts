// seeder.ts

import { type } from "os";
import { AppDataSource } from "./datasources/getDataSource";
import { Brand } from "./entities/Brand";
import { Product } from "./entities/Product";



export async function seedProducts() {

    const brandRepo = AppDataSource.getRepository(Brand);

    const brands = [
        { name: 'Apple' },
        { name: 'Samsung' },
        { name: 'Sony' },
        { name: 'Bose' },
        { name: 'Dell' }
    ];

    const savedBrands = await brandRepo.save(brands);


    const productRepo = AppDataSource.getRepository(Product);

   

    const products = [
        { brand: savedBrands[0], name: 'iPhone 13 Pro', price: 999.0 },
        { brand: savedBrands[0], name: 'MacBook Pro M1', price: 1299.0 },
        { brand: savedBrands[0], name: 'iPad Air', price: 599.0 },
        { brand: savedBrands[0], name: 'Apple Watch Series 7', price: 399.0 },
        { brand: savedBrands[0], name: 'AirPods Pro', price: 199.0 },

        { brand: savedBrands[1], name: 'Galaxy S21 Ultra', price: 1199.0 },
        { brand: savedBrands[1], name: 'Galaxy Tab S7+', price: 849.0 },
        { brand: savedBrands[1], name: 'Galaxy Watch 4', price: 249.0 },
        { brand: savedBrands[1], name: 'Galaxy Buds Pro', price: 169.0 },
        { brand: savedBrands[1], name: 'Galaxy Book Pro', price: 999.0 },

        { brand: savedBrands[2], name: 'PlayStation 5', price: 499.0 },
        { brand: savedBrands[2], name: 'Sony WH-1000XM4', price: 348.0 },
        { brand: savedBrands[2], name: 'Sony Alpha a7 III', price: 1998.0 },
        { brand: savedBrands[2], name: 'Sony X900H TV', price: 948.0 },
        { brand: savedBrands[2], name: 'Sony SRS-XB23 Speaker', price: 98.0 },

        { brand: savedBrands[3], name: 'Bose QuietComfort 35 II', price: 299.0 },
        { brand: savedBrands[3], name: 'Bose SoundLink Revolve', price: 199.0 },
        { brand: savedBrands[3], name: 'Bose SoundSport Free', price: 149.0 },
        { brand: savedBrands[3], name: 'Bose Home Speaker 300', price: 259.0 },
        { brand: savedBrands[3], name: 'Bose Wave SoundTouch IV', price: 599.0 },

        { brand: savedBrands[4], name: 'Dell XPS 13', price: 999.0 },
        { brand: savedBrands[4], name: 'Dell Alienware m15 R4', price: 2199.0 },
        { brand: savedBrands[4], name: 'Dell Inspiron 14', price: 549.0 },
        { brand: savedBrands[4], name: 'Dell Ultrasharp U2720Q', price: 649.0 },
        { brand: savedBrands[4], name: 'Dell Precision 5750', price: 2299.0 },
    ];

    await productRepo.save(products);
}
