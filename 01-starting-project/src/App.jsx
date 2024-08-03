import { useState } from 'react';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/tabButton.jsx';
import componentImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';
import { EXAMPLES ,CORE_CONCEPTS} from './data.js';



function App() {
  const [selectedTopic, setSelecterTopic] = useState('');
  function handleSelect(selectedButton) {
    console.log('Clicked!!! ::' + selectedButton);
    setSelecterTopic(selectedButton)
  }
  let tabContent = <p>Please Select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>(<CoreConcept key={item.title} {...item }/>))}
            {/* <CoreConcept image={componentImg} title='Components'
              description='Components are independent and reusable bits of code.
             They serve the same purpose as JavaScript functions, but work in isolation and return HTML.'/>
            <CoreConcept image={jsxImg} title='JSX'
              description='JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.' />
            <CoreConcept image={propsImg} title='Props'
              description='Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
            '/>
            <CoreConcept image={stateImg} title='State'
              description='React components has a built-in state object. The state object is where you store property values that belong to the component.' /> */}

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
