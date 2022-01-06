import { IUser, RoleType, Verified } from "./interfaces";

export class User implements IUser {
    readonly id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    // No password
    role: RoleType;
    verified: Verified;
    companyId: string

    constructor (id: string, firstName: string, lastName: string, email: string, username: string, role: RoleType, verified: Verified, companyId: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.username = username
        this.role = role
        this.verified = verified
        this.companyId = companyId
    }

    getUser(): IUser {
        return this
    }
    update(firstName: string, lastName: string, email: string, username: string, role: RoleType, verified: Verified, companyId: string):IUser {
        this.firstName = firstName && firstName !== this.firstName ? firstName : this.firstName
        this.lastName = lastName && lastName !== this.lastName ? lastName : this.lastName
        this.email = email && email !== this.email ? email : this.email
        this.username = username && username !== this.username ? username : this.username
        this.role = role && role !== this.role ? role : this.role
        this.verified = verified && verified !== this.verified ? verified : this.verified
        this.companyId = companyId && companyId !== this.companyId ? companyId : this.companyId
        return this
    }
}