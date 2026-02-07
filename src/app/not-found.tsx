import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full p-6 lg:p-12 gap-4 bg-white min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-9xl font-bold">404</h2>

      <div className="w-full gap-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Page Not Found</h1>

        <p className="text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>

      <Link href="/" className="gap-2 text-md font-medium underline">
        Go back
      </Link>
    </div>
  );
}
