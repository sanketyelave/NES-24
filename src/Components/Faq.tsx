'use client';
import { useState } from "react";
import Image from 'next/image';





// list of all questions and answers for the FAQ section
const questions = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: `Lorem ipsum dolor sit amet consectetur adipisicing elit?`,
        answer:
            "Yes, you can change your plan at any time. If you upgrade, you will be prorated the remaining balance of your current plan. If you downgrade, you will be credited on your next invoice.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "You can cancel your subscription at any time. If you cancel, you will be billed for the current month, but you won't be billed again.",
    },
    {
        question: " Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "Yes, you can add your company's name, address, and VAT number to your invoice. You can also add a custom footer to your invoice.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "You will be billed monthly or annually, depending on your plan. You can cancel your subscription at any time.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "You can change your account email from your account settings. If you have any trouble, please contact us.",
    },
    {
        question: " Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "You can change your account email from your account settings. If you have any trouble, please contact us.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "You can change your account email from your account settings. If you have any trouble, please contact us.",
    },

];


const Faq = () => {
    // state to toggle the answer display
    const [question, setQuestion] = useState<number | null>(null);

    // function to toggle the answer display
    const toggle = (index: number) => {
        if (question === index) {
            setQuestion(null);
        } else {
            setQuestion(index);
        }
    };




    return (
        <main>
            <section className="flex flex-col bg-[#AD88C6] gap-12 pb-[12rem]" id="faq">

                <section className="flex flex-col bg-[#AD88C6]  pb-[3rem]" id="faq">

                    <div className="flex flex-col w-[100%] mx-auto mt-[3rem] text-center text-[#E5C393] ">
                        <div className="w-[100%] mx-auto hero-txt-magic text-[3rem]">
                            FAQS
                        </div>
                    </div>

                    <div className="relative z-10 ">
                        <div
                            className="left-[-64%] sm:left-[-60%] md:left-[-59%] lg:left-[-58%] xl:left-[-53%] top-[5%] bottom-[20%]  md:bottom-10 h-[20rem]"
                            style={{
                                position: 'absolute',
                                backgroundColor: '#FFE6E6',
                                width: '50%',
                                boxShadow: '0 0 90px 90px #FFE6E6',
                                borderRadius: '0 80% 80% 0',

                            }}
                        />

                    </div>

                    <img
                        src="/Assets/faqbg.png"
                        alt="Right Bottom Background"
                        className="right-image absolute mt-[8rem] md:mt-[16rem] h-[26rem] w-full "

                    />
                </section>

                <ul className="flex flex-col gap-8 w-[75%] mx-auto relative z-20 hero-txt">
                    {questions.map((q, index) => (
                        <li key={q.question}>
                            <div
                                className={`${index !== -1 ? "rounded-[0.77075rem] bg-opacity-50 text-[#7469B6] bg-gray-300 inset-shadow " : ""
                                    } gap-[0.3rem] flex flex-col`}
                            >
                                <div
                                    className="flex flex-col justify-between cursor-pointer py-2 "
                                    onClick={() => {
                                        toggle(index);
                                    }}
                                    style={{
                                        borderRadius: '0.77075rem',
                                        background: 'rgba(224, 224, 224, 0.10)',
                                        boxShadow: '0px 2.055px 7.687px 0px rgba(248, 248, 248, 0.38) inset',
                                    }}
                                >

                                    <div className="text-start ml-4 " >

                                        <div className="text-start ml-4   " >

                                            <span className=" text-black">{`0${index + 1}`}</span>
                                            <span className=" ml-6">{`${q.question}`}</span>
                                        </div>
                                        <div

                                            className={`float-right my-auto mr-4 transform ${question === index ? 'rotate-180' : ''}`}



                                        >
                                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.6771 2.44076L14.9459 12.3049L2.21469 2.44076" stroke="#000" strokeWidth="4.25414" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className={`text-start mx-auto transition-transform ease-out duration-300 z-50 ${question === index
                                            ? "scale-100 translate-y-0 p-[2rem] bg-opacity-0"
                                            : "scale-y-0 -translate-y-[50%] h-0"
                                            }`}

                                    >
                                        {q.answer}
                                    </div>
                                </div >
                            </div>
                        </li >
                    ))}
                </ul >
            </section>

        </main>
    )
}

export default Faq;