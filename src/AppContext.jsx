import { useContext } from 'react';
import Heading from './Heading.jsx';
import { LevelContext } from './LevelContext';



export default function AppContext() {
  return (
    <Section >
      <Heading>Title</Heading>
      <Section >
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Section>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Section>
            <Heading >Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}


function Section({ children }) {
    const level = useContext(LevelContext)
    return (
        <section className="section">
            <LevelContext value={level + 1}>
            {children}
            </LevelContext>
      </section>
    );
  }
  