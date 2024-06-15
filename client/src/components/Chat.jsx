import React, { useState } from 'react';
import { Message } from './Message';

export const Chat = ({ nickname, photo, message, type }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del chat

    const toggleChat = () => setIsOpen(!isOpen); // Cambia el estado de visibilidad

    return (
        <div className="relative z-50 fixed right-0 bottom-0 mr-4 mb-8">
            {/* Burbuja que actúa como botón */}
            <button onClick={toggleChat} className="flex items-center justify-center w-10 h-10 rounded-full">
                <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="" />
                <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </button>

            {/* Componente de Chat que se muestra/oculta basado en `isOpen` */}
            {isOpen && (
                <div className="flex flex-col h-[500px] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
                        {type}
                    </h5>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">¡Hi!</p>
                    <ul className="my-4 space-y-3">
                        <Message nickname='Mr-DUDU' message='Hello, World!' photo='https://flowbite.com/docs/images/products/apple-watch.png'/>
                    </ul>
                    <form className="flex items-center p-4 w-full">
                        <input
                            type="text"
                            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a message"
                        />
                        <button
                            type="submit"
                            className="ml-2 bg-blue-700 font-medium rounded-lg text-white py-2 px-4 dark:hover:bg-gray-50 dark:focus:ring-blue-800"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
