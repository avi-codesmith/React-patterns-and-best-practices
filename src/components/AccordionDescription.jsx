import { useAccordionContext } from "./Accordion";
import { useAccordionItem } from "./Accordion-item";

export default function AccordionDescription({ children, className }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItem();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
