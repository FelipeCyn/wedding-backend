import { Role } from './enums/role.enum';
export declare class Authentication {
    id: number;
    name?: string;
    email: string;
    password: string;
    role: Role;
    currentHashedRefreshToken?: string;
}
