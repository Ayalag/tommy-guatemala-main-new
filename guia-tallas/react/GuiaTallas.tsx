import {useState, useEffect} from 'react'
import { useCssHandles } from 'vtex.css-handles'
import useProduct from 'vtex.product-context/useProduct'

interface GuiaTallasProps {
  specName:string
}

const GuiaTallas: StorefrontFunctionComponent<GuiaTallasProps> = ({specName}) => {

  const CSS_HANDLES = ["GuiaTallas", "GuiaTallasImage"]
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()
  
  const [imagesURL, setImagesURL] = useState<Array<string>>([]);

  useEffect(() => {
    getImageURL();
  }, [product.specificationGroups.lenght]);


  if (!product) {
    return (
      <div>
        <span>No es pagina de producto.</span>
      </div>
    )
  }

  const specifications = product.specificationGroups;

  const getImageURL = () => {
    let result:string[] = [];
    specifications.map((spec:Spec) => {
      if(spec.name === specName){
        spec.specifications.map((s:InsideSpec) => {
          for (var i = 0; i < 1; i++) {
            result.push(s.values[i])
          }
        })
      } 
    });
    setImagesURL(result);
  }
 
  if (imagesURL.length > 0){
    return (
      <div className={`${handles.GuiaTallas}`}>
        {
          imagesURL.map((url:string) => (
            <img src={"/arquivos/" + url} className={`${handles.GuiaTallasImage}`} />
          ))
        }
      </div>
    )
  } else {
    return (
      <div className={`${handles.GuiaTallas}`}>
      </div>
    )
  }

}

interface Spec {
  name: string;
  originalName: string;
  specifications: [];
}

interface InsideSpec {
  name: string;
  originalName: string;
  values: [];
  __typename:string;
}

GuiaTallas.schema = {
  type: 'object',
  properties: {
    specName: {
      title: 'Nombre',
      description: 'Nombre de la especificacion',
      type: 'string',
      default: null,
    },
  },
}

export default GuiaTallas
