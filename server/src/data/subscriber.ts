import { ISubscriber} from './interfaces'

export class Subscriber implements ISubscriber {
    readonly id: string;    
    firstName: string;
    lastName: string;
    email: string;
    companyId: number;

    constructor(id: string, firstName: string, lastName: string, email: string, companyId: number,) { 
        this.id = id;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.companyId= companyId;
    }

    getCompany():ISubscriber {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            companyId: this.companyId,
        }
    }
}