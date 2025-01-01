import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Equipment.ng</h1>
          <nav className="mt-2">
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/listing" className="mr-4">Listing</Link>
            <Link href="/customers" className="mr-4">Customers</Link>
            <Link href="/settings" className="mr-4">Settings</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Equipment.ng</p>
        </div>
      </footer>
    </div>
  );
}