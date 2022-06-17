import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";
import {useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  return (
    <div className="container mx-auto mt-20"> 
        <Header 
        />
      <div className="md:flex mt-12">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        />
      </div>
     
    </div>
  );
}

export default App;
