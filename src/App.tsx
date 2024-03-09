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
      <InteractiveCards
        backGroundImageLink='/images/desktop_background.png'
        backGroundColour='rgba(255, 255, 255, 0.8)'
      />
    </div>
  );
}

export default App;
