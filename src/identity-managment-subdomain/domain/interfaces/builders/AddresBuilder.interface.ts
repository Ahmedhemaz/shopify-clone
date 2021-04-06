import { Address } from "../../value-objects/address.valueObject";

export interface AddressBuilder {
  setCountry(country: string) : AddressBuilder;
  setCity(city: string) : AddressBuilder;
  setStreet(street: string) : AddressBuilder;
  setPostalCode(postalCode: string) : AddressBuilder;
  build(): Address;
  getCountry(): string
  getCity(): string
  getStreet(): string
  getPostalCode(): string
}