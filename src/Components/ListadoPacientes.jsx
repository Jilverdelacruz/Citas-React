
import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente}) =>{
    
    return (
        
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes.length > 0 ? 
            <>
                <h2 className="text-3xl font-black text-center"> Listado Pacientes</h2>

                <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                </p>
                {pacientes.map((paciente)=>(
                    <Pacientes 
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    />
                ))}
            </>
            : 
            <>
            <h2 className="text-3xl font-black text-center"> No Existe Paciente</h2>

            <p className="text-xl mt-5 mb-10 text-center">
            Ingresar los siguientes {''}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>
            {pacientes.map((paciente)=>(
                <Pacientes 
                key={paciente.id}
                paciente={paciente}/>
            ))}
        </> }
            

            
        </div>
        
    )
}
export default ListadoPacientes