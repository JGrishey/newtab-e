import React from "react";

const Link = props => {
  return (
    <td className="site">
      <a className="link" href={props.url}>
        {props.name}
      </a>
    </td>
  );
};

const Sites = () => {
  return (
    <div className="sites">
      <Link url="https://kodiak.wne.edu" name={"Kodiak"} />
      <Link url="https://mail.aol.com/" name={"AOL Mail"} />
      <Link url="https://selfservice.wne.edu/Student" name={"Self Service"} />
      <Link url="https://facebook.com" name={"Facebook"} />
      <Link url="https://twitter.com" name={"Twitter"} />
      <Link url="https://connect2u.wne.edu" name={"Connect2U"} />
    </div>
  );
};

export default Sites;
