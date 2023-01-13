import './App.css';
import {Button, Pagination} from "@surfnet/sds";
import {useState} from "react";

function App() {

    const [nbr, setNbr] = useState(1);

    return (
        <div className="main-app sds--color-palette--blue">
            <h1>Is this Nunito</h1>
            <Button onClick={() => alert('Hi')} txt={"Does this work?"}/>
            <Pagination onChange={newNbr => setNbr(newNbr)} currentPage={nbr} total={120}/>
        </div>
    );
}

export default App;
