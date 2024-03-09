import React from "react";

const SelectionBox: React.FC = () => {
    return (
        <>
            <aside className="w-[16rem] flex flex-col rounded-tl-xl rounded-tr-xl px-5 py-2 bg-gradient-to-t from-red-900 to-red-600 shadow-md">
                <div className="text-white font-bold text-left mr-4">
                    <h2 className="flex flex-cols text-base md:text-xl lg:text-2xl">I am looking for...</h2>
                </div>
            </aside>
            <div className="w-[16rem] h-[10rem] text-center rounded-bl-xl rounded-br-xl border-l border-r border-b border-black z-100 shadow-md">
                <h3 className="py-[1rem] text-xl hover:underline"><a href="#membership">Memberhsip</a></h3>
                <h3 className="py-[1rem] text-xl hover:underline"><a href="#resources">Resources</a></h3>
            </div>
        </>
    );
}

export default SelectionBox;