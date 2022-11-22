import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import useProduct from 'vtex.product-context/useProduct'


const GuiaTallasTrigger = ({Trigger, specName}) => {

  const CSS_HANDLES = ["GuiaTallasTrigger"]
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()

  if (!product) {
    return (
      <div>
        <span>No es pagina de producto.</span>
      </div>
    )
  }

  const specifications = product.specificationGroups;

  if (specifications.length > 0 && specifications.filter(e => e.name === specName).length > 0){
    return (
      <div className={`${handles.GuiaTallasTrigger}`}>
        <Trigger />
      </div>
    )
  } else {
    return (
      <div className={`${handles.GuiaTallasTrigger}`}>
      </div>
    )
  }

}


export default GuiaTallasTrigger
