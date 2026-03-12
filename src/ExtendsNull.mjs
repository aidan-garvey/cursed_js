function FnNullProto() {
  this.field = 0
}

const beforeNullProto = new FnNullProto()
console.log('toString' in beforeNullProto) // true
console.log(`${beforeNullProto}`) // [object Object]

Object.setPrototypeOf(FnNullProto.prototype, null)

const afterNullProto = new FnNullProto()
console.log('toString' in afterNullProto) // false
try {
  console.log(`${afterNullProto}`)
} catch (err) {
  console.log(err) // TypeError: Cannot convert object to primitive value
}

{
  class NullPrototype extends null {
    field

    constructor() {
      super()
      this.field = 0
    }
  }

  try {
    new NullPrototype()
  } catch (err) {
    // TypeError: Super constructor null of NullPrototype is not a constructor
    console.log(err)
  }
}

{
  class NullPrototype extends null {
    field

    constructor() {
      this.field = 0
    }
  }

  try {
    new NullPrototype()
  } catch (err) {
    // ReferenceError: Must call super constructor in derived class before
    // accessing 'this' or returning from derived constructor
    console.log(err)
  }
}

{
  class NullPrototype extends null {
    field = 0
  }

  try {
    new NullPrototype()
  } catch (err) {
    // TypeError: Super constructor null of NullPrototype is not a constructor
    console.log(err)
  }
}

class NullPrototype extends null {
  field = 0 // doesn't actually do anything!

  constructor() {
    return Object.create(new.target.prototype)
  }
}

console.log(Object.getPrototypeOf(NullPrototype.prototype)) // null
const instance = new NullPrototype()
console.log(instance.field) // undefined
