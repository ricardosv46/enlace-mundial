import { useEffect, useState } from 'react'

import Imagen from '../Image'
import ModalSelectImage from '../Modales/ModalSelectImage'

const SelectImage = ({
  value,
  label = 'Agregar imagen',
  onChange = () => {}
}) => {
  const [image, setImage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (value) setImage(value)
  }, [value])

  const handleSelect = (img) => {
    setImage(img)
    onChange(img)
    console.log(img)
    // setIsOpen(false)
  }

  return (
    <div className="w-full h-full">
      <div
        onClick={() => setIsOpen(true)}
        className="w-full h-full cursor-pointer"
      >
        {/* eslint-disable */}
        {!image ? (
          <div className="grid place-items-center border border-gray-400 w-full h-full">
            <p className="text-gray-400">{label}</p>
          </div>
        ) : (
          <Imagen src={image.url} alt={image.descripcion} />
        )}
      </div>
      <ModalSelectImage
        isOpen={isOpen}
        onChange={handleSelect}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default SelectImage