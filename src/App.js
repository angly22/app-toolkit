import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
// para pasar la store a todos los componentes de la app usamos el provider
 
//redux
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    <UserList/>
        </Provider>
  );
}

export default App;
