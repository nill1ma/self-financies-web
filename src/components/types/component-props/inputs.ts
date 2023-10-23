import { FieldValues, UseFormRegister } from "react-hook-form"

export type InputsProps<T extends FieldValues> = {
    name: string
    register: UseFormRegister<T>
    type?:string
}