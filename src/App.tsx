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
      <Projects />
      <ExperienceDropDown />
    </div>
  );
}

export default App;
