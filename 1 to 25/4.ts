//4 => we want the union type of the object's key

const testingFrameWorks = {
    vitest: {
        label: "vitest",
    },
    jest: {
        label: "jest"
    },
    mocha: {
        label: "Mocha"
    }
}

//result
// type TestingFrameWork = "vitest" | "jest" | "mocha"

type TestingFrameWork = keyof typeof testingFrameWorks