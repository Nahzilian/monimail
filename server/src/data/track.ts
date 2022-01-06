import { ITrack, TrackAction } from "./interfaces";

export class Track implements ITrack {
    id: number;
    actionType: TrackAction;
    mailId: number;
    subscriberId: string;
    urlId: number;
    createdOn: Date;

    getItem():ITrack {
        return this
    }
}