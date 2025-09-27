import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: "呆呆狗" + Math.floor((Math.random() + 1) * 100),
            email: "daidog" + Math.floor((Math.random() + 1) * 100) + "@qq.com",
        },
    });

    console.log(await prisma.user.findMany());
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    });

