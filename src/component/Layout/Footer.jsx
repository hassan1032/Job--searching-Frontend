import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Hassan Khan</div>
      <div>
        <Link to={"/https://github.com/hassan1032"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"/https://www.linkedin.com/in/hassan-khan-2b0022229/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
