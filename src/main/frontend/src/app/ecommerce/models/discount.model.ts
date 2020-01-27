export class Discount {
  id: number;
  voucher: string;
  expiry: any;
  expired: boolean;
  value: number;

  constructor(id: number, voucher: string, expiry: any, expired: boolean, value: number) {
    this.id = id;
    this.voucher = voucher;
    this.expiry = expiry;
    this.expired = expired;
    this.value = value;
  }

}
