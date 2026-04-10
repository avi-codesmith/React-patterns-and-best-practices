import Accordion from "./components/Accordion";
import AccordionItem from "./components/Accordion-item";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="1"
            title="This is just best!"
            className="accordion-item"
          >
            <article>
              <p>You will be the best by using that!</p>
              <p>We are in the business which is made for people like you!</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="2"
            title="This is the right place!"
            className="accordion-item"
          >
            <article>
              <p>You are luckiest animal in this whole world!</p>
              <p>We are here for you!</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
