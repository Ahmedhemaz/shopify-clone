import { EventEmitter } from 'events';
export class UserEventEmitter {
    private eventEmitter: EventEmitter;

    constructor(){
        this.eventEmitter = new EventEmitter();
    }

    public static instance(): UserEventEmitter {
        return new UserEventEmitter();
    }

    public getEventEmitter(): EventEmitter {
        return this.eventEmitter;
    }

}