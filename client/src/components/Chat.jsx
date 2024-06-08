import React from 'react';
import { Message } from './Message';

export const Chat = ({ nickname, photo, message, type }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
        {type}
      </h5>
      <br />
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        How can we help you {nickname}, talk to our support technicians?
      </p>
      <ul className="my-4 space-y-3">
          <Message 
            nickname='Mr-DUDU'
            message='Hello, World!'
            photo='https://flowbite.com/docs/images/products/apple-watch.png'
          />
      </ul>
      <div class="mt-8">
        <form class="max-w-sm mx-auto">
          <div class="flex items-end">
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a message"
            />
            <button
              type="submit"
              class="bg-blue-700 font-medium rounded-lg py-2 px-2 text-center dark:hover:bg-gray-50 dark:focus:ring-blue-800 ml-2"
            >
              <svg
                class="h-5 w-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
