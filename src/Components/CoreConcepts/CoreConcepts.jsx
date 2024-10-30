import { CORE_CONCEPTS } from '../../assets/data/data';
import ConceptItem from '../ConceptItem/ConceptItem';
import Section from '../Section/Section';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <ConceptItem key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
