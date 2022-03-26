import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './modules';
import './styles/index.less';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

