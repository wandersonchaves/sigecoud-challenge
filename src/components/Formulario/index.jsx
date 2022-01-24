import React, { useState } from "react";

import "./styles.css";

import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Formulario() {
  const [cnpj, setCnpj] = useState("");

  const parsed = cnpj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

  return (
    <div className="formulario-container">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-900">
              Sign in to your account
            </h2> */}
            <h2 className="mt-6 text-xl text-sky-900">
              <strong>Seja bem-vindo(a).</strong> Preencha os dados abaixo para
              começar a usar:
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="text-base">
                  E-mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none font-bold rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-blue-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ex: seunome@suaempresa.com.br"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-base">
                  Senha*
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none font-bold rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-blue-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Informe sua senha"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="text-base">
                  Whatsapp*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{11}"
                  autoComplete="current-whatsapp"
                  required
                  className="appearance-none font-bold rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-blue-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ex: (00) 0 0000-0000"
                />
              </div>
              <div>
                <label htmlFor="cnpj" className="text-base">
                  CNPJ*
                </label>
                <input
                  id="cnpj"
                  name="cnpj"
                  type="cnpj"
                  pattern="[0-9]{14}"
                  onChange={(e) => {
                    setCnpj(e.target.value);
                  }}
                  autoComplete="current-cnpj"
                  required
                  className="appearance-none font-bold rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-blue-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ex: 00.000.000/0001-00"
                />
              </div>
            </div>

            <a href="apple.png" download={`${parsed}.json`}>
              <button
                type="button"
                className="mt-6 form-button group relative flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-full text-white bg-lime-500 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                <strong>Comece a usar!</strong>
                <span className="right-0 flex items-center ml-3">
                  <ArrowRightIcon className="h-7 w-full" aria-hidden="true" />
                </span>
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
