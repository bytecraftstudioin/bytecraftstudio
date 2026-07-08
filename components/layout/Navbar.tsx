"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 lg:px-6 py-4 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black tracking-wider text-white"
          >
            BYTECRAFT
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="
                text-white
                hover:text-cyan-400
                transition-all
                duration-300
                "
              >
                {item.name}
              </Link>

            ))}

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            {/* Desktop Button */}

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeD-9Tuh-nEln__MdQWZqqC84k7yC-f_YVzXXir0V3cU2djrg/viewform?usp=sharing&ouid=111289545347139403852"
              className="
              hidden
              md:inline-flex
              items-center
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              shadow-lg
              shadow-blue-600/30
              hover:scale-105
              "
            >
              Start Project
            </Link>

            {/* Mobile Menu */}

            <button
              onClick={() => setOpen(true)}
              className="
              md:hidden
              w-11
              h-11
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:border-cyan-400
              hover:bg-cyan-500/10
              transition-all
              duration-300
              "
            >
              <Menu size={22} />
            </button>

          </div>

        </div>

      </nav>

      {/* Apple Style Drawer Starts Here */}
      {open && (
<>
  {/* Overlay */}

  <div
    onClick={() => setOpen(false)}
    className="
    fixed
    inset-0
    z-[9998]
    bg-black/40
    backdrop-blur-sm
    transition-all
    duration-300
    "
  />

  {/* Drawer */}

  <aside
    className="
    fixed
    top-0
    right-0
    z-[9999]
    h-screen
    w-[85%]
    max-w-sm
    bg-[#111827]/95
    backdrop-blur-2xl
    border-l
    border-white/10
    rounded-l-[32px]
    shadow-2xl
    flex
    flex-col
    overflow-hidden
    "
  >

    {/* Header */}

    <div
      className="
      flex
      items-center
      justify-between
      px-6
      py-6
      border-b
      border-white/10
      "
    >

      <div>

        <h2 className="text-xl font-black text-white">
          BYTECRAFT
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Crafting the Future
        </p>

      </div>

      <button
        onClick={() => setOpen(false)}
        className="
        w-10
        h-10
        rounded-full
        bg-white/5
        border
        border-white/10
        flex
        items-center
        justify-center
        text-white
        hover:border-cyan-400
        hover:bg-cyan-500/10
        transition-all
        duration-300
        "
      >
        <X size={20} />
      </button>

    </div>

    {/* Menu */}

    <div
      className="
      flex-1
      overflow-y-auto
      px-5
      py-6
      space-y-3
      "
    >

      {navigation.map((item) => (

        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="
          group
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          font-medium
          transition-all
          duration-300
          hover:bg-cyan-500/10
          hover:border-cyan-400
          hover:translate-x-1
          "
        >

          <span>{item.name}</span>

          <ChevronRight
            size={18}
            className="
            text-gray-400
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:text-cyan-400
            "
          />

        </Link>

      ))}

    </div>
        {/* Bottom CTA */}

    <div
      className="
      border-t
      border-white/10
      p-5
      space-y-4
      "
    >

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeD-9Tuh-nEln__MdQWZqqC84k7yC-f_YVzXXir0V3cU2djrg/viewform?usp=sharing&ouid=111289545347139403852"
        onClick={() => setOpen(false)}
        className="
        flex
        items-center
        justify-center
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
        "
      >
        🚀 Start Project
      </Link>

      <p className="text-center text-xs text-gray-500">
        Bytecraft Studio © {new Date().getFullYear()}
      </p>

    </div>

  </aside>
</>
)}

    </>
  );
}