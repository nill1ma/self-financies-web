export type InputFields = {
    name:string
    label:string
    type:string
}

export type InputLabel = Omit<InputFields, 'type'>