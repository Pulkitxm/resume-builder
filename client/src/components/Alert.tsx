import { useRecoilState } from "recoil";
import { alertAtom } from "../state/alert";
import { useEffect } from "react";

export default function Alert() {
  const [alert, setAlert] = useRecoilState(alertAtom);
  useEffect(() => {
    const timout = setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 3000);
    return () => clearTimeout(timout);
  }, [alert.show, setAlert]);
  if (!alert.show) return;

  if (alert.type === "success") {
    return (
      <div
        className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30 fixed bottom-6 right-6"
        role="alert"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3">
            <h3 className="text-gray-800 font-semibold dark:text-white">
              Success
            </h3>
            <p className="text-sm text-gray-700 dark:text-neutral-400">
              {alert.message}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (alert.type === "error") {
    return (
      <div
        className="bg-red-50 border-t-4 rounded-lg border-red-500 p-4 dark:bg-red-800/30 fixed bottom-6 right-6"
        role="alert"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3">
            <h3 className="text-gray-800 font-semibold dark:text-white">Error!</h3>
            <p className="text-sm text-gray-700 dark:text-neutral-400">
              {alert.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="bg-yellow-50 border-t-2 border-yellow-800 rounded-lg p-4 dark:bg-yellow-800/30 fixed bottom-6 right-6"
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="inline-flex justify-center items-center size-7 rounded-full border-4 border-yellow-100 bg-yellow-200 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-800 dark:text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            Warning
          </h3>
          <p className="text-sm text-gray-700 dark:text-neutral-400">
            {alert.message}
          </p>
        </div>
      </div>
    </div>
  );
}