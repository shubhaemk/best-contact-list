import ButtonComponent from 'components/basic/ButtonComponent';
import TitleComponent from 'components/basic/TitleComponent';

const TITLE_TEXT: string = 'Contact List';
const BUTTON_TEXT: string = 'Log Out';

const HeaderComponent = ({ actionButtonClickHandler }: { actionButtonClickHandler: () => void }) => {
  return (
    <header className="header-container home-screen-padding">
      <TitleComponent titleText={TITLE_TEXT} />
      <ButtonComponent buttonText={BUTTON_TEXT} onButtonClick={actionButtonClickHandler} />
    </header>
  );
};

export default HeaderComponent;
