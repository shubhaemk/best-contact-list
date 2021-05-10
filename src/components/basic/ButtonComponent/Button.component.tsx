interface ButtonPropTypes {
  /**
   * buttonText: string - string to render for button
   */
  buttonText: string;
  /**
   * onButtonClick: () => void - button click handler
   */
  onButtonClick: () => void;
}

const ButtonComponent = ({ buttonText, onButtonClick }: ButtonPropTypes) => {
  return (
    <button className="button button-primary" type="button" onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
