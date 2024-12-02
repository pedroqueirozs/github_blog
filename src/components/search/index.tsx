import { FormSearch } from "./styles";

export function Search() {
  return (
    <FormSearch>
      <div>
        <h2>Publicações</h2>
        <span> 6 publicaçoes</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormSearch>
  );
}
