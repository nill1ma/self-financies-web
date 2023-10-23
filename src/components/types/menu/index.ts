export type Menu = Omit<MenuItem, 'setMenuActive' | 'active'>

export type MenuItem = {
    path:string,
    label:string
}
