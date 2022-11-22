# Componente Guia de Tallas

Para invocar los items necesarios hay que usar el siguiente codigo en un jsonc separado.


```

{
    "rich-text#encontrar-talla": {
        "props": {
            "text": "[Encontrar mi talla](#)"
        }
    },
    "modal-trigger#tallas-trigger": {
        "children": [
            "rich-text#encontrar-talla",
            "modal-layout#tallas-modal"
        ]
    },
    "modal-layout#tallas-modal": {
        "children": [
            "flex-layout.row#guia-tallas"
        ],
        "props":{
            "blockClass": "tallas-modal"
        }
    },
    "flex-layout.row#guia-tallas":{
        "children":[
            "guia-tallas-content#spec"
        ],
        "props":{
          "blockClass":"wrapper-guia-tallas",
          "preventHorizontalStretch":true
        }
    },
    "guia-tallas-content#spec" : {
        "props":{
            "specName" : "tallas"
        }
    },
    "guia-tallas-trigger#trigger" : {
        "props":{
            "Trigger": "modal-trigger#tallas-trigger",
            "specName" : "tallas"
        }
    }
}

```

### Funcionamiento del trigger

```

  "guia-tallas-trigger#trigger" : {
        "props":{
            "Trigger": {componente de trigger},
            "specName" : {nombre de la especificacion} 
        }
    }

```

### Funcionamiento del Modal

```

 "guia-tallas-content#spec" : {
        "props":{
            "specName" : {nombre de la especificacion}
        }
 }

```