import ExperienceDropDown from './ExperienceDropDown';
import ExperinceChart from './ExperinceChart';
import Projects from './Projects';
import Introduction from './Introduction';
import Skills from './Skills';
import EndNote from './EndNote';

function App() {
  return (
    <div>
      <Introduction />
      <Skills />
      {/* <ExperinceChart /> */}
      <Projects />
      <ExperienceDropDown />
      <EndNote />
    </div>
  );
}

export default App;
