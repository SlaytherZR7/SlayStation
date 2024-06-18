import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Input } from "../components/Input";
import { AvatarUploader } from "../components/AvatarUploader";
import { QuestionsModal } from "../components/QuestionsModal";

export const SignUp = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleAccept = () => {
    setIsTermsModalOpen(false); // Cierra el modal
    setIsChecked(true); // Marca el checkbox
  };

  const handleCloseModal = () => {
    setIsTermsModalOpen(false); // Cierra el modal
    setIsChecked(false); // Desmarca el checkbox
  };

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
  };
  const questions = [
    "What is your favorite color?",
    "What is the name of your first pet?",
    "Where is your birthplace?",
  ];

  return (
    <div className="flex items-center justify-between bg-gray-900 h-screen">
      <div
        className="w-2/4 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images4.alphacoders.com/119/thumb-1920-1194463.jpg)`,
        }}
      ></div>
      <div className="flex items-center justify-center w-2/4 h-full">
        <form className="flex flex-col gap-2 justify-center scale-90">
          <AvatarUploader onAvatarChange={handleAvatarChange} />
          <div className="grid gap-x-6 gap-y-2 md:grid-cols-2">
            <Input
              isRequired={true}
              label="Name"
              placeholder="Slayther"
              id="nombre"
              type="text"
            />
            <Input
              isRequired={true}
              label="Last name"
              placeholder="Zamora"
              id="apellido"
              type="text"
            />
            <Input
              isRequired={true}
              label="Nickname"
              placeholder="Mr-Dudu"
              id="nickname"
              type="text"
            />
            <Input
              isRequired={true}
              label="Phone number"
              placeholder="0987654321"
              id="celular"
              type="phone"
            />
          </div>

          <Input
            isRequired={true}
            label="Email"
            placeholder="slayther.zr@gmail.com"
            id="correo"
            type="email"
          />
          <Input
            isRequired={true}
            label="Password"
            placeholder="********"
            id="contraseña"
            type="password"
          />
          <Input
            isRequired={true}
            label="Confirm password"
            placeholder="********"
            id="confirmar-contraseña"
            type="password"
          />
          <div className="flex items-start mb-2">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the
              </label>
              <span
                onClick={() => setIsTermsModalOpen(true)}
                className="ms-1 text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
              >
                terms and conditions
              </span>
              .
            </div>
          </div>

          <button
            type="button"
            disabled={!isChecked}
            onClick={() => setIsSignUpModalOpen(true)}
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto ${
              !isChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sign Up
          </button>
          <div className="flex gap-1 justify-center">
            <span className="text-white text-sm">
              Do you already have an account?
            </span>
            <Link to="/login" className="text-white italic underline text-sm">
              Log in here
            </Link>
          </div>
        </form>
      </div>

      <QuestionsModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        questions={questions}
      />
      {isTermsModalOpen && (
        <div
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden justify-center items-center w-full h-full flex bg-gray-600 bg-opacity-50"
        >
          <div class="relative p-4 w-full max-w-2xl m-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600 rounded-t">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  class="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={handleAccept}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                onClick={handleCloseModal}
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SignUp;
