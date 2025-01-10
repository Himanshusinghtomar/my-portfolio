import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 shadow">
    <h1 className="text-xl font-bold">Himanshu</h1>
    <nav>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/works">Works</Link></li>
        <li><Link href="/blogs">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
