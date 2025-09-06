import Link from "next/link";

export default function AppBar() {
  return (
    <header>
      <ul style={{ display: "flex", gap: 8 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/inbox">Inbox</Link>
        </li>
      </ul>
    </header>
  );
}
