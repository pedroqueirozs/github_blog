import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchGitHubUser = async () => {
  try {
    const response = await api.get("/users/pedroqueirozs");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados do usuario: ", error);
    throw error;
  }

};

// export const fetchRepositoryIssues = async () => {
//   try {
//     const response = await api.get("repos/pedroqueirozs/github_blog/issues ")
//     return response.data
//   } catch (error) {
//     console.error("Erro ao buscar issues: ", error)
//     throw error
//   }

// }
export const fetchRepositoryIssues = async (search: string = "") => {
  try {
    // Monta a query para a API
    const query = search.trim()
      ? `q=${search} repo:pedroqueirozs/github_blog is:issue`
      : `repos/pedroqueirozs/github_blog/issues`; 

    const url = search.trim()
      ? `/search/issues?${query}`
      : `/repos/pedroqueirozs/github_blog/issues`;

    const response = await api.get(url);
    return search.trim() ? response.data.items : response.data; // Retorna conforme o endpoint
  } catch (error) {
    console.error("Erro ao buscar issues: ", error);
    throw error;
  }
};


/* https://api.github.com/repos/pedroqueirozs/github_blog/issues */
// https://api.github.com/search/issues?q=tailwind%20repo:pedroqueirozs/github_blog

// /search/issues?q=tailwind%20repo:pedroqueirozs/github_blog