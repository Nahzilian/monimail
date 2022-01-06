/** 
import { ISubscribedTo } from "./interfaces";

export class SubccribedTo implements ISubscribedTo {
    id: number;
    subscriberId: string;
    organizationId: number;
    
    constructor(id: number, subscriberId: string, organizationId: number){
        this.id = id;
        this.subscriberId = subscriberId;
        this.organizationId = organizationId;
    }

    getItem():ISubscribedTo {
        return this;
    }
}
*/