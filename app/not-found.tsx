import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-6xl font-semibold text-gray-900 dark:text-gray-100">
        404
      </h1>

      <p className="mt-4 text-xl font-bold">
        Kahjuks seda lehekülge ei leitud.
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Leht, mida otsite, on teisaldatud või ei ole enam saadaval.
      </p>

      <NextLink
        href="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Tagasi avalehele
      </NextLink>
    </div>
  );
}
