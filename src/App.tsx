import { Fragment } from "react";
import "./index.css";

function App() {
  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    const formElement: any = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbytOD6fLjVtze711rnekXjcN_7hjHgBiImO3Dg2ZF2nC0XW79aiOlidsLhUZLrXS_4C/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    console.log(formElement);
    console.log(formElement);
  };
  return (
    <Fragment>
      <header className=" bg-slate-400">
        <div className="pl-5 pr-5 ml-auto mr-auto max-w-7xl">
          <h1 className="text-center text-red-700 text-xl md:text-3xl lg:text-4xl pt-3 pb-3">
            Siz bilan bog'lanishimiz uchun ma'lumot qoldiring!
          </h1>
        </div>
      </header>
      <main>
        <div className="pl-5 pr-5 ml-auto mr-auto max-w-7xl">
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
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Manzilingiz:
              </label>
              <input
                type="text"
                id="address"
                name="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Manzilingiz"
                required
              />
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
              Tasdiqlash
            </button>
          </form>
        </div>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
