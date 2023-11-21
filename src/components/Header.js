import Link from "next/link";

export default function Header() {
    return(
        <header className="bg-amber-500">
            <Link href="/" className="pr-8">Dashboard</Link>
            <Link href="/menu" className="pr-8">Menu</Link>
            <Link href="/menu/makanan" className="pr-8">Makanan</Link>
            <Link href="/menu/minuman" className="pr-8">Minuman</Link>
        </header>
    )
}