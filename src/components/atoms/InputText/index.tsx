import { Input } from "./style";

export default function InputText({name}:Prop) {
    return <Input name={name} id={name} />
};

type Prop = {
    name:string
}