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

    updateUrl(url: string): IUrl {
        this.url = url;
        return this
    }

    getUrl():IUrl {
        return this
    }
}