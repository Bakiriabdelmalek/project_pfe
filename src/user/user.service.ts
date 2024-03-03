import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()

export class UserService {
   
    constructor(private readonly PrismaService:PrismaService){}

    async findOne(email:string){
        return await this.PrismaService.user.findUnique({
            where:{email}
        })
    }

    async findOneById(id:string){
        return await this.PrismaService.user.findUnique({
            where:{id}
        })
    }
    
   /* async updateWelcomerById(id:string){
        return await this.PrismaService.user.update({
            where:{id},
            data:{isWelcomeEmailSent:true}
        })
    }*/

}