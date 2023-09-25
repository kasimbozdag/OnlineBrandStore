import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialSchema1694699777788 implements MigrationInterface {
    name = 'CreateInitialSchema1694699777788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Product" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "price" numeric(5, 2) NOT NULL,
                "brand_id" integer,
                CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "Brand" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_a4a45d0f897767860c6c8209b96" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "Product"
            ADD CONSTRAINT "FK_12d9053e5b3c4d45e00fdb8349b" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "Product" DROP CONSTRAINT "FK_12d9053e5b3c4d45e00fdb8349b"
        `);
        await queryRunner.query(`
            DROP TABLE "Brand"
        `);
        await queryRunner.query(`
            DROP TABLE "Product"
        `);
    }

}
