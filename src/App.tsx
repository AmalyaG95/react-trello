import "./App.scss";
import Actions from "./components/Actions";
import AddModal from "./components/AddModal";
import ConfirmModal from "./components/ConfirmModal";
import CustomDragLayer from "./components/CustomDragLayer";
import EditModal from "./components/EditModal";
import Sections from "./components/Sections";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { selectGlobalData } from "./redux/selectors";

function App() {
    const { isOpenAddModal, modalName, isOpenConfirmModal, isOpenEditModal } =
        useTypedSelector(selectGlobalData);

    return (
        <>
            <div className="App">
                <h1>Trello Board</h1>
                <Actions />
                <Sections />
            </div>
            <CustomDragLayer />
            {isOpenAddModal && <AddModal name={modalName} />}
            {isOpenConfirmModal && <ConfirmModal name={modalName} />}
            {isOpenEditModal && <EditModal />}
        </>
    );
}

export default App;
