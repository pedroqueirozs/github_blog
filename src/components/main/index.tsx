import { Posts } from "../posts";
import { Profile } from "../profile";
import { Search } from "../search";
import { MainContainer } from "./styles";

export function Main() {
  return (
    <MainContainer>
      <Profile />
      <Search />
      <Posts />
    </MainContainer>
  );
}
