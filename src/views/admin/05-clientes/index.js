import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Clientes = () => {
  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30', 'left'],
    ['Nombres', 'min-w-40', 'left'],
    ['Apellidos', 'min-w-40', 'left'],
    ['Email', 'min-w-10', 'left'],
    ['Estado', '', 'center'],
    ['Acciones', '', 'center']
  ]
  const history = useHistory()
  const dataBody = [
    {
      id: 1,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/clientes/editar-cliente')} handleDelete={() => alert('cliente eliminado')} />
    },
    {
      id: 2,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/clientes/editar-cliente')} handleDelete={() => alert('cliente eliminado')}/>
    },
    {
      id: 3,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/clientes/editar-cliente')} handleDelete={() => alert('cliente eliminado')}/>
    },
    {
      id: 4,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/clientes/editar-cliente')} handleDelete={() => alert('cliente eliminado')} />
    },
    {
      id: 5,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/clientes/editar-cliente')} handleDelete={() => alert('cliente eliminado')}/>
    },
    {
      id: 6,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 7,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 8,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 9,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 10,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 11,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 12,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 13,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 14,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 15,
      foto: (
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/38016079_1685679581559176_7469718601927229440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFdP-U8FmK0WDmsQM3vLWnj_OZUsT2WWKD85lSxPZZYoF2Wo_ebIsUtXrZvvD1QUfqMasUn4hjqB4mk_Ll_Uwif&_nc_ohc=BBXn7-Cna38AX8Z_8MK&_nc_ht=scontent.fpiu2-2.fna&oh=27b4354e602ced048ff3799ebb9388e1&oe=619F3FEE"
        />
      ),
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    }

  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
        <Button
          size="sm"
          onClick={() => history.push('/clientes/crear-cliente')}
        >
          Nuevo Cliente
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Clientes
