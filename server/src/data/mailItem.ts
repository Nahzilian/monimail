import { IMailItem } from "./interfaces";

export class MailItem implements IMailItem {
    readonly id: number;
    companyId: string;
    organizationId: number;
    
    constructor(id: number, companyId: string, organizationId: number) {
        this.id = id;
        this.companyId = companyId;
        this.organizationId;
    }

    setItem(companyId: string, organizationId: number):void{
        this.companyId = companyId;
        this.organizationId = organizationId;
    }

    getItem():IMailItem{
        return this
    }
}