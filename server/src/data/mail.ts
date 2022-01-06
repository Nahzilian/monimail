import { IMail} from './interfaces'

export class Mail implements IMail {
    readonly id: number;    
    templateId: number;
    createdOn: Date;

    constructor(id: number, templateId: number, createdOn: Date) { 
        this.id = id;
        this.templateId = templateId,
        this.createdOn = createdOn;
    }

    getMail():IMail {
        return this
    }
}