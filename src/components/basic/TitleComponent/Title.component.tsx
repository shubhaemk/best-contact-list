interface TitlePropTypes {
  /**
   * titleText: string - title to display
   */
  titleText: string;
}

const TitleComponent = ({ titleText }: TitlePropTypes) => {
  return <h1 className="title title-light title-huge">{titleText}</h1>;
};

export default TitleComponent;
