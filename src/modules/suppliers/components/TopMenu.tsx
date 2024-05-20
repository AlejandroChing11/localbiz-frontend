'use client';

import { useState } from "react";
import { CiChat1, CiSearch } from "react-icons/ci";
import { FormModal } from "./FormModal";

export function TopMenu() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row gap-2 justify-between">
      <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
          <CiSearch />
        </span>
        <input
          name="leadingIcon"
          id="leadingIcon"
          placeholder="Busca por nombre"
          className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
        />
      </div>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-cyan-600 text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-cyan-800 transition"
        >
          <CiChat1
            className="mr-2"
          />
          Añadir proveedor
        </button>
        <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}