import { ChangeEventHandler } from "react"
/**
 * export type InputProps = (
    | {
        value: string,
        onChange: ChangeEventHandler,
    }
    | {
        value?: undefined,
        onChange?: undefined
    }
) & {
    label: string
}

So this is the QS

 */
type AllOrNothing<T> = T | ToUndefinedObject<T>;
type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;

type Result = AllOrNothing<{
    value: string,
    onChange: ChangeEventHandler
}>

export type InputProps = (
    | {
        value: string,
        onChange: ChangeEventHandler,
    }
    | {
        value?: undefined,
        onChange?: undefined
    }
) & {
    label: string
}
//310