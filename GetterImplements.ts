/**
 * Suppose you were implementing an interface in TypeScript, and for whatever
 * reason, you either couldn't modify the interface, or didn't want to...
 */
interface IExample {
  field: number
}

// Maybe you don't want to modify the interface because you're implementing a
// mock class for unit tests, for example.
class ExampleMock implements IExample {
  private _field = 0

  get field(): number {
    return this._field
  }
  // (fun fact: it's an error in TS to annotate the return type here, even if
  // it's void)
  set field(value: number) {
    this._field = value
  }
}

/**
 * Bonus: you can implement a readonly property as a getter.
 */
interface IReadOnly {
  readonly field: string
}

class ReadOnly implements IReadOnly {
  get field(): string {
    return 'Hello, world!'
  }
}
