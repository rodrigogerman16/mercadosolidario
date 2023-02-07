'use client'
import React, { useEffect, useState } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs"
import dynamic from 'next/dynamic';

const DynamicGetDonaciones = dynamic(() => import('./getDonaciones'), {
  ssr: false
});

export default function UsuarioCard() {

  return (
    <div class="relative overflow-x-auto mt-20 ml-4 flex flex-col justify-center items-center">

      <div className="w-2/3 text-left mb-4">
      </div>
      <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase border-b">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              DATE
            </th>
            <th scope="col" class="px-6 py-3">
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          <DynamicGetDonaciones />
        </tbody>
      </table>
    </div>
  );
}