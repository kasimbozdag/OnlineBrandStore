// Brand.test.ts

import { AppDataSource } from '../src/datasources/getDataSource';
import { TestDataSource } from '../src/datasources/testDataSource';
import { Brand } from '../src/entities/Brand'; // adjust path as necessary
import { Repository } from 'typeorm';
import { initializeDatabase } from '../src/helpers/utils';

describe('Brand Model', () => {
    let brandRepo: Repository<Brand>;

    // Setting up connection before all tests
    beforeAll(async () => {
        await initializeDatabase();
        
        brandRepo = AppDataSource.getRepository(Brand);
    });

    // Closing connection after all tests
    afterAll(async () => {
        await AppDataSource.close();
    });


    it('should create and retrieve a brand', async () => {
        const newBrand = brandRepo.create({ name: 'Test Brand' });
        await brandRepo.save(newBrand);

        const savedBrand = await brandRepo.findOne({ where: { name: 'Test Brand' }})
        expect(savedBrand).toBeDefined();
        expect(savedBrand!.name).toBe('Test Brand');
        brandRepo.delete({ name: 'Test Brand' });
    });
});
