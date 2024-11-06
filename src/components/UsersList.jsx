import { useFetchData } from "../hooks/useFetchData"


export const UsersList = ({url}) => {
    const { data, loading } = useFetchData({url})

  return (
    <>
        <ul>

            { loading ? <p>Cargando...</p> :
            url === 'users' 
            ?
                data.map(user => 
                    <li key={user.id}>
                    <p> Nombre: {user.name} Email: {user.email}</p>
                    <span>Teléfono: {user.phone}</span>
                    </li>) 
            :   data.map(comentario => 
                    <li key={comentario.id}>
                    <p>Nombre: {comentario.name}</p>
                    <span>Comentario: {comentario.body}</span>
                    <span>Email: {comentario.email}</span>
                    </li>)
            }
        </ul>
    </>
  )
}
