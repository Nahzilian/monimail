import { IOrganization } from "./interfaces";

export class Organization implements IOrganization {
    readonly id: number;
    name: string;
    title: string;
    description: string;
    slug: string

    constructor(id: number, name: string, title: string, description: string, slug: string) {
        this.id = id
        this.name = name
        this.title = title
        this.description = description
        this.slug = slug
    }

    getOrganization(): IOrganization { return this }

    updateOrganization(name: string, title: string, description: string, slug: string) {
        this.name = name && this.name !== name ? name : this.name
        this.title = title && this.title !== title ? title : this.title
        this.description = description && this.description !== description ? description : this.description
        this.slug = slug && this.slug !== slug ? slug : this.slug

        return this
    }
}