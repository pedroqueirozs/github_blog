import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
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
    setIssuesData: Dispatch<SetStateAction<Issue[]>>;
    setSearchTerm:(value:string)=>void;
}

export const IssuesContext = createContext<IssuesContextData | undefined>(undefined)
export const IssuesProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [issuesData, setIssuesData] = useState<Issue[]>([]);
    const [searchTerm, setSearchTerm]= useState("")

    // useEffect(() => {
    //     async function getIssuesData() {
    //         try {
    //             const data: Issue[] = await fetchRepositoryIssues();
    //             setIssuesData(data);
    //         } catch (error) {
    //             console.error("Erro ao carregar dados do usuario: ", error);
    //         }
    //     }
    //     getIssuesData();
    //     console.log(issuesData);
    // }, []);
    useEffect(() => {
    const fetchIssues = async () => {
    try {
      // Se o termo de busca estiver vazio, busque todas as issues
      const result = await fetchRepositoryIssues(searchTerm || "");
      setIssuesData(result); // Atualiza as issues com o resultado
    } catch (error) {
      console.error("Erro ao buscar issues: ", error);
    }
  };

  const delayDebounceFn = setTimeout(() => {
    fetchIssues();
  }, 500); // Aguarda 500ms após a última digitação para buscar

  return () => clearTimeout(delayDebounceFn); // Limpa o timeout anterior
}, [searchTerm]);

    return (
        <IssuesContext.Provider value={{
            issuesData,
            setIssuesData,
            setSearchTerm
        }}>
            {children}
        </IssuesContext.Provider>
    )
}


