import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

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
        offColor={colors.text}
        onColor={colors.secundary}
      />
    </Container>
  );
}

export default Header;