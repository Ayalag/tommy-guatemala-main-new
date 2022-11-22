import { useEffect, useState } from 'react';
import { exampleUtil } from '../utils/example-block';

const useExampleBlock = (exampleProps: ExampleProps) => {
  const [state, setState] = useState({
    text: '000',
    customStyles: {},
  });
  const { text, customStyles } = state;

  const handleExample = () => {
    setState((prev) => ({ ...prev, text: '10' }));
  };
  const handleStyle = () => {
    setState((prev) => ({ ...prev, customStyles: { display: 'none' } }));
  };

  useEffect(() => {
    const { newText } = exampleProps;
    setState((prev) => ({ ...prev, text: newText }));
  }, [exampleProps]);

  return {
    text: exampleUtil(text),
    handleExample,
    handleStyle,
    customStyles,
  };
};

export default useExampleBlock;
