import { Role } from "./enums/role.enum";
export declare class Users {
    id: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email: string;
    password: string;
    role: Role;
    currentHashedRefreshToken?: string;
}
