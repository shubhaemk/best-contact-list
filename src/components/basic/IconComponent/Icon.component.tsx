interface IconComponentPropTypes {
  /**
   * url: string - url for icon image
   */
  url: string;
  /**
   * altText: string - text to show to screen reader
   */
  altText: string;
}

const IconComponent = ({ url, altText }: IconComponentPropTypes) => {
  return <img className="icon" src={url} alt={altText} />;
};

export default IconComponent;
