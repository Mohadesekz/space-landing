import clsx from "clsx";
import Link from "next/link";

const baseStyles = "";

export default function Button({ className = "", ...props }) {
  className = clsx(baseStyles, className);

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
