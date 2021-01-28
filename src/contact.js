import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="content">
      <div className="title">
        <h1>
          <p>CON</p>
          <p>TACT.</p>
        </h1>
      </div>
      <div className="body">
        <p>
          <MdEmail /> email@gmail.com
        </p>
        <p>
          <FaLinkedinIn /> /amytrick
        </p>
        <p>
          {" "}
          <FaGithub /> /amytrick
        </p>
      </div>
    </div>
  );
}
