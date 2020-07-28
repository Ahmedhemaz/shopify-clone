import { UniqueEntityId } from "../domain/value-objects/UniqueEntityId.valueObject";

export abstract class  Entity {
    private readonly uId: UniqueEntityId;
    constructor(anUniqueEntityId?: string){
        this.uId = new UniqueEntityId(anUniqueEntityId);
    }

    public getUId() {
        return this.uId.getUniqueIdentity();
    }

}