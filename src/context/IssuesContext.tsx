import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRepositoryIssues } from "../lib/axios";

interface Issue {
    number: number;
    title: string,
    body: string,
    created_at: string,
    comments: number
}
interface IssuesContextData {
    issuesData: Issue[]
}

export const IssuesContext = createContext<IssuesContextData | undefined>(undefined)
export const IssuesProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [issuesData, setIssuesData] = useState<Issue[]>([]);

    useEffect(() => {
        async function getIssuesData() {
            try {
                const data: Issue[] = await fetchRepositoryIssues();
                setIssuesData(data);
            } catch (error) {
                console.error("Erro ao carregar dados do usuario: ", error);
            }
        }
        getIssuesData();
        console.log(issuesData);
    }, []);


    return (
        <IssuesContext.Provider value={{
            issuesData
        }}>
            {children}
        </IssuesContext.Provider>
    )
}