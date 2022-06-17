
const Error= ({children}) =>{   /* Con el props children puede agregar varias etiquetas dentro de esa misma variable */

    return(
        <div className="bg-red-400 py-3 rounded-sm text-center mb-2 uppercase font-bold">
                    {children}
        </div>
    )
}

export default Error