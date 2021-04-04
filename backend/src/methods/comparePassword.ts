import { compare } from "bcryptjs";

export default async (password: string, realPassword: string) => {
    return await compare(password, realPassword);
}