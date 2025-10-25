import Navbar from './Components/Navbar'
import Heading from './Components/Heading';
import OrderContainer from './Components/OrderContainer';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';


const loadOrders = () => fetch("/orders.json").then((res) => res.json());


const App = () => {
    const ordersPromise = loadOrders();
    return (
        <div>
            <header className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </header>
            <section>
                <Heading>Kitchen Room</Heading>
            </section>
            <section>
                <Suspense fallback={"Loading ..."}>
                    <OrderContainer promise={ordersPromise}></OrderContainer>
                </Suspense>
            </section>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default App;
