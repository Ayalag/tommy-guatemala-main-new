import React, { FC } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import useExampleBlock from '../../../hooks/useExampleBlock';
import CSS_HANDLES from './css-handles';
import './styles.css';

const ICustomComponent: FC<ICustomComponent> = ({ exampleProps }) => {
  const { text, handleExample, handleStyle, customStyles } = useExampleBlock(exampleProps);
  const handles = useCssHandles(CSS_HANDLES);

  const handleButton = () => {
    handleExample();
    handleStyle();
  };

  return (
    <div role="banner" className={handles['example-block']} style={customStyles}>
      <label>
        {text}
        <button type="button" onClick={handleButton} onKeyPress={handleButton}>
          example button
        </button>
      </label>
    </div>
  );
};

export default ICustomComponent;
