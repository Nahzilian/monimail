import { IUrl} from './interfaces'

export class Url implements IUrl {
    readonly id: number;    
    url: string;
    createdOn: Date;

    constructor(id: number, url: string, createdOn: Date) { 
        this.id = id;
        this.url = url;
        this.createdOn = createdOn;
    }

    getCompany():IUrl {
        return {
            id: this.id,
            url: this.url,
            createdOn: this.createdOn,
        }
    }
}