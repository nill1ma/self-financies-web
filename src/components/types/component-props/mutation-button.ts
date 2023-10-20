import { Children } from "./children";

export type MutationButtonProps = Children & {
    mutationType: 'create' | 'update'
}