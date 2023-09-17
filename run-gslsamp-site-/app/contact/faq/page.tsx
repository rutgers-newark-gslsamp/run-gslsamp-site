import Title from "@/app/components/title";
import question from "/public/question-mark-drop.png"
import Image from "next/image";
import Link from "next/link";

{/**Build COMPONENT for short reusable code */}
export default function Faq() {
    return(
        <>
            <Title title={"Frequently Asked Questions"}/>
            <div className="">
                <div className="grid grid-cols-2 h-full">
                    <div className="border-indigo border-2 grid grid-flow-row text-center p-4 m-4 text-xl">
                        <Link href="#one" className="hover:underline">1. eiusmod tempor incididunt ut labore et dolore magna aliqua?</Link>
                        <Link href="#two" className="hover:underline">2. eiusmod tempor incididunt ut labore et dolore magna aliqua?</Link>
                        <Link href="#three" className="hover:underline">3. eiusmod tempor incididunt ut labore et dolore magna aliqua?</Link>
                        <Link href="#four" className="hover:underline">4. eiusmod tempor incididunt ut labore et dolore magna aliqua?</Link>
                        <Link href="#five" className="hover:underline">5. eiusmod tempor incididunt ut labore et dolore magna aliqua?</Link>
                    </div>
                    <div className="p-4 m-4">
                        <Image
                            src={question}
                            className="mx-8"
                            height={300}
                            width={300}
                            alt="Question mark"
                        />
                    </div>
                </div>
                <div id="one" className="grid grid-flow-row justify-center text-2xl m-4 p-4">
                    <div className="py-8">
                        1. eiusmod tempor incididunt ut labore et dolore magna aliqua?

                        <p className="py-8 px-8">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div id="two" className="py-8">
                        2. eiusmod tempor incididunt ut labore et dolore magna aliqua?

                        <p className="py-8 px-8">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div id="three" className="py-8">
                        3. eiusmod tempor incididunt ut labore et dolore magna aliqua?

                        <p className="py-8 px-8">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div id="four" className="py-8">
                        4. eiusmod tempor incididunt ut labore et dolore magna aliqua?

                        <p className="py-8 px-8">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div id="five" className="py-8">
                        5. eiusmod tempor incididunt ut labore et dolore magna aliqua?

                        <p className="py-8 px-8">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}