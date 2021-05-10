import { useState } from 'react';
import InputComponent from 'components/basic/InputComponent';
import ButtonComponent from 'components/basic/ButtonComponent';

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const loginHandler = () => {
    if (email.trim() === password.trim() && email.trim() !== '') {
      props.setIsLoggedIn(true);
    } else {
      setError('Enter valid Email and Password!');
    }
  };

  return (
    <div className="login-screen">
      <h1 className="title title-dark title-huge">Contact List Login</h1>
      <form
        className="login-screen-form"
        onSubmit={(event) => {
          event.preventDefault();
          loginHandler();
        }}
      >
        <InputComponent type="text" labelText="Email" value={email} setValue={setEmail} />
        <InputComponent type="password" labelText="Password" value={password} setValue={setPassword} />
        <span className="login-screen-form-error">{error && error}</span>
        <ButtonComponent buttonText="Login" onButtonClick={loginHandler} />
      </form>
    </div>
  );
};

export default LoginScreen;
