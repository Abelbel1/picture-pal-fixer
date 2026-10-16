import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [
  { label: "Acasă", hash: "hero" },
  { label: "Servicii", hash: "servicii" },
  { label: "Despre Noi", hash: "despre" },
  { label: "Contact", hash: "contact" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const navClass = "font-label text-sm uppercase text-foreground/75 transition-colors hover:text-primary";
  const navigation = <>{links.slice(0, 2).map((link) => <Link key={link.hash} to="/" hash={link.hash} className={navClass} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}<Link to="/materiale" className={navClass} activeProps={{ className: "text-primary" }} onClick={() => setMenuOpen(false)}>Materiale folosite</Link>{links.slice(2).map((link) => <Link key={link.hash} to="/" hash={link.hash} className={navClass} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</>;
  return <nav aria-label="Navigare principală" className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || pathname !== "/" || menuOpen ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-transparent"}`}>
    <div className="container flex h-16 items-center justify-between gap-3 lg:h-20">
      <Link to="/" hash="hero" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-3"><img src="/brand/official-logo.jpg" alt="Black Glass Auto" className="h-10 w-10 border border-primary object-contain lg:h-12 lg:w-12" /><span><span className="block font-display text-xl font-bold leading-none text-foreground lg:text-2xl">BLACK GLASS</span><span className="block font-label text-xs uppercase text-primary">Auto Curtici</span></span></Link>
      <div className="hidden items-center gap-6 lg:flex">{navigation}</div>
      <Button asChild className="hidden lg:inline-flex"><a href="tel:+40741995007"><Phone />0741 995 007</a></Button>
      <div className="flex items-center gap-1 lg:hidden"><Button asChild variant="ghost" size="icon"><a href="tel:+40741995007" aria-label="Sună Black Glass Auto"><Phone /></a></Button><Button variant="ghost" size="icon" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"} aria-expanded={menuOpen} aria-controls="mobile-menu">{menuOpen ? <X /> : <Menu />}</Button></div>
    </div>
    {menuOpen && <div id="mobile-menu" className="container flex flex-col gap-5 border-t border-border py-6 lg:hidden">{navigation}</div>}
  </nav>;
}
