export enum Verified {
    yes = "true",
    no = "false"
}

export enum RoleType {
    admin = "admin",
    editor = "editor"
}

export enum TemplateType {
    media = "media",
    template = "template"
}

export enum TrackAction {
    view = "view",
    click = "click"
}

export interface ICompany {
    readonly id: string,
    name: string,
    email: string
}

export interface IUser {
    readonly id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: RoleType,
    verified: Verified,
    companyId: string
}

export interface ITemplate {
    readonly id: number,
    name: string,
    userId: string,
    type: TemplateType,
    createdOn: Date
}

export interface IMail {
    readonly id: number,
    templateId: number,
    createdOn: Date
}

export interface IUrl {
    readonly id: number,
    url: string,
    createdOn: Date
}

export interface ISubscriber {
    readonly id: string,
    firstName: string,
    lastName: string,
    email: string,
    companyId: number
}

export interface IOrganization {
    readonly id: number,
    name: string,
    title: string,
    description: string,
    slug: string
}

export interface ISubscribedTo {
    readonly id: number,
    subscriberId: string,
    organizationId: number
}

export interface IMailItem {
    readonly id: number,
    companyId: string,
    organizationId: number
}


export interface ITrack {
    readonly id: number,
    actionType: TrackAction,
    mailId: number,
    subscriberId: string,
    urlId: number,
    createdOn: Date
}

export interface IBlackListItem {
    readonly id: number,
    description: string,
    subscriberId: string
}