import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent imgSrc="https://images.pexels.com/photos/1804169/pexels-photo-1804169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" imgAlt="imamgine generica"/>
        <ButtonComponent buttonText="Click Me!"/>
      </header>
    </div>
  );
}

export default App;
