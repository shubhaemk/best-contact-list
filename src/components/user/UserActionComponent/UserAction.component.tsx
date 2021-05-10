import ButtonComponent from 'components/basic/ButtonComponent';

interface UserActionPropTypes {
  /**
   * title: string - name of the action
   */
  title: string;
  /**
   * primaryAction - name of primary action
   */
  primaryAction: string;
  /**
   * primaryActionHandler: function - action to run when primary action is triggered
   */
  primaryActionHandler: () => void;
}

const UserActionComponent = ({ title, primaryAction, primaryActionHandler }: UserActionPropTypes) => {
  return (
    <div className="user-action">
      <h3 className="title title-dark title-medium">{title}</h3>
      <ButtonComponent buttonText={primaryAction} onButtonClick={primaryActionHandler} />
    </div>
  );
};

export default UserActionComponent;
