import React from 'react';

const ReadyCard = ({ order }) => {
    return (
        <div className='shadow p-5 border rounded-xl border-black bg-green-100'>
            <h2 className='text-xl font-bold text-green-500'>{order.order_title}</h2>
            <p className='mt-3'>Table No: {order.table_no}</p>
            <p>Waiter Id: {order.waiterId}</p>
        </div>
    );
};

export default ReadyCard;