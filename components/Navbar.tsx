import Link  from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Link href="/">HomePage</Link>
      <Link href="/account">My Account</Link>
    </nav>
  );
};

export default Navbar;
