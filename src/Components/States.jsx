import { CookingPot, Heater, ScrollText } from 'lucide-react';
import React from 'react';

const States = ({ orderTotal, cookingTotal }) => {
    return (
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {/* total order */}
            <div className="border-4 border-dotted rounded-2xl border-amber-400 p-7">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <ScrollText className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Current Orders
                        <h2 className="text-6xl font-bold">{orderTotal}</h2>
                    </div>
                </div>
            </div>

            {/* total cooking */}
            <div className="border-4 border-dotted rounded-2xl border-amber-400 p-7">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <Heater className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Currently Cooking
                        <h2 className="text-6xl font-bold">{cookingTotal}</h2>
                    </div>
                </div>
            </div>

            {/* total ready */}
            <div className="border-4 border-dotted rounded-2xl border-amber-400 p-7">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <CookingPot className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Ready to Serve
                        <h2 className="text-6xl font-bold">{0}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States; 
