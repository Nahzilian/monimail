import { ISubscriber} from './interfaces'

export class Subscriber implements ISubscriber {
    readonly id: string;    
    firstName: string;
    lastName: string;
    email: string;
    companyId: number;

    constructor(id: string, firstName: string, lastName: string, email: string, companyId: number) { 
        this.id = id;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.companyId= companyId;
    }

    updateSubscriber(firstName: string, lastName: string, email: string, companyId: number): ISubscriber {
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.companyId= companyId;
        return this
    }

    getSubscriber():ISubscriber {
        return this
    }
}