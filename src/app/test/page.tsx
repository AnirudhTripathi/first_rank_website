import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Image Path Test</h1>
        <div className="relative w-full max-w-2xl h-96 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
          <Image
            src="/Images/bg_landing.png"
            alt="Test Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          If you can see the image above, the path is correct.
        </p>
      </div>
    </div>
  );
}
