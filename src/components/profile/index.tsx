import {
  ImageAvatar,
  Info,
  NameLinkContainer,
  ProfileContainer,
  TextContent,
} from './styles'
import IconMapPin from '../../assets/map_pin.svg'
import ImageGithub from '../../assets/git_hub.svg'
import ImageFollowers from '../../assets/followers.svg'
import IconSeta from '../../assets/icon_seta.svg'
import { fetchGitHubUser } from '../../lib/axios'
import { useEffect, useState } from 'react'

export function Profile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetchGitHubUser()
        setUserData(data)
      } catch (error) {
        console.error('Erro ao carregar dados do usuario: ', error)
      }
    }
    getUserData()
  }, [])
  return (
    <ProfileContainer>
      <ImageAvatar>
        <img src={userData?.avatar_url} alt="" />
      </ImageAvatar>

      <TextContent>
        <NameLinkContainer>
          <h1>{userData?.name}</h1>
          <a href="https://github.com/pedroqueirozs" target="blank">
            GITHUB <img src={IconSeta} alt="" />{' '}
          </a>
        </NameLinkContainer>
        <p>{userData?.bio}</p>
        <Info>
          <span>
            <img src={ImageGithub} alt="" />
            {userData?.login}
          </span>
          <span>
            <img src={IconMapPin} alt="" />
            {userData?.location}
          </span>
          <span>
            <img src={ImageFollowers} alt="" />
            {userData?.followers}{' '}
            {userData?.followers > 1 ? 'Seguidores' : 'Seguidor'}
          </span>
        </Info>
      </TextContent>
    </ProfileContainer>
  )
}
