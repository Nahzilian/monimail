import { ICompany } from './interfaces'

export class Company implements ICompany {
    readonly id: string;
    name: string;
    email: string;

    constructor(id: string, name: string, email: string) { 
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getCompany():ICompany {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        }
    }

    updateCompany(name:string, email:string):ICompany {
        this.name = name
        this.email = email
        return {
            id: this.id,
            name: this.name,
            email: this.email
        }
    }
}