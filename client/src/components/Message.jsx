import React, { useState, useEffect } from 'react';


export const Message = ({ nickname,message, photo}) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(time);
    };

    updateClock(); // Actualizar la hora al montar el componente
    const timerId = setInterval(updateClock, 1000 * 60); // Actualizar la hora cada minuto

    return () => clearInterval(timerId); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="flex items-start gap-2.5">
        <img className="w-8 h-8 rounded-full" src={photo} alt={nickname} />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {nickname}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {currentTime}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {message}
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
     );
};