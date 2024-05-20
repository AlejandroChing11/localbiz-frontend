import { Dialog, DialogPanel } from "@tremor/react";
import { useForm } from "react-hook-form";
import { postSupplier } from "../requests";

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

interface FormValues {
  supplier_name: string;
  debt: number;
}

export function FormModal({ isOpen, setIsOpen }: Props) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    postSupplier(data)
    setIsOpen(false)
    reset()
  }

  return (
    <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
      <DialogPanel
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold">¡Añade un proveedor!</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4"
        >
          <label
            htmlFor="supplier_name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre del proveedor
          </label>
          <input
            type="text"
            id="supplier_name"
            defaultValue={""}
            {...register("supplier_name", { required: true })}
            className="mt-1 block w-full px-3 py-2.5 rounded-xl text-sm text-gray-600 border border-gray-300 focus:border-cyan-300 focus:outline-none transition"
          />
          {errors.supplier_name && <span className="text-red-500">Este campo es requerido</span>}
          <label
            htmlFor="debt"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Deuda
          </label>
          <input
            type="number"
            id="debt"
            defaultValue={1000}
            {...register("debt", { required: true })}
            className="mt-1 block w-full px-3 py-2.5 rounded-xl text-sm text-gray-600 border border-gray-300 focus:border-cyan-300 focus:outline-none transition"
          />
          {errors.debt && <span className="text-red-500">Este campo es requerido</span>}
          <button
            type="submit"
            className="mt-8 w-full bg-cyan-600 text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-cyan-800 transition"
          >
            Añadir proveedor
          </button>
        </form>
      </DialogPanel>
    </Dialog>
  )
}