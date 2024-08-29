import { Fragment, useState } from "react";
import Logo from "./assets/logo.jpg";
import "./index.css";

const countryData = [
  "Andijon",
  "Buxoro",
  "Farg'ona",
  "Jizzax",
  "Xorazm",
  "Namangan",
  "Navoiy",
  "Qashqadaryo",
  "Qoraqalpog'iston Reapublikasi",
  "Samarqand",
  "Sirdaryo",
  "Surxondaryo",
  "Toshkent shahri",
  "Toshkent viloyati",
];

function App() {
  const [isToast, setIsToast] = useState(false);
  const [isToastFalse, setIsToastFalse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    const formElement: any = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbytOD6fLjVtze711rnekXjcN_7hjHgBiImO3Dg2ZF2nC0XW79aiOlidsLhUZLrXS_4C/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((data) => {
        if (data.status >= 200 && data.status <= 299) {
          setIsToast(true);
          setTimeout(() => {
            setIsToast(false);
          }, 5000);
        } else {
          setIsToastFalse(true);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsToastFalse(true);
        setIsLoading(false);
      });
  };
  return (
    <Fragment>
      <header className="relative bg-slate-400">
        <div className="pl-5 pr-5 ml-auto mr-auto max-w-7xl">
          <h1 className="text-center text-red-700 text-xl md:text-3xl lg:text-4xl pt-3 pb-3">
            Siz bilan bog'lanishimiz uchun ma'lumot qoldiring!
          </h1>
        </div>

        {isToast ? (
          <div
            id="toast-success toast-top-left"
            className="flex fixed w-full max-w-xs p-4 space-x-4  divide-x rtl:divide-x-reverse divide-gray-200  right-5  dark:divide-gray-700  items-center    mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 
         top-5"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              Ma'lumotlaringiz muvaffaqiyatli saqlandi.
            </div>
            <button
              onClick={() => {
                setIsToast(false);
              }}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
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
            </button>
          </div>
        ) : null}
        {isToastFalse ? (
          <div
            id="toast-danger"
            className="flex fixed right-5 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              Ma'lumotlaringiz saqlanmadi. Qaytadan urinib ko'ring!
            </div>
            <button
              onClick={() => {
                setIsToastFalse(false);
              }}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-danger"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
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
            </button>
          </div>
        ) : null}
      </header>
      <main>
        <div className="pl-5 pr-5 ml-auto mr-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl ml-auto mr-auto max-w-60 h-auto mt-5">
            <img className="w-full h-full" src={Logo} alt="Logo" />
          </div>
          <form className="pt-5 pb-5 " onSubmit={(e) => Submit(e)}>
            <div className="pb-3">
              <label
                htmlFor="full_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ism va familyangiz:
              </label>
              <input
                type="text"
                id="full_name"
                name="FullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amirov Temur"
                required
              />
            </div>
            <div className="pb-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Manzilingiz:
              </label>
              <select
                id="address"
                name="Address"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                 dark:focus:border-blue-500"
              >
                {countryData.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:flex justify-between gap-5">
              <div className="pb-3 w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefon raqamingiz:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+998901234567"
                  required
                />
              </div>
              <div className="pb-5 w-full">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Biz haqimizda kimdan eshitdingiz:
                </label>
                <select
                  id="countries"
                  name="Message"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                 dark:focus:border-blue-500"
                >
                  <option value="telegramdan">Telegram</option>
                  <option value="instagramdan">Instagram</option>
                  <option value="do'stimdan">Do'stimdan</option>
                  <option value="boshqa">Boshqa</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
               px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? "Kuting..." : "Tasdiqlash"}
            </button>
          </form>
        </div>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
