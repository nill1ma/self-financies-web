import InputText from "../../../components/atoms/InputText";
import MutationButton from "../../../components/atoms/MutationButton";
import PageTitle from "../../../components/atoms/PageTitle";
import FeatureNavigationMenu from "../../../components/molecules/feature-navication-menu";
import { Menu } from "../../../components/types/menu";
import { Container, FormControl, FormGroup } from "./style";

export default function CreateExpenses() {
    const menu:Menu[] = [
        {path:'/expenses', label:'List Expenses'},
        {path:'/expenses/create', label:'Create'},
    ]

    const fields = [
        {label:'Destine', name:'destine'},
        {label:'Value', name:'value'},
        {label:'Payed Value', name:'payed_value'},
        {label:'Pay Day', name:'pay_day'},
        {label:'Due Date', name:'due_date'}
    ]


    return <>
    <Container>
        <FeatureNavigationMenu menu={menu} />
        <PageTitle>
            Create Expense
        </PageTitle>
        <FormControl>
            {fields.map(({label, name}) => {
                return (
                <FormGroup>
                    <label className="border px-3 rounded-tr-lg rounded-bl-lg bg-sky-100" htmlFor={name}>{label}</label>
                    <InputText name={name} />
                </FormGroup>)
                })}
        </FormControl>
                <FormGroup className="mt-3">
                    <MutationButton mutationType="create">Save</MutationButton>
                </FormGroup>
    </Container>
    </>
};
