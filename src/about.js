import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function About() {
  return (
    <ul>
      <h1>
        <p>AB</p>
        <p>OUT.</p>
      </h1>
      <p>Amy Trick</p>
      <IconContext.Provider value={{ size: "2.5em" }}>
        <div>
          <FaGithub />
          <FaLinkedinIn />
        </div>
      </IconContext.Provider>
    </ul>
  );
}
