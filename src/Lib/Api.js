const API_URL = 'https://api.github.com'

async function getRepos() {
  try {
    const response = await window.fetch(`${API_URL}/users/kodemia/repos`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    })

    if (!response.ok) {
      if (response.status >= 500) {
        window.alert('el servidor murio')
      } else {
        window.alert('ocurrio un error al obeter los Repos')
      }

      return {
        data: {
          repos: [{
            id: 1,
            name: 'name',
            author: 'author',
            description: 'description',
            avatar: 'avatar'
          }
          ]
        }
      }
    }

    const payload = await response.json()

    return {
      data: {
        repos: payload.map((badRepos) => ({
          id: badRepos.id,
          name: badRepos.name,
          description: badRepos.description,
          avatar: badRepos.owner.avatar_url,
          author: badRepos.owner.login
        }))
      }
    }

  } catch (error) {
    console.log('error al obtener el Repo', error)
    return {
      data: {
        repos: [{
          id: 1,
          name: 'name',
          author: 'author',
          description: 'description',
          avatar: 'https://picsum.photos/200/300'
        }]
      }
    }
  }
}

async function getRepo(author, name) {
  try {

    const response = await window.fetch(`${API_URL}/repos/${author}/${name}`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    })
    if (!response.ok) {
      if (response.status >= 500) {
        window.alert('el servidor murio')
      } else {
        window.alert('ocurrio un error al obeter los Repos')
      }

      return {
        data: {
          repo: {
            id: 1,
            name: 'name',
            author: 'author',
            description: 'description',
            avatar: 'https://picsum.photos/200/300'
          }

        }
      }
    }
    const payload = await response.json()
    return {
      data: {
        repo: {
          id: 1,
          name: payload.name,
          author: payload.owner.login,
          description: payload.description,
          avatar: payload.owner.avatar_url

        }
      }
    }
  } catch (error) {
    console.log('error', error)
    return {
      data: {
        repo: {
          _id: '1',
          name: 'nombre',
          author: 'autor',
          description: 'descripción',
          avatar: 'https://picsum.photos/200/300'
        }
      }
    }
  }
}

const api = {
  getRepos,
  getRepo
}

export default api
