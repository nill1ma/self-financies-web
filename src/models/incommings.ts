export interface IncommingsDTO {
    [key:string]: string | number | Date | undefined
    id: string
    origin:string
    value:number
    pay_day:Date
    created_at:Date
    updated_at:Date
    user_id?:string
}

export type ExpensesDTO = Omit<IncommingsDTO, 'id' | 'created_at' | 'updated_at'> & {
    [key:string]: string | Date | number
}