import React, { FC } from 'react';
import { IX } from 'typings/modules/assets';

const X: FC<IX> = ({ onClick }) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      color="#fafafa"
      style={{ padding: '0 10px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

export default X;
