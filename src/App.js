import './App.css';
import ContactManager from './components/ContactManager';


function App() {
  const contacts = ["Cisco Ramon", "Thomas Anderson", "Bruce Wayne"]
  return (
    <div className="App">
      <ContactManager  data={contacts}/>
    </div>
  );
}

export default App;
