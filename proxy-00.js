let user = {
    name: 'John'
  }

  function wrap(target) {
    return new Proxy(target, {
      get(target, prop) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver)
        } else {
          throw new ReferenceError(`Prop '${prop}' does not exist...`)
        }
      }
    })
  }

  user = wrap(user)

  alert(user.name)
  alert(user.age)