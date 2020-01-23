export class Address {
  street: string;
  city: string;
  country: string;
  postCode: string;

  constructor(street: string, city: string, country: string, postCode: string) {
    this.street = street;
    this.city = city;
    this.country = country;
    this.postCode = postCode;
  }
}
