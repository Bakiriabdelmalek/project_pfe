import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user.service'; // Ensure the correct path
import { PrismaService } from 'src/prisma/prisma.service';


interface SignUpParams {

  username:string
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private readonly PrismaService:PrismaService,
   
    ) {} // Use UserService

  async signup({ username,email, password }: SignUpParams) {
    const userExist = await this.userService.findOne(email); // Use UserService's findOne

    if (userExist) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Assuming UserService or another service is responsible for creating the user
    // If UserService doesn't have a createUser method, you might need to implement it
    const user = await this.PrismaService.user.create({
      data:{
        username,
        email,
      password: hashedPassword,
      }
    });

   

    return user;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email); // Use UserService's findOne
    
    if (user && (await bcrypt.compare(password, user.password))) {
      const { id } = user; // Exclude password when returning user object
      return id;
    }

    return null;
  }
  

 /* async emailFirstLogin(id:string){
    const user = await this.userService.findOneById(id)
    

    if(!user.isWelcomeEmailSent){
      await this.EmailService.sendMail(user.email)

      await this.userService.updateWelcomerById(id)
    }
  }*/


  
}
