export class Monad {
  public map<T>(fn: (p: this) => T): T {
    return fn(this);
  }
}
