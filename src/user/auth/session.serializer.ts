import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { use } from "passport";
import { UserService } from "../user.service";
import { User } from "@prisma/client";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(private readonly UserService:UserService){
        super()
    }
    serializeUser(user_id: string, done: (err:Error,user:any)=>void):any {
        done(null,user_id)        
    }

    async deserializeUser(id: string, done: (err:Error,payload:any)=>void) {
        const { password, createdAt, updatedAt, ...user_server_data } =
          await this.UserService.findOneById(id);
        
        done(null,user_server_data)       
    }
}