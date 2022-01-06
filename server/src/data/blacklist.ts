import { IBlackListItem } from "./interfaces";

export class BlackListItem implements IBlackListItem {
    readonly id: number;
    description: string;
    subscriberId: string

    constructor (id: number,description: string,subscriberId: string) {
        this.id = id
        this.description = description
        this.subscriberId = subscriberId
    }

    getItem() {return this}

    setItem(description: string,subscriberId: string) {
        this.description = description && description !== description ? description : this.description
        this.subscriberId = subscriberId && subscriberId !== subscriberId ? subscriberId : this.subscriberId
        return this
    }
}