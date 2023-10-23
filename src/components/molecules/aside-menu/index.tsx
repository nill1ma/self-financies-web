import MenuItem from "../../atoms/menu-item"
import { Menu } from "../../types/menu"

export default function AsideMenu() {

    const menu: Menu[] = [
        { path:`/`, label:`Home` },
        { path:`/expenses`, label:`Expenses` },
    ]

    return <>
        {menu.map(({path, label}) => <MenuItem key={path} path={path} label={label} />)}
    </>
};