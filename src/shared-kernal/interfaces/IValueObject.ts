export interface IValueObject<T> {
    /**
     * checks if value objects have the same properties values 
     */
    equals(valueObject: T): boolean;
}