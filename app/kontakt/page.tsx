// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';

export default function KontaktPage() {
  return (
    <>
      <Header className="mb-4" />
      
      <div className="container-narrow py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Võta meiega ühendust</h1>
          <p className="text-lg text-center mb-12">Oleme siin, et aidata! Võtke ühendust meiega mis tahes küsimuste või probleemide korral.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Kontaktandmed</h3>
              <p className="mb-2">📞 <Link href="tel:+37253684587" className="text-primary-600">+372 5368 4587</Link></p>
              <p className="mb-2">✉️ <a href="mailto:prismestonia@gmail.com" className="text-primary-600">prismestonia@gmail.com</a></p>
              <p className="mb-2">📍 Tallinn ja Harjumaa</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Tööaeg</h3>
              <p className="mb-2">⏰ E-R: 8:00 - 22:00</p>
              <p className="mb-2">🚨 Hädaabi: 24/7</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Saada meile sõnum</h3>
            <form
              action="https://formsubmit.co/prismestonia@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Kontaktide päring" />
              <input type="hidden" name="_autoresponse" value="Täname Teid sõnumi eest! Võtame Teiega peagi ühendust." />

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
                <label className="text-sm font-medium">Sõnum *</label>
                <textarea 
                  name="message" 
                  required 
                  rows={6} 
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Kirjeldage oma vajadust või küsimust..."
                />
              </div>

              <Button type="submit" className="w-full py-3 text-lg">
                Saada sõnum
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
