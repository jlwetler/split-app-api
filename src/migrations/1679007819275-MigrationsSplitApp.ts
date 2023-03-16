import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationsSplitApp1679007819275 implements MigrationInterface {
    name = 'MigrationsSplitApp1679007819275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "item" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "placeId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers_items" ("id" SERIAL NOT NULL, "customerId" integer, "productId" integer, CONSTRAINT "PK_8b1e3394df3659bb7fe055a79dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_b8512aa9cef03d90ed5744c94d7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_41f795cb1cf769256b87e548aa2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_c23777ffa15eb337f254ee1e978" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers_items" ADD CONSTRAINT "FK_4a949a98d4ee8b04fb53a3765c5" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers_items" ADD CONSTRAINT "FK_42890943f6aa8033a2f0666088f" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers_items" DROP CONSTRAINT "FK_42890943f6aa8033a2f0666088f"`);
        await queryRunner.query(`ALTER TABLE "customers_items" DROP CONSTRAINT "FK_4a949a98d4ee8b04fb53a3765c5"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_c23777ffa15eb337f254ee1e978"`);
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_41f795cb1cf769256b87e548aa2"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_b8512aa9cef03d90ed5744c94d7"`);
        await queryRunner.query(`DROP TABLE "customers_items"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
