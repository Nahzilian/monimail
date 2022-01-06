import { ITemplate, TemplateType} from './interfaces'

export class Template implements ITemplate {
    readonly id: number;    
    name: string;
    userId: string;
    type: TemplateType;
    readonly createdOn: Date;

    constructor(id: number, name: string, userId: string, type: TemplateType, createdOn: Date) { 
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.type = type;
        this.createdOn = createdOn;
    }

    updateTemplate(name: string, userId: string, type: TemplateType):Template {
        this.name = name && name !== this.name ? name: this.name;
        this.userId = userId && userId !== this.userId ? userId: this.userId;
        this.type = type && type !== this.type ? type: this.type;
        return this
    }

    getTemplate():ITemplate {
        return this
    }
}