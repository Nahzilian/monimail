import { ITemplate, TemplateType} from './interfaces'

export class Template implements ITemplate {
    readonly id: number;    
    name: string;
    userId: string;
    type: TemplateType;
    createdOn: Date;

    constructor(id: number, name: string, userId: string, type: TemplateType, createdOn: Date) { 
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.type = TemplateType;
        this.createdOn = createdOn;
    }

    getCompany():ITemplate {
        return {
            id: this.id,
            name: this.name,
            userId: this.userId,
            type: this.TemplateType,
            createdOn: this.createdOn,
        }
    }
}