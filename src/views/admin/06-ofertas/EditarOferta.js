import Heading from '../../../components/Heading'
import InputText from '../../../components/Forms/InputText/InputText'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import { useHistory } from 'react-router'
import { useModal } from '../../../hooks/useModal'
import Galerias from '../08-galerias'
import Modal from '../../../components/Modales/Modal'

const EditarOferta = () => {
  const history = useHistory()
  const [isOpenModal, openModal, closeModal] = useModal(false)
  return (
    <div className=" md:rounded bg-white px-4 md:px-10 py-10">
      <div className="flex justify-center pt-3 relative">
        <span
          onClick={() => history.goBack()}
          className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white rounded-full"
        >
          <IconBackArrow />
        </span>
        <Heading>Editar Oferta</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full py-10 md:px-10 md:shadow-lg  mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <InputText
            name="oferta"
            label="Oferta"
            placeholder="Ingrese el tipo de oferta"
          />
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese el Titulo"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <InputText
            name="fechaInicio"
            label="Fecha de Inicio"
            type="date"
          />
          <InputText
            name="fechaFinal"
            label="Ingrese la fecha de caducidad de la oferta"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center mb-5 ">
          <div className="sm:w-1/2 flex items-center justify-evenly w-full ">
            <Button onClick={openModal}>Imágen Principal</Button>
            <div className="border-dashed border-2 border-primary w-30 h-30 shadow-lg">
              <img
                src=""
                alt="sube la imágen principal"
                className="text-gray-500 text-md text-center "
              />
            </div>
          </div>
          <div className="sm:w-1/2 flex items-center justify-evenly w-full">
            <Button onClick={openModal}>Imágen Secundaria</Button>
            <div className="border-dashed w-30 h-30 border-2 border-primary shadow-lg">
              <img
                src=""
                alt="sube la imágen secundaria"
                className="text-gray-500 text-md text-center "
              />
            </div>
          </div>
        </div>

        <div className="my-10 text-center">
          <Button variant="primary" size="lg">
            ACTUALIZAR
          </Button>
        </div>
      </form>
      <Modal closeModal={closeModal} isOpen={isOpenModal}>
        <Galerias opcion={true} />
      </Modal>
    </div>
  )
}

export default EditarOferta
