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

    getItem():ICompany {
        return this
    }

    setItem(name:string, email:string):ICompany {
        this.name = name && name !== this.name ? name : this.name
        this.email = email && email !== this.email ? email : this.email
        return this
    }
}