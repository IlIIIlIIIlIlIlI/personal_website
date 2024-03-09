import ExperienceDropDown from './ExperienceDropDown';
import ExperinceChart from './ExperinceChart';
import Projects from './Projects';
import Introduction from './Introduction';
import Skills from './Skills';

function App() {
  return (
    <div>
      <Introduction />
      <Skills />
      {/* <ExperinceChart /> */}
      <ExperienceDropDown />
      <Projects />
    </div>
  );
}

export default App;
