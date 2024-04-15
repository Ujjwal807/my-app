import Link from "next/link";

function MobileNav({ setClicked }) {
  return (
    <div className="bg-black h-full flex flex-col gap-8 fixed h-ful z-10 top-0 right-0 py-8 pl-10 pr-28">
      <div onClick={() => setClicked((prev) => !prev)}>
        <div className="w-6 h-1 bg-white rounded-full rotate-45 translate-y-1"></div>
        <div className="w-6 h-1 bg-white rounded-full -rotate-45"></div>
      </div>
      <div>
        <ul className="text-white flex gap-8 font-medium text-xl flex-col">
          <li className="cursor-pointer hover:underline">
              <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
              <Link href="/about-us">About Us</Link>
          </li>
          <li className="cursor-pointer hover:underline">
              <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="cursor-pointer hover:underline">
              <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
