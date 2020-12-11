import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramComp = () => {
  return (
    <InstagramEmbed
      clientAccessToken="982232292263767|60af9d31ba0df4e4dd6ce24166ed553c"
      url="https://www.instagram.com/p/B_uf9dmAGPw/"
      maxWidth={375}
      hideCaption={false}
      containerTagName="div"
      injectScript
      protocol=""
    />
  );
};

export default InstagramComp;
