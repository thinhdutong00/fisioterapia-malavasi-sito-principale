"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck, Menu, X, ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "../data/navigation";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55B4FF]";
const isCurrent = (href: string, pathname: string) => !href.includes("#") && href === pathname;
const hasCurrentPage = (item: NavItem, pathname: string): boolean =>
  isCurrent(item.href, pathname) || Boolean(item.children?.some((child) => hasCurrentPage(child, pathname)));

type MobileItemProps = {
  item: NavItem;
  pathname: string;
  level?: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  onNavigate: () => void;
};

function MobileItem({ item, pathname, level = 0, expanded, onToggle, onNavigate }: MobileItemProps) {
  const isOpen = expanded.has(item.id);
  const panelId = `mobile-panel-${item.id}`;
  const active = hasCurrentPage(item, pathname);

  return (
    <li className={level === 0 ? "border-b border-slate-50" : ""}>
      <div className="flex items-center gap-2">
        <Link
          href={item.href}
          prefetch={false}
          onClick={onNavigate}
          aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
          className={`min-w-0 flex-1 leading-relaxed ${focusStyle} ${
            level === 0 ? "py-5 text-lg font-bold uppercase" : level === 1 ? "py-3 pl-4 text-sm font-semibold" : "border-l border-slate-200 py-3 pl-6 text-xs font-medium"
          } ${active ? "text-[#006EB8] underline decoration-[#55B4FF] underline-offset-4" : "text-[#022166] hover:text-[#006EB8]"}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            aria-label={`${isOpen ? "Chiudi" : "Apri"} sottomenu ${item.label}`}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => onToggle(item.id)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#022166] hover:bg-slate-100 ${focusStyle}`}
          >
            <ChevronDown size={20} aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {item.children && (
        <ul id={panelId} hidden={!isOpen} className={level === 0 ? "mb-4" : "mb-2 ml-4 rounded-xl bg-slate-50"}>
          {item.children.map((child) => (
            <MobileItem key={child.id} item={child} pathname={pathname} level={level + 1} expanded={expanded} onToggle={onToggle} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

function DesktopPanel({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const rows = useRef<Record<string, HTMLLIElement | null>>({});
  const flyouts = useRef<Record<string, HTMLDivElement | null>>({});
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const linkClass = `block min-w-0 flex-1 rounded-xl px-5 py-3 text-[10px] font-bold uppercase tracking-widest leading-relaxed text-[#022166] transition-colors hover:bg-slate-50 hover:text-[#55B4FF] ${focusStyle}`;

  useLayoutEffect(() => {
    if (!openGroup) return;
    const positionFlyout = () => {
      const panel = panelRef.current;
      const row = rows.current[openGroup];
      const flyout = flyouts.current[openGroup];
      if (!panel || !row || !flyout) return;
      const bounds = panel.getBoundingClientRect();
      const rowBounds = row.getBoundingClientRect();
      const openLeft = bounds.right + flyout.offsetWidth > window.innerWidth - 12;
      flyout.style.left = openLeft ? "auto" : "100%";
      flyout.style.right = openLeft ? "100%" : "auto";
      flyout.style.paddingLeft = openLeft ? "0" : "8px";
      flyout.style.paddingRight = openLeft ? "8px" : "0";
      flyout.style.top = `${Math.max(0, Math.min(rowBounds.top - bounds.top, window.innerHeight - bounds.top - flyout.offsetHeight - 12))}px`;
    };
    positionFlyout();
    const list = panelRef.current?.querySelector("ul");
    list?.addEventListener("scroll", positionFlyout);
    window.addEventListener("resize", positionFlyout);
    return () => {
      list?.removeEventListener("scroll", positionFlyout);
      window.removeEventListener("resize", positionFlyout);
    };
  }, [openGroup]);

  const enterFlyout = (id: string) => {
    setOpenGroup(id);
    window.requestAnimationFrame(() => flyouts.current[id]?.querySelector<HTMLAnchorElement>("a[href]")?.focus());
  };
  const closeFlyout = (id: string) => {
    setOpenGroup(null);
    triggers.current[id]?.focus();
  };

  return (
    <div ref={panelRef} className="relative w-[280px] text-[#022166]" onPointerLeave={() => setOpenGroup(null)}>
      <ul className="max-h-[calc(100dvh-11rem)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
        {item.children?.map((group) => {
          const isOpen = openGroup === group.id;
          return (
            <li key={group.id} ref={(element) => { rows.current[group.id] = element; }} onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpenGroup(group.children ? group.id : null); }}>
              <div className={`flex items-center rounded-xl transition-colors hover:bg-slate-50 ${isOpen ? "bg-slate-50" : ""}`}>
                <Link href={group.href} prefetch={false} onClick={onNavigate} aria-current={isCurrent(group.href, pathname) ? "page" : undefined} className={`${linkClass} ${hasCurrentPage(group, pathname) ? "underline decoration-[#55B4FF] underline-offset-4" : ""}`}>
                  {group.label}
                </Link>
                {group.children && (
                  <button ref={(element) => { triggers.current[group.id] = element; }} type="button" aria-label={`${isOpen ? "Chiudi" : "Apri"} sottomenu ${group.label}`} aria-expanded={isOpen} aria-controls={`desktop-flyout-${group.id}`} onClick={(event) => { if (event.detail === 0) enterFlyout(group.id); else setOpenGroup(group.id); }} onKeyDown={(event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowDown" || (event.key === "Tab" && !event.shiftKey && isOpen)) {
                      event.preventDefault();
                      enterFlyout(group.id);
                    }
                  }} className={`mr-2 flex h-9 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:text-[#55B4FF] ${focusStyle}`}>
                    <ChevronDown size={12} aria-hidden="true" className="-rotate-90" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {item.children?.filter((group) => group.children).map((group) => (
        <div key={group.id} ref={(element) => { flyouts.current[group.id] = element; }} id={`desktop-flyout-${group.id}`} hidden={openGroup !== group.id} className="absolute left-full top-0 z-10 w-[288px] pl-2" onKeyDown={(event) => {
          const links = flyouts.current[group.id]?.querySelectorAll<HTMLAnchorElement>("a[href]");
          if (event.key === "Escape" || event.key === "ArrowLeft" || (event.key === "Tab" && event.shiftKey && event.target === links?.[0])) {
            event.preventDefault();
            event.stopPropagation();
            closeFlyout(group.id);
          } else if (event.key === "Tab" && !event.shiftKey && event.target === links?.[links.length - 1]) {
            const next = rows.current[group.id]?.nextElementSibling?.querySelector<HTMLAnchorElement>("a[href]");
            if (next) { event.preventDefault(); setOpenGroup(null); next.focus(); }
          }
        }}>
          <ul className="max-h-[calc(100dvh-11rem)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
            {group.children?.map((child) => (
              <li key={child.id}><Link href={child.href} prefetch={false} onClick={onNavigate} aria-current={isCurrent(child.href, pathname) ? "page" : undefined} className={`${linkClass} ${isCurrent(child.href, pathname) ? "underline decoration-[#55B4FF] underline-offset-4" : ""}`}>{child.label}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const headerRef = useRef<HTMLElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const desktopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopTriggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const menuIsOpenRef = useRef(false);
  const unlockScrollRef = useRef<(() => void) | null>(null);
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(true);
  const isScrolledRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const closeMobileMenu = useCallback((restoreFocus = true) => {
    // Restore scroll before a Link follows its destination, including same-page anchors.
    unlockScrollRef.current?.();
    setIsMobileMenuOpen(false);
    setExpanded(new Set());
    if (restoreFocus) window.requestAnimationFrame(() => mobileTriggerRef.current?.focus({ preventScroll: true }));
  }, []);

  const cancelDesktopClose = () => {
    if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current);
    desktopCloseTimer.current = null;
  };
  const openDesktop = (id: string) => {
    cancelDesktopClose();
    setOpenDesktopMenu(id);
  };
  const scheduleDesktopClose = () => {
    cancelDesktopClose();
    desktopCloseTimer.current = setTimeout(() => setOpenDesktopMenu(null), 160);
  };
  useEffect(() => () => { if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current); }, []);

  const closeMenus = () => {
    cancelDesktopClose();
    setOpenDesktopMenu(null);
    closeMobileMenu(false);
  };

  useEffect(() => {
    menuIsOpenRef.current = isMobileMenuOpen || openDesktopMenu !== null;
  }, [isMobileMenuOpen, openDesktopMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // The body is temporarily fixed while the mobile dialog is open.
        if (!unlockScrollRef.current) {
          const nextScrolled = currentScrollY > 80;
          const nextVisible = currentScrollY < 10 || currentScrollY <= lastScrollY.current || menuIsOpenRef.current;
          if (nextScrolled !== isScrolledRef.current) {
            isScrolledRef.current = nextScrolled;
            setIsScrolled(nextScrolled);
          }
          if (nextVisible !== isVisibleRef.current) {
            isVisibleRef.current = nextVisible;
            setIsVisible(nextVisible);
          }
          lastScrollY.current = currentScrollY;
        }
        rafRef.current = null;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const saved: Array<{ element: HTMLElement; property: string; value: string; priority: string }> = [];
    const setStyle = (element: HTMLElement, property: string, value: string) => {
      saved.push({ element, property, value: element.style.getPropertyValue(property), priority: element.style.getPropertyPriority(property) });
      element.style.setProperty(property, value, "important");
    };
    setStyle(html, "overflow-y", "hidden");
    setStyle(html, "scroll-behavior", "auto");
    setStyle(body, "overflow-y", "hidden");
    setStyle(body, "position", "fixed");
    setStyle(body, "top", `-${scrollY}px`);
    setStyle(body, "left", "0");
    setStyle(body, "right", "0");
    setStyle(body, "width", "100%");
    let restored = false;
    const unlock = () => {
      if (restored) return;
      restored = true;
      for (const { element, property, value, priority } of saved.filter(({ property }) => property !== "scroll-behavior")) {
        if (value) element.style.setProperty(property, value, priority);
        else element.style.removeProperty(property);
      }
      window.scrollTo({ top: scrollY, behavior: "instant" });
      const scrollBehavior = saved.find(({ property }) => property === "scroll-behavior");
      if (scrollBehavior?.value) html.style.setProperty("scroll-behavior", scrollBehavior.value, scrollBehavior.priority);
      else html.style.removeProperty("scroll-behavior");
      unlockScrollRef.current = null;
    };
    unlockScrollRef.current = unlock;
    closeButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]') ?? [])
        .filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !dialogRef.current?.contains(event.target)) closeButtonRef.current?.focus({ preventScroll: true });
    };
    const onHistoryChange = () => closeMobileMenu(false);
    const desktopQuery = window.matchMedia("(min-width: 1440px)");
    const onResize = () => { if (desktopQuery.matches) closeMobileMenu(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("popstate", onHistoryChange);
    window.addEventListener("hashchange", onHistoryChange);
    desktopQuery.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("popstate", onHistoryChange);
      window.removeEventListener("hashchange", onHistoryChange);
      desktopQuery.removeEventListener("change", onResize);
      unlock();
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    if (!openDesktopMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpenDesktopMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenDesktopMenu(null);
        desktopTriggers.current[openDesktopMenu]?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openDesktopMenu]);

  const isDarkTheme = ["/", "/contatti/lavora-con-noi", "/conferma", "/prenota"].includes(pathname) && !isScrolled;
  const textColor = isDarkTheme ? "text-white" : "text-[#022166]";
  const logoSrc = isDarkTheme ? "/logo-bianco-fisioterapia-malavasi.png" : "/logo-fisioterapia-malavasi.png";
  const btnBaseClass = `group relative flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap px-5 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] shadow-md transition-all active:scale-95 ${focusStyle}`;
  const borderRadiusClass = isScrolled ? "rounded-xl" : "rounded-full";

  return (
    <>
      <header ref={headerRef} className={`fixed left-0 top-0 z-[100] w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible || isMobileMenuOpen || openDesktopMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "px-4 pt-4" : "px-0 pt-0"} ${pathname === "/prenota" ? "hidden md:block" : "block"}`}>
        <div className={`relative mx-auto flex items-center justify-between gap-4 border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled
            ? "max-w-[96%] rounded-2xl border-white/40 bg-white/95 px-6 py-3 shadow-[0_20px_50px_-12px_rgba(2,33,102,0.1)] backdrop-blur-2xl md:px-8"
            : "max-w-[98%] rounded-none border-transparent bg-transparent px-4 py-8 md:px-10"
        }`}>
          <Link href="/" prefetch={false} onClick={closeMenus} aria-current={pathname === "/" ? "page" : undefined} className={`flex shrink-0 items-center rounded-lg ${focusStyle}`}>
            <div className={`relative transition-all duration-500 ${isScrolled ? "h-8 w-36 md:h-9 md:w-44" : "h-10 w-52 md:h-14 md:w-72"}`}>
              <Image src={logoSrc} alt="Logo Malavasi" fill sizes="(min-width: 768px) 288px, 208px" quality={35} className="object-contain transition-all duration-500" />
            </div>
          </Link>

          <nav aria-label="Navigazione principale" className="hidden min-[1440px]:block">
            <ul className="flex items-center gap-4 min-[1600px]:gap-6">
              {navigation.map((item) => {
                const isOpen = openDesktopMenu === item.id;
                return (
                  <li key={item.id} className="relative" onPointerEnter={(event) => { if (event.pointerType === "mouse" && item.children) openDesktop(item.id); }} onPointerLeave={scheduleDesktopClose} onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDesktopMenu(null);
                  }}>
                    <div className="flex items-center gap-0.5 py-2">
                      <Link href={item.href} prefetch={false} onClick={closeMenus} aria-current={isCurrent(item.href, pathname) ? "page" : undefined} className={`rounded-md text-[10px] font-bold uppercase tracking-[0.08em] whitespace-nowrap transition-colors hover:text-[#55B4FF] ${focusStyle} ${textColor} ${hasCurrentPage(item, pathname) ? "underline decoration-[#55B4FF] decoration-2 underline-offset-8" : ""}`}>
                        {item.label}
                      </Link>
                      {item.children && (
                        <button ref={(element) => { desktopTriggers.current[item.id] = element; }} type="button" onClick={(event) => { cancelDesktopClose(); setOpenDesktopMenu(event.detail === 0 && isOpen ? null : item.id); }} onKeyDown={(event) => {
                          if (event.key === "ArrowDown") {
                            event.preventDefault();
                            openDesktop(item.id);
                            window.requestAnimationFrame(() => document.getElementById(`desktop-panel-${item.id}`)?.querySelector<HTMLAnchorElement>("a[href]")?.focus());
                          }
                        }} aria-label={`${isOpen ? "Chiudi" : "Apri"} sottomenu ${item.label}`} aria-expanded={isOpen} aria-controls={`desktop-panel-${item.id}`} className={`flex h-8 w-7 items-center justify-center rounded-lg hover:bg-[#55B4FF]/10 ${textColor} ${focusStyle}`}>
                          <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <div id={`desktop-panel-${item.id}`} hidden={!isOpen} className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                        <DesktopPanel key={`${item.id}-${isOpen}`} item={item} pathname={pathname} onNavigate={closeMenus} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden items-center gap-3 min-[1440px]:flex">
              <a href="tel:+393338225464" aria-label="Chiama lo studio: 333 822 5464" className={`${btnBaseClass} ${borderRadiusClass} ${isDarkTheme ? "border border-white/20 bg-white/10 text-white" : "border border-[#022166]/10 bg-[#022166]/5 text-[#022166] hover:bg-[#022166] hover:text-white"}`}>
                <Phone size={14} aria-hidden="true" /><span className="hidden min-[1700px]:inline">333 822 5464</span>
              </a>
              <Link href="/prenota" prefetch={false} onClick={closeMenus} className={`${btnBaseClass} ${borderRadiusClass} ${isDarkTheme ? "bg-[#55B4FF] text-[#022166]" : "bg-[#022166] text-white"}`}>
                <CalendarCheck size={16} aria-hidden="true" /><span>Prenota Ora</span>
              </Link>
            </div>
            <button ref={mobileTriggerRef} type="button" onClick={() => { setOpenDesktopMenu(null); setIsMobileMenuOpen(true); }} aria-label="Apri menu di navigazione" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation-dialog" aria-haspopup="dialog" className={`rounded-xl p-2 transition-colors min-[1440px]:hidden ${textColor} ${focusStyle}`}>
              <Menu size={32} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Always rendered: destinations remain available in the server HTML. */}
      <div hidden={!isMobileMenuOpen} className="fixed inset-0 z-[10000] bg-white min-[1440px]:hidden">
        <div ref={dialogRef} id="mobile-navigation-dialog" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="flex h-dvh w-full flex-col overflow-hidden bg-white text-[#022166]">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100 px-5 py-5">
            <Link href="/" prefetch={false} onClick={() => closeMobileMenu(false)} className={`rounded-lg ${focusStyle}`}>
              <div className="relative h-10 w-48">
                <Image src="/logo-fisioterapia-malavasi.png" alt="Logo Malavasi" fill sizes="192px" quality={35} className="object-contain" />
              </div>
            </Link>
            <h2 id="mobile-navigation-title" className="sr-only">Navigazione Fisioterapia Malavasi</h2>
            <button ref={closeButtonRef} type="button" onClick={() => closeMobileMenu()} aria-label="Chiudi menu di navigazione" className={`shrink-0 rounded-xl p-2 text-[#022166] hover:bg-slate-100 ${focusStyle}`}><X size={28} aria-hidden="true" /></button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-8">
            <nav aria-label="Navigazione mobile">
              <ul>
                <li className="border-b border-slate-100"><Link href="/" prefetch={false} onClick={() => closeMobileMenu(false)} aria-current={pathname === "/" ? "page" : undefined} className={`block rounded-lg py-4 text-base font-bold uppercase tracking-wide hover:text-[#006EB8] ${focusStyle}`}>Home</Link></li>
                {navigation.map((item) => <MobileItem key={item.id} item={item} pathname={pathname} expanded={expanded} onToggle={(id) => setExpanded((previous) => {
                  const next = new Set(previous);
                  if (next.has(id)) next.delete(id);
                  else next.add(id);
                  return next;
                })} onNavigate={() => closeMobileMenu(false)} />)}
              </ul>
            </nav>
            <div className="mt-8 space-y-4">
              <a href="tel:+393338225464" onClick={() => closeMobileMenu(false)} className={`flex w-full items-center justify-center gap-4 rounded-2xl bg-slate-100 py-5 text-xs font-black uppercase tracking-widest text-[#022166] ${focusStyle}`}><Phone size={20} aria-hidden="true" />Chiama Studio</a>
              <Link href="/prenota" prefetch={false} onClick={() => closeMobileMenu(false)} className={`flex w-full items-center justify-center gap-4 rounded-2xl bg-[#022166] py-5 text-xs font-black uppercase tracking-widest text-white shadow-xl ${focusStyle}`}><CalendarCheck size={20} aria-hidden="true" />Prenota Ora</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
