import { useForm } from "react-hook-form";
import InputLabel from "../../../components/atoms/inputs/InputLabel";
import InputText from "../../../components/atoms/inputs/InputText";
import MutationButton from "../../../components/atoms/MutationButton";
import PageTitle from "../../../components/atoms/PageTitle";
import FeatureNavigationMenu from "../../../components/molecules/feature-navication-menu";
import { InputFields } from "../../../components/types/input-fields";
import { Menu } from "../../../components/types/menu";
import { ExpensesDTO } from "../../../models/expenses";
import { Container, FormControl, FormGroup } from "./style";
import { useMutation } from "react-query";
import {create} from '../service'
import InputNumber from "../../../components/atoms/inputs/InputNumber";
import InputDate from "../../../components/atoms/inputs/InputDate";

export default function CreateExpenses() {
    const menu:Menu[] = [
        {path:'/expenses', label:'List Expenses'},
        {path:'/expenses/create', label:'Create'},
    ]

    const {register, handleSubmit} = useForm<ExpensesDTO>()

    const mutation = useMutation(create)

    const fields: InputFields[] = [
        {type: 'text', label:'Destine', name:'destine'},
        {type: 'number', label:'Value', name:'value'},
        {type: 'number', label:'Payed Value', name:'payed_value'},
        {type: 'date', label:'Pay Day', name:'pay_day'},
        {type: 'date', label:'Due Date', name:'due_date'}
    ]

    const createExpense = handleSubmit((data) => {
        console.log(data.value)
        mutation.mutate({...data, value: Number(data.value), payed_value: Number(data.payed_value), pay_day: new Date(data.pay_day), due_date: new Date(data.due_date)})
    })

    const renderInput = (type:string, name:string) => {
        const inputs = new Map<string, JSX.Element>()
        inputs.set('text', <InputText name={name} register={register} />)
        inputs.set('number', <InputNumber name={name} register={register} />)
        inputs.set('date', <InputDate name={name} register={register} />)
        return inputs.get(type)
    }

    return <Container>
                <FeatureNavigationMenu menu={menu} />
                <PageTitle>
                    Create Expense
                </PageTitle>
                <form onSubmit={createExpense}>
                    <FormControl>
                        {fields.map(({label, name,type}) => {
                            return (
                            <FormGroup key={label}>
                                <InputLabel name={name} label={label} />
                                {renderInput(type, name)}
                                {/* {(name === 'value' || name === 'payed_value') && <InputNumber register={register} name={name} />}
                                {(name === 'pay_day' || name === 'due_date') && <InputDate register={register} name={name} />}
                                {name !== 'value' && name !== 'payed_value' && name !== 'pay_day' && name !== 'due_date' && <InputText register={register} name={name} />} */}
                            </FormGroup>)
                            })}
                    </FormControl>
                            <FormGroup className="mt-3">
                                <MutationButton mutationType="create">Save</MutationButton>
                            </FormGroup>
                </form>
            </Container>
};
