import { useState, useEffect } from "react"
import Error from "../Error"
const Formulario = ({pacientes, setPacientes, paciente}) =>{
   
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)
    
    
    const generateId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    
    const  handleSubmit = (e) => {
        e.preventDefault()
        
        //validacion
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        }else{
            setError(false)
        }

        // primero guardar la data a un objeto
        const obPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
        }
        
        // En caso de querer editar 
        if(paciente.id){
         /*  console.log(paciente)  // mi objeto paciente si tiene el id
           console.log(obPaciente) // el objeto al querer guardar lo editado no tendrá el id porque no lo tiene en este objeto*/
          obPaciente.id = paciente.id 
           console.log(obPaciente) // el objeto ya tiene un id
           console.log(paciente)
           const pacienteActualizado = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? obPaciente : pacienteState )
            setPacientes(pacienteActualizado)
        }else{
            obPaciente.id = generateId()  // el id solo se agrfegar cuando agregas un paciente mas no cuando edites
            // Agregar al arreglo y tomar en cuenta el Spread Operator porque se irá acumulando todo dentro del arreglo
            setPacientes([...pacientes, obPaciente])
        }
        
        
        // borrar la data una vez agregado
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    // Antwa dar editar se colocan la data en el formulario
     useEffect(() =>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            
        } // indica que el Object.key si no tiene nada te bota un array y ya tendríamos acceso al método length para ver si tiene contenido

         // si la la consola estuviera fuera del UseEffect se ejecutaría cada vez que se digite en que cada campo del formulario, pero como ahora está en el useEffect, solo se ejecutará cuando cambie el usestate "paciente" es decir de vaciío empieza a tener el primer contenido y recien se ejecuta la consola, se renderiza una sola vez
    }, [paciente])

    /*   useEffect(() =>{
        console.log(paciente)  
    }, [])  si no se coloca nada entre llaves solo se ejecutará la primera vez una vez que el componente se encuentre listo, por ejemplo si creamos este mismo useEffect en componente clientes, la consola se ejecutará reciendo cuando agregues un paciente, porque ahí es donde recien aparece el componente de pacientes*/

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}
            >
                {error &&   <Error> 
                    <p>esta opción no es necesario meterlo al prop</p>
                    <p>Existen Campos Vacíos </p>
                    </Error>              }
                <div className="mb-2">
                    <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="mascota"
                    >Nombre de la Mascota</label>
                    <input type='text'
                    id="mascota"
                    placeholder="Nombre de la Mascota"
                    className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md outline-indigo-500"
                    value={nombre}
                    onChange={(e) =>{ setNombre(e.target.value)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="propietario"
                    >Nombre del Propietario</label>
                    <input type='text'
                    id="propietario"
                    placeholder="Nombre del Propietario"
                    className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md outline-indigo-500"
                    value={propietario}
                    onChange={(e) =>{ setPropietario(e.target.value)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="email"
                    >EMAIL</label>
                    <input type='email'
                    id="email"
                    placeholder="Email del contacto - Propietario"
                    className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md outline-indigo-500"
                    value={email}
                    onChange={(e) =>{ setEmail(e.target.value)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="alta"
                    >Alta</label>
                    <input type='date'
                    id="alta"
                    className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md outline-indigo-500"
                    value={fecha}
                    onChange={(e) =>{ setFecha(e.target.value)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 uppercase font-bold"
                    htmlFor="sintomas"
                    >Sintomas</label>
                    <textarea 
                    id="sintomas"
                    className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md outline-indigo-500"
                    placeholder="Describe los síntomas"
                    value={sintomas}
                    onChange={(e) =>{ setSintomas(e.target.value)}}
                    />
                </div>
                <input 
                type="submit"
                className="bg-indigo-600 w-full py-2 text-white uppercase font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
                value={paciente.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE'}
                />
                
            </form>
        </div>
        
    )
}

export default Formulario