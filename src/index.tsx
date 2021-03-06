import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'styles/main.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
