import { load as colors } from "../create/+page.server"

export function load(){
    return {colors:colors()};
}