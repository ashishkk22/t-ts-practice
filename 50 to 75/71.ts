//create a pick function
const pick = <TObj, TPicked extends keyof TObj>(obj: TObj , picked: Array<TPicked>) => {
    return picked.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {} as Pick<TObj, TPicked>)
}

const result = pick({
    a:1,b:1
},["a","b"])