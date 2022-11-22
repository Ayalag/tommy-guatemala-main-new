import React, { FC } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import CustomComponent from '../../components/example-block/custom-component';
import CSS_HANDLES from './css-handles';
import './styles.css';

const GiftCardLayout: FC = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const exampleProps = { newText: 'example' };

  return (
    <div className={handles['gc-container']}>
      <CustomComponent exampleProps={exampleProps} />
    </div>
  );
};

export default GiftCardLayout;
