import { prisma } from "../libs/prisma";


export const registerUser = async (email: string, password: string) => {
    const user = await prisma.users.create({
        data: {
            email,
            password
        }
    })
    
    
    return user;
}

export const login = async (email: string, password: string) => {
    const user = await prisma.users.findMany({
        where:{
            email,
            password
        }
    })
    

    return user;
}
export const getList = async () => {
    const user = await prisma.users.findMany({select:{email:true}});
    
    
    return user;
}

export const getUser = async (email:string) => {
    const user = await prisma.users.findUnique({ where:{email} });
    
    return user;
}

