import { Button } from '@mui/material';
import React from 'react';

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  class: String | undefined;
  btnName: String | 'Submit';
};

const DerivedButton = ({ onClick, btnName, ...props }: Props) => {
  return (
    <Button onClick={onClick} {...props}>
      {btnName}
    </Button>
  );
};

export default DerivedButton;
