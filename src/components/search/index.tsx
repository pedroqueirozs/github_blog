import { FormSearch } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";

export function Search() {
  const context = useContext(IssuesContext)
  if (!context) {
    return (
      <p>Erro: o contexto não esta definido</p>
    )
  }
  const { issuesData } = context
  return (
    <FormSearch>
      <div>
        <h2>Publicações</h2>
        <span>{issuesData.length} {issuesData.length > 1 ? "Publicações" : "Publicação"}</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormSearch>
  );
}
