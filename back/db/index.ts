import { response } from "../lib/responseConstructor";
import PrismaImport from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export async function login(email: string, password: string) {
//   const user = await prisma.user.findOne({
//     where: { email: email },
//   });
//   if (!user) {
//     return new response(401, "User not found");
//   }
//   if (user.password !== password) {
//     return new response(401, "Wrong password");
//   }
//   return new response(200, "Login successful", {
//     token: user.token,
//     user: {
//       id: user.id,
//       email: user.email,
//       name: user.name,
//       role: user.role,
//     },
//   });
// }

export async function AuthLogin(email: string){

    

}