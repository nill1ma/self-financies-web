export interface Expenses {
    [key:string]: string | number | Date | undefined
    id: string
    destine:string
    value:number
    payed_value:number
    pay_day:Date
    due_date:Date
    created_at:Date
    updated_at:Date
    user_id?:string
}

export type ExpensesDTO = Omit<Expenses, 'id' | 'created_at' | 'updated_at'> & {
    [key:string]: string | Date | number
}