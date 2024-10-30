import Header from './Components/Header/Header';
import CoreConcepts from './Components/CoreConcepts/CoreConcepts.jsx';
import Examples from './Components/Examples/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;