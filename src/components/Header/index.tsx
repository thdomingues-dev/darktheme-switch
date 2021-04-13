import React from 'react';
import Switch from 'react-switch';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      Hello, TH!

      <Switch
        onChange={() => { }}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </Container>
  );
}

export default Header;