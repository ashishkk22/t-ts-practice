//3 => how to get the function return value
const getUser = () => {
    return Promise.resolve({
        id: "22",
        name: "ak"
    })
}

type FunctionReturnType = Awaited<ReturnType<typeof getUser>>

/** Without Awaited 
 * type FunctionReturnType = Promise<{
    id: string;
    name: string;
}> 
*/