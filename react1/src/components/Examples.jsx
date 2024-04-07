import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please Click a Button.</p>;

    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
            </div>
    }

    function handleSelect(selectedButton) {
        // selectedButton -> 'components', 'jsx' ...
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs ButtonContainer="menu"
                  buttons={<>
                      <TabButton isSelected={selectedTopic === 'components'}
                                 onSelect={() => handleSelect('components')}
                      >Components</TabButton>
                      <TabButton isSelected={selectedTopic === 'jsx'}
                                 onSelect={() => handleSelect('jsx')}
                      >JSX</TabButton>
                      <TabButton isSelected={selectedTopic === 'props'}
                                 onSelect={() => handleSelect('props')}
                      >Props</TabButton>
                      <TabButton isSelected={selectedTopic === 'state'}
                                 onSelect={() => handleSelect('state')}
                      >State</TabButton>
                  </>}>
                {tabContent}
            </Tabs>
            <menu>

            </menu>
        </Section>
    );
};