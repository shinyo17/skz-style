import Link from "next/link";

export interface NavigationButtonProps {
  href: string;
  title: string;
}

export default function NavigationButton({
  href,
  title,
}: NavigationButtonProps) {
  return (
    <Link
      href={href}
      className="text-center mt-5 bg-black hover:bg-black text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none"
    >
      {title}
    </Link>
  );
}
