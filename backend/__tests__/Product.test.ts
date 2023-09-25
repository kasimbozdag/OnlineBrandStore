// Product.test.ts
import { Repository } from 'typeorm';
import { AppDataSource } from '../src/datasources/getDataSource';
import { Brand } from '../src/entities/Brand';
import { Product } from '../src/entities/Product';
import { initializeDatabase } from '../src/helpers/utils';

describe('Product Model', () => {
    let brandRepo: Repository<Brand>;
    let productRepo: Repository<Product>;

    beforeAll(async () => {
        await initializeDatabase();
        brandRepo = AppDataSource.getRepository(Brand);
        productRepo = AppDataSource.getRepository(Product);
    });

    afterAll(async () => {
        await AppDataSource.close();
    });

    it('should create and retrieve a product linked to a brand', async () => {
        // Create a Brand first
        const newBrand = brandRepo.create({ name: 'Test Brand for Product' });
        const savedBrand = await brandRepo.save(newBrand);

        // Create a Product linked to the above brand
        const newProduct = productRepo.create({
            name: 'Test Product',
            brand: savedBrand,
            price: 100.0
        });
        await productRepo.save(newProduct);

        // Retrieval of the product and its brand
        const savedProduct = await productRepo.findOne({ where: { name: 'Test Product' }, relations: ['brand'] });

        expect(savedProduct).toBeDefined();
        expect(savedProduct!.brand).toBeDefined();
        expect(savedProduct!.brand.name).toBe('Test Brand for Product');
    });
});
