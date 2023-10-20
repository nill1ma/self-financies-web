import { useQuery } from "react-query";
import * as service from "../service";
import FeatureNavigationMenu from "../../../components/molecules/feature-navication-menu";
import { Menu } from "../../../components/types/menu";

export default function ListExpenses() {
    const {data, isLoading, isError} = useQuery('expenses', () => service.get())


    const menu:Menu[] = [
        {path:'/expenses', label:'List Expenses'},
        {path:'/expenses/create', label:'Create'},

    ]

    if(isLoading) return <>Loading...</>
    if(isError) return <>Error</>
    return (
        <>
            <FeatureNavigationMenu menu={menu} />
            {data?.length === 0 && <>No data response</>}
            {data?.map(d => <span>{d.destine}</span>)}
        </>
    )
};
