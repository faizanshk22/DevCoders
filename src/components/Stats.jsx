import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
    {
        num: 4,
        text: "Years of experience",
    },
    {
        num: 8,
        text: "Projects Completed",
    },
    {
        num: 11,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code Commits",
    },
];

function Stats() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    return (
        <div className='container ml-4 mt-[10vh] pt-2 xl:pt-0 pb-2 xl:pb-0'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => (
                    <div 
                        className='flex-1 flex gap-4 items-center justify-center xl:justify-start bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-4 md:p-6 shadow-lg w-full sm:w-auto' 
                        key={index}
                    >
                        {startAnimation && (
                            <CountUp end={item.num} duration={5} delay={2} className='text-3xl sm:text-4xl xl:text-6xl text-white font-extrabold' />
                        )}
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 text-sm sm:text-base xl:text-lg`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;
