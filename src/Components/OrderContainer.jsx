import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';
import CookingCard from './Cards/CookingCard';

const OrderContainer = ({promise}) => {
    const orders = use(promise);
   
    const [cookingItems, setCookingItems] = useState([]);
    const handleOrder = (order) =>{
        //age check koro cooking e order ache kina
        const isExist = cookingItems.find((item) => item.id == order.id);
        if(isExist){
            alert("Already Cooking!!");
            return;
        }
        //Cooking Items er vitore click koraa order k dhukabo
        const newCookingItems = [...cookingItems, order];
        setCookingItems(newCookingItems);
    };

    return (
        <div>
            <States orderTotal={orders.length} cookingTotal = {cookingItems.length}></States>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8'>
                <div className='lg:col-span-7'>
                    <h2 className='font-bold text-4xl'>Current Orders</h2>

                    <div className='space-y-5'>
                        {
                            orders.map(item => (<OrderCard key={item.id} handleOrder={handleOrder } order={item}></OrderCard>))
                        }
                    </div>
                </div>

                <div className='lg:col-span-5 space-y-5'>
                    <h2 className='font-bold text-4xl'>Cooking Now</h2>
                    <div className='shadow p-10 space-y-5'>
                        {
                            cookingItems.map((order) => (
                                <CookingCard key={order.id} order={order} ></CookingCard>
                            ))
                        }
                    </div>

                    <h2 className='font-bold text-4xl'>Ready to Serve</h2>

                    <div className='shadow p-10 '>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderContainer;