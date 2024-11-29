import {
  ImageAvatar,
  Info,
  NameLinkContainer,
  ProfileContainer,
  TextContent,
} from "./styles";
import IconMapPin from "../../assets/map_pin.svg";
import ImageGithub from "../../assets/git_hub.svg";
import ImageFollowers from "../../assets/followers.svg";
import IconSeta from "../../assets/icon_seta.svg";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export function Profile() {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    async function fetchGitHubUser() {
      const response = await api.get("");
      setUserData(response.data);
    }
    fetchGitHubUser();
  }, []);
  return (
    <ProfileContainer>
      <ImageAvatar>
        <img src={userData?.avatar_url} alt="" />
      </ImageAvatar>

      <TextContent>
        <NameLinkContainer>
          <h1>{userData?.name}</h1>
          <a href="#">
            GITHUB <img src={IconSeta} alt="" />{" "}
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
            {userData?.followers}{" "}
            {userData?.followers > 1 ? "Seguidores" : "Seguidor"}
          </span>
        </Info>
      </TextContent>
    </ProfileContainer>
  );
}
