import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="mx-2 flex-1 px-2 font-bold text-primary">MEDIVERSE</div>
                    <div className="hidden flex-none xl:block">
                        <ul className="menu menu-horizontal text-xs text-primary font-bold">
                            {/* Navbar menu content here */}
                            <li><Link href="/about">MEDIVERSE NEDİR?</Link></li>
                            <li><a href="/#team" className="hover:text-secondary">ORGANİZASYON KOMİTESİ</a></li>
                            <li><a href="/#program"className="hover:text-secondary">PROGRAM AKIŞI</a></li>
                            <li><a href="/#speakers"className="hover:text-secondary">KONUŞMACILAR HAKKINDA</a></li>
                            <li><a href="/#workshops"className="hover:text-secondary">ATÖLYELERİMİZ</a></li>
                            <li><a href="/#poster"className="hover:text-secondary">POSTER SUNUMLARI</a></li>
                            <li><a href="/#sponsors"className="hover:text-secondary">SPONSORLARIMIZ</a></li>
                        </ul>
                    </div>
                    <div className="flex-none xl:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current text-primary">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 text-primary font-bold">
                    {/* Sidebar content here */}
                    <li><Link href="/about">MEDIVERSE NEDİR?</Link></li>
                    <li><a href="/#team" className="hover:text-secondary">ORGANİZASYON KOMİTESİ</a></li>
                    <li><a href="/#program"className="hover:text-secondary">PROGRAM AKIŞI</a></li>
                    <li><a href="/#speakers"className="hover:text-secondary">KONUŞMACILAR HAKKINDA</a></li>
                    <li><a href="/#workshops"className="hover:text-secondary">ATÖLYELERİMİZ</a></li>
                    <li><a href="/#poster"className="hover:text-secondary">POSTER SUNUMLARI</a></li>
                    <li><a href="/#sponsors"className="hover:text-secondary">SPONSORLARIMIZ</a></li>
                </ul>
                <div className="p-4 font-bold mt-auto text-primary">MEDIVERSE</div>
            </div>
        </div>
    )
}