import { useState } from "react"
import Error from "../Error"
const Formulario = ({pacientes, setPacientes}) =>{

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
        const paciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            error,
            id: generateId()
        }
        
        // Agregar al arreglo y tomar en cuenta el Spread Operator porque se irá acumulando todo dentro del arreglo
        setPacientes([...pacientes, paciente])
        
        // borrar la data una vez agregado
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    
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
                value="AGREGAR PENDIENTE"
                />
                
            </form>
        </div>
        
    )
}

export default Formulario