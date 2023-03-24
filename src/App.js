import './App.css';
import Lesson from './todo_app/Lesson';
import {Provider} from "react-redux";
import store from "./todo_app/store";


function App() {
    return (
        <Provider store={store}>
            <Lesson/>
        </Provider>
    );
}

export default App;
