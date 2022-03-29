import "./App.scss";
import Actions from "./components/Actions";
import Modal from "./components/Modal";
import Sections from "./components/Sections";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { selectGlobalData } from "./redux/selectors";

function App() {
    const { isOpenModal, modalName } = useTypedSelector(selectGlobalData);

    return (
        <>
            <div className="App">
                <h1>Trello Board</h1>
                <Actions />
                <Sections />
            </div>
            {isOpenModal && <Modal name={modalName} />}
        </>
    );
}

export default App;
