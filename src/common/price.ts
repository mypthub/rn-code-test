import { Monad } from '@common/monad';

enum Discount {
  Percent = 'percent',
  Amount = 'amount',
}

export class Price extends Monad {
  private _type: Discount = Discount.Amount;
  private readonly _price: number;

  private constructor(price: number) {
    super();
    this._price = price;
    this._value = price;
  }

  private _discount = 0;

  public get discount(): number {
    return this._discount;
  }

  public get discountType(): Discount {
    return this._type;
  }

  public get price(): number {
    return this._price;
  }

  private _value: number;

  public get value(): number {
    return this._value;
  }

  public get isDiscounted(): boolean {
    return this._price !== this._value;
  }

  public static of = (value: number): Price => {
    return new Price(value);
  };

  public discountBy(discount: number): Price {
    this._discount = discount;
    return this;
  }

  public percents(): Price {
    this._type = Discount.Percent;
    this.discountByPercent();
    return this;
  }

  public amount(): Price {
    this._type = Discount.Amount;
    this.discountByValue();
    return this;
  }

  private discountByValue(): void {
    this._value = this._price - this._discount;
  }

  private discountByPercent(): void {
    // fixme: this should be extracted to make it easier testable
    this._discount = this._discount / 100;
    switch (true) {
      case this._discount >= 1:
        this._value = 0;
        break;
      case this._discount === 1:
        this._value = 0;
        break;
      case this._discount < 1 && this._discount > 0:
        this._value = this._price * (1 - this._discount);
        break;
      case this._discount === 0:
        this._value = this._price;
        break;
      case this._discount < 0 && this._value > -1:
        this._value = this._price * (1 - this._discount);
        break;
      case this._discount === -1:
        this._value = this._price * 2;
        break;
      default:
        this._value = this._price * -1 * this._discount;
        break;
    }
  }
}
