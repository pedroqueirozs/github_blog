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
export const fetchRepositoryIssues = async()=>{
    try{
        const response = await api.get("repos/pedroqueirozs/github_blog/issues ")
        return  response.data
    }catch(error){  
        console.error("Erro ao buscar issues: ", error)
        throw error
    }

} 

/* https://api.github.com/repos/pedroqueirozs/github_blog/issues */
