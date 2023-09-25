import { MigrationInterface, QueryRunner } from "typeorm";

export class Priceprecision1695045979444 implements MigrationInterface {
    name = 'Priceprecision1695045979444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "Product"
            ALTER COLUMN "price" TYPE numeric(7, 2)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "Product"
            ALTER COLUMN "price" TYPE numeric(5, 2)
        `);
    }

}
