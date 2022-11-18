import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/success">Working Wrapper</Link>
      </li>
      <li>
        <Link href="/error">Error Icon</Link>
      </li>
    </ul>
  );
}
