import { UseFormRegister } from "react-hook-form";
import { Input } from "./style";

export default function InputNumber({name, register}:Props) {
    return <Input {...register(name)} name={name} id={name} />
};

type Props = {
    name:string
    register: UseFormRegister<any>
}