import React from "react";
import SocialLinkProps from "./social-link.interface";
import { DEFAULT_IMAGE_HEIGHT } from "../../../application/common/sizes";

function SocialLink({
  title,
  image,
  imageAltText,
  imageHeight,
  href,
}: SocialLinkProps) {
  return (
    <a
      style={{ display: "flex", alignItems: "center" }}
      href={href}
      title={title}
    >
      <img
        src={image}
        alt={imageAltText}
        height={imageHeight || DEFAULT_IMAGE_HEIGHT}
      />
    </a>
  );
}

export default SocialLink;
