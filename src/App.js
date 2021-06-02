import Contacts from './Components/Contacts/Contacts';
import MenuBar from './Components/MenuBar/MenuBar';
import logo from './logo.svg';
import './styles/App.scss';
import {Provider} from "react-redux";
import { store } from './Redux/store/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MenuBar/>
        <div className="container">
          <div className="py-3">
            <Contacts/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
