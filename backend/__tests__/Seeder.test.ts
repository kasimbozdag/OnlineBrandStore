// Seeder.test.ts

import { Repository } from "typeorm";
import { AppDataSource } from "../src/datasources/getDataSource";
import { Product } from "../src/entities/Product";
import { seedProducts } from "../seeder";
import { initializeDatabase } from "../src/helpers/utils";


describe('Seeder', () => {
    let productRepo: Repository<Product>;

    beforeAll(async () => {
        await initializeDatabase();
        productRepo = AppDataSource.getRepository(Product);
    });

    afterAll(async () => {
        await AppDataSource.close();
    });

    it('should populate the database with sample products', async () => {
        await seedProducts();

        // Retrieval of the products
        const products = await productRepo.find();
        expect(products.length).toBeGreaterThan(0);
        // More checks can be done here like checking if specific default products exist.
    });
});
