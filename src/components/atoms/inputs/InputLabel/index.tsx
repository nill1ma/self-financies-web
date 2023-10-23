import { InputLabel as InputLabelProps } from "../../../types/input-fields";

export default function InputLabel({name, label}: InputLabelProps) {
    return <label className="border px-3 rounded-tr-lg rounded-bl-lg bg-sky-100" htmlFor={name}>{label}</label>
};
