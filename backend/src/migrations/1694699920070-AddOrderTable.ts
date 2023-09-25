import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrderTable1694699920070 implements MigrationInterface {
    name = 'AddOrderTable1694699920070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "order" (
                "id" SERIAL NOT NULL,
                "total_product_value" numeric(7, 2) NOT NULL,
                "total_shipping_value" numeric(7, 2) NOT NULL,
                "client_name" character varying NOT NULL,
                "client_address" character varying NOT NULL,
                CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "order"
        `);
    }

}
