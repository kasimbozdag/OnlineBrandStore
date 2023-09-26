import { AppDataSource } from "./datasources/getDataSource";
import { seedProducts } from "./seeder";

AppDataSource.initialize().then(() => {
    seedProducts().then(() => {
        console.log("Seeding completed!");
    }).catch((error: any) => {
        console.error("Error seeding the database:", error);
    });
}).catch((error: any) => {
    console.error("Error initializing the database:", error);
}
);