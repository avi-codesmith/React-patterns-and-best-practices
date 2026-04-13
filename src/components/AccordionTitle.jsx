import { useAccordionContext } from "./Accordion";
import { useAccordionItem } from "./Accordion-item";

export default function AccordianTitle({ children, className }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItem();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
