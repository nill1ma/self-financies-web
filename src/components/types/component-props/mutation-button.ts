import { Children } from "./children";

export type MutationButtonProps = Children & {
    mutationType: 'create' | 'update'
    action?:<T>(data:T)=> void
}