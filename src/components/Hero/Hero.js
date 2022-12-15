import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido!
          <br />
          Mi portfolio personal
        </SectionTitle>
        <SectionText>
          Con este medio te muestro mis habilidades como desarrollador de software / desarrollador web.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Saber más</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;