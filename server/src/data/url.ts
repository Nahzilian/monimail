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

    setItem(url: string): IUrl {
        this.url = url && url !== this.url ? url : url;
        return this
    }

    getItem():IUrl {
        return this
    }
}