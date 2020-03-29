import React from 'react';
import { Toggle } from 'react-toggle-component';

import { Container } from './styles';

export default function ToggleButton({ theme, toggleTheme }) {
  return (
    <Container theme={theme}>
      <Toggle
         name="toggle-1"
        rightKnobColor="#E02041"
        rightBorderColor="#E02041"
        rightBackgroundColor="#444"
        onToggle={toggleTheme}
      />
    </Container>
  );
}
