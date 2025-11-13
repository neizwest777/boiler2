// @ts-nocheck
"use client";

import { useState } from "react";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/shared/ui/button';

export default function VormPage() {
  return (
    <>
      <Header className="mb-4" />
      
      <div className="container-narrow py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Saada päring</h1>
          <p className="text-lg text-center mb-12">Vajad boileri paigaldust, remonti või hooldust? Jäta päring ja saame kiiresti ühendust!</p>

          <form
            action="https://formsubmit.co/prismestonia@gmail.com"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Uus boileri teenuse päring" />
            <input type="hidden" name="_autoresponse" value="Täname Teid päringu eest! Võtame Teiega peagi ühendust." />

            <div>
              <label className="text-sm font-medium">Nimi *</label>
              <input 
                name="name" 
                required 
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
              />
            </div>

            <div>
              <label className="text-sm font-medium">E-post</label>
              <input 
                name="email" 
                type="email" 
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
              />
            </div>

            <div>
              <label className="text-sm font-medium">Telefon *</label>
              <input 
                name="phone" 
                required 
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
              />
            </div>

            <div>
              <label className="text-sm font-medium">Teenus</label>
              <select 
                name="service"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Valige teenus</option>
                <option value="paigaldus">Boileri paigaldus</option>
                <option value="remont">Boileri remont</option>
                <option value="hooldus">Boileri hooldus</option>
                <option value="hädaabi">Hädaabi</option>
                <option value="muu">Muu teenus</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Sõnum *</label>
              <textarea 
                name="message" 
                required 
                rows={6} 
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Kirjeldage oma probleemi või teenusevajadust..."
              />
            </div>

            <Button type="submit" className="w-full py-3 text-lg">
              Saada päring
            </Button>
          </form>
        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
