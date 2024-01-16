//when we have to accept the multiple thing in the generics
const inferItemLiteral = <T extends string | number> (t: T) => {
    return {
        output:t
    }
}

const rr = inferItemLiteral("123");
const rr2 = inferItemLiteral(22)

