import MenuItem from "../../atoms/menu-item";
import { Menu } from "../../types/menu";
import { NavMenu } from "./style";

export default function FeatureNavigationMenu({menu}:Props) {

    return <NavMenu>
            {menu.map(m => <MenuItem key={m.path} label={m.label} path={m.path} />)}
        </NavMenu>
};

type Props = {
    menu: Menu[]
}