import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Pacientes= ({paciente, setPaciente, eliminarPaciente})=>{
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () =>{
        /*const alerta = window.confirm('Seguro deseas eliminar el paciente')
        if(alerta){
           
            eliminarPaciente(id)
        }*/
            Swal.fire({
                title: 'Estás seguro de eliminar?',
                text: "No puedes revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarPaciente(id);  //llamar el prop y enviar el id
                    Swal.fire(
                    'Eliminado!',
                    'Tu cita se ha eliminado.',
                    'success'
                    )
                }
            })
    
    }
    return(
        <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-2">
                <button type="button" onClick={() => setPaciente(paciente)}
                className="py-2 px-1 bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold">
                Editar
                </button>
              
                <button type="button"
                onClick={handleEliminar}
                className="py-2 px-1 bg-red-600 hover:bg-red-700 uppercase text-white font-bold">
                Eliminar
                </button>
            </div>
        </div>
        
    )
}

export default Pacientes