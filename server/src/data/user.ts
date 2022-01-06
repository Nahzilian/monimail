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

    constructor (id, firstName, lastName, email, username, role, verified, companyId) {
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
        return {
             id: this.id,
             firstName: this.firstName,
             lastName: this.lastName,
             email: this.email,
             username: this.username,
             role: this.role,
             verified: this.verified,
             companyId: this.companyId
        }
    }
    update(firstName, lastName, email, username, role, verified, companyId):IUser {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.username = username
        this.role = role
        this.verified = verified
        this.companyId = companyId
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            role: this.role,
            verified: this.verified,
            companyId: this.companyId
       }
    }
}