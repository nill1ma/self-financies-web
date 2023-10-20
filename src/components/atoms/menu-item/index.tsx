import { Link, useLocation } from "react-router-dom";
import { MenuItem as Props } from "../../types/menu";

export default function MenuItem({path, label, isSideBar}: Props) {
    const {pathname} = useLocation()

    return <Link 
    className={`${(pathname === path || pathname.includes(label.toLocaleLowerCase())) && 'text-black bg-white'} 
     min-w-[200px] pt-3 pb-3 h-fit`} to={path}>
                    {label}
            </Link>
};
