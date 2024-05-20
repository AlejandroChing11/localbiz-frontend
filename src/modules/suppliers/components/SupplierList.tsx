'use client';

import axios from "axios"
import { useEffect, useState } from "react";
import { SupplierCard } from "./SupplierCard";

interface Supplier {
  id: string;
  supplier_name: string;
  debt: number;
}


export function SupplierList() {

  const [suppliers, setSuppliers] = useState<Supplier[]>([])

  const getSuppliers = async () => {
    try {
      const response = await axios.get<Supplier[]>("http://localhost:3000/api/supplier");
      setSuppliers(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getSuppliers()
  }, [])

  return (
    <div
      className="flex grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {suppliers.map((supplier, index) => {
        return (
          <div key={index}>
            <SupplierCard supplier={supplier} />
          </div>
        )
      })}
    </div>
  )
}