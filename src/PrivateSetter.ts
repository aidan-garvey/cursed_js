class PrivateSetter {
  private _field = 0

  public get field() {
    return this._field
  }

  private set field(value: number) {
    this._field = value
  }
}
