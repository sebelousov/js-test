let arr = [1, 2, 3]

      
arr = new Proxy(arr, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length
        }
        return Reflect.get(target, prop, receiver)
    }
})

alert(arr[0])
alert(arr[-1])
alert(arr[-2])
alert(arr[-3])