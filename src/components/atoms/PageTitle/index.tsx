import { Children } from "../../types/component-props/children";

export default function PageTitle({children}:Children) {
    return <span className="font-bold py-7 text-xl">{children}</span>
};