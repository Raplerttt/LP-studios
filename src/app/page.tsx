import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 gap-8">
      <header className="flex flex-col items-center mb-10">
        <Image
          className="mb-5"
          src="/assets/01.png" // Ganti dengan path logo Anda
          alt="Logo Music Organizer"
          width={200}
          height={200}
        />
        <h1 className="text-5xl font-bold text-center">Music Organizer</h1>
        <p className="mt-3 text-lg">Your ultimate hub for metal music!</p>
      </header>

      <main className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Now</h2>
        <p className="mb-6 text-center">Sign up to organize and explore your favorite metal tracks and events.</p>
        <a
          className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-300 transition duration-300"
          href="/signup" // Ganti dengan path halaman signup Anda
        >
          Sign Up
        </a>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p>&copy; 2024 Hey Drown Music Organizer. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
