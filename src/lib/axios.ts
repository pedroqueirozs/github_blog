import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const fetchGitHubUser = async () => {
  try {
    const response = await api.get('/users/pedroqueirozs')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar os dados do usuario: ', error)
    throw error
  }
}

export const fetchRepositoryIssues = async (search: string = '') => {
  try {
    const query = search.trim()
      ? `q=${search} repo:pedroqueirozs/github_blog is:issue`
      : `repos/pedroqueirozs/github_blog/issues`

    const url = search.trim()
      ? `/search/issues?${query}`
      : `/repos/pedroqueirozs/github_blog/issues`

    const response = await api.get(url)
    return search.trim() ? response.data.items : response.data // Retorna conforme o endpoint
  } catch (error) {
    console.error('Erro ao buscar issues: ', error)
    throw error
  }
}
