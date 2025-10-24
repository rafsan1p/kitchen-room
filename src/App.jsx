import Navbar from './Components/Navbar'
import './App.css'
import Heading from './Components/Heading';

const App = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </header>
            <section>
                <Heading></Heading>
            </section>
        </div>
    );
};

export default App;
