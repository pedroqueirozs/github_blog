import { PostDescriptionContainer, PostHeader } from "./styles";
import IconSeta from "../../assets/icon_seta.svg";
import IconMapPin from "../../assets/map_pin.svg";
import ImageGithub from "../../assets/git_hub.svg";
import IconComments from "../../assets/icon_comments.svg";
import IconLeftArrow from "../../assets/left_arrow_icon.svg";

export function PostDescription() {
  return (
    <PostDescriptionContainer>
      <PostHeader>
        <div className="links">
          <a href="#">
            {" "}
            <img src={IconLeftArrow} alt="" /> VOLTAR
          </a>
          <a href="#">
            {" "}
            VER NO GITHUB <img src={IconSeta} alt="" />{" "}
          </a>
        </div>
        <h3>JavaScript data types and data structures</h3>
        <div className="tags">
          <span>
            {" "}
            <img src={ImageGithub} alt="" />
            pedroqueirozs
          </span>
          <span>
            {" "}
            import IconMapPin from "../../assets/map_pin.svg";
            <img src={IconMapPin} alt="" /> Há 1 dia
          </span>
          <span>
            {" "}
            <img src={IconComments} alt="" /> 5 comentarios
          </span>
        </div>
      </PostHeader>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </PostDescriptionContainer>
  );
}
