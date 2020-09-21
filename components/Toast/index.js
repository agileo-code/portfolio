import { useEffect } from 'react';

export default function Toast({
  duration = 2000,
  message = 'Correcto',
  type = 'error',
  alertOpen = false,
  setAlertOpen = () => {}
}) {
  useEffect(() => {
    if (!alertOpen) return;
    setTimeout(() => setAlertOpen(false), duration);
  }, [alertOpen]);

  return (
    <div
      className={`transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 ease-out duration-500 ${
        !alertOpen
          ? 'opacity-0 scale-0 translate-y-10'
          : 'opacity-100 scale-100 translate-y-0'
      }`}
      role="alert"
    >
      <div className="mx-auto px-2 sm:px-4">
        <div
          className={`p-2 rounded-lg flex items-center ${
            type === 'success'
              ? 'bg-green-300 text-green-900'
              : 'bg-red-300 text-red-900'
          } shadow-lg sm:p-3`}
        >
          <div
            className={`border-l-4 ${
              type === 'success' ? 'border-green-500' : 'border-red-500'
            } py-4 px-2`}
          />
          {message}
        </div>
      </div>
    </div>
  );
}
