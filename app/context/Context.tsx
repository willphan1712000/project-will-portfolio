import { Project, Social } from "@prisma/client";
import { createContext, useContext } from "react";

export type Data = {
    social?: | Social | null,
    project?: | Project[] | null
} | undefined

export const MyContext = createContext<Data>(undefined)

export default function useMyContext() {
    const data = useContext(MyContext)

    if ( data === undefined )
        throw new Error("Context is undefined")
        
    return data
}