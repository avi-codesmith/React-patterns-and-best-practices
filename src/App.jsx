import Accordion from "./components/Accordion";
import Place from "./components/place";
import { PLACES } from "./components/places";
import SearchableList from "./components/SearchableList/SearchableList";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="1"
            title="This is just best!"
            className="accordion-item"
          >
            <article>
              <Accordion.Title className="accordion-item-title">
                You are luckiest animal in this whole world! ▼
              </Accordion.Title>
              <Accordion.Description className="accordion-item-content">
                We are in the business which is made for animals like you!
              </Accordion.Description>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="2"
            title="This is the right place!"
            className="accordion-item"
          >
            <article>
              <Accordion.Title className="accordion-item-title">
                You are luckiest animal in this whole world! ▼
              </Accordion.Title>
              <Accordion.Description className="accordion-item-content">
                We are in the business which is made for animals like you!
              </Accordion.Description>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["1", "2", "3"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
