import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300"
    >
      {children}
    </Link>
  );
}
