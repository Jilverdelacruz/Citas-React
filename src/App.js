import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";
import {useState, useEffect} from "react"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []) // Al momento de inicializar lo primero que hará es bajarse todo lo que tiene en local Storage, ?? es un operador lógico (Nullish coalescing operator (??) que indica si en caso el lado izquierdo es nulo lo inicilizas como arreglo vacío, esto se hace en caso de alguien elimine el local storage, cuando recargues se pondrá nulo inmediatamente el operador lógico lo pondrá como arreglo
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = id =>{
    
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }


// usar el local storage para que no se elimine los datos al recargar las pestañas

useEffect(()=>{  // sincronizamos para que cuando tenga data mi arreglo su pase al local storage
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
}, [pacientes])

  return (
    <div className="container mx-auto mt-20"> 
        <Header 
        />
      <div className="md:flex mt-12">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
     
    </div>
  );
}

export default App;
