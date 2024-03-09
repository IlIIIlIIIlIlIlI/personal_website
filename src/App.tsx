import ExperienceDropDown from './ExperienceDropDown';
import ExperinceChart from './ExperinceChart';
import InteractiveCards from './InteractiveCards';
import Introduction from './Introduction';
import Skills from './Skills';

function App() {
  return (
    <div>
      <Introduction />
      <Skills />
      {/* <ExperinceChart /> */}
      <ExperienceDropDown />
      <InteractiveCards />
    </div>
  );
}

export default App;
