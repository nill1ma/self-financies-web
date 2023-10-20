import { MutationButtonProps } from "../../types/component-props/mutation-button";

export default function MutationButton({children, mutationType}: MutationButtonProps) {
    const types = new Map<string, string>()
            types.set('create', 'bg-sky-950')
            types.set('update', 'bg-lime-600')
    return <button className={`px-10 text-white py-2 ${types.get(mutationType)}`}>{children}</button>
};
