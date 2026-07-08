import { footerLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] pt-16 border-t border-white/10">
      <div className="
max-w-7xl
mx-auto
px-5
sm:px-6
lg:px-8
py-12
md:py-16
text-center
">
        <h2 className="
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
tracking-tight
font-black
text-white
leading-tight
break-words
">
          BYTECRAFT STUDIO
        </h2>

        <p className="
text-gray-400
mt-4
text-sm
sm:text-base
max-w-md
mx-auto
leading-7
">
          Crafting the Future, Byte by Byte.
        </p>


        {/* Free Tools */}

        <div className="mt-16 pt-10 border-t border-white/10">

          <h2 className="
text-2xl
sm:text-3xl
font-bold
text-center
text-white
mb-8
">
            Free Tools by Bytecraft Studio
          </h2>

          <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
sm:gap-5
">

            <a
  href="https://bytespin.bytecraftstudio.com/"
  className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
text-sm
sm:text-base
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
"
>
  🎡 Spin Wheel
</a>

            <a
              href="https://bytespin.bytecraftstudio.com/coin-flip"
              className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
text-sm
sm:text-base
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
"
>
              🪙 Coin Flip
            </a>

            <a
              href="https://bytespin.bytecraftstudio.com/random-number-generator"
              className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
text-sm
sm:text-base
"
>
              🔢 Random Number
            </a>

            <a
              href="https://bytespin.bytecraftstudio.com/yes-or-no"
              className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
text-sm
sm:text-base
"
>
              🤔 Yes / No Picker
            </a>

            <a
              href="https://bytespin.bytecraftstudio.com/dice-roller"
              className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
transition-all
duration-300
text-sm
sm:text-base
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
"
>
              🎲 Dice Roller
            </a>

            <a
              href="https://bytespin.bytecraftstudio.com/name-picker"
              className="
group
block
bg-white/5
border
border-white/10
rounded-2xl
px-4
py-4
sm:p-5
text-center
text-white
transition-all
text-sm
sm:text-base
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/10
hover:text-cyan-400
visited:text-white
"
>
              👤 Name Picker
            </a>

          </div>

        </div>

        {/* Company + Legal */}

        <div className="
grid
grid-cols-1
md:grid-cols-2
gap-10
md:gap-16mt-16 pt-10 border-t border-white/10">

          <div className="text-center md:text-left">

            <h3 className="text-base
sm:text-lg uppercase tracking-wider font-bold text-white mb-6">
              Company
            </h3>

            <div className="space-y-4">

              {footerLinks.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
block
py-2
text-sm
sm:text-base
text-gray-400
transition-all
duration-300
hover:text-cyan-400
">
                  {link.name}
                </a>
              ))}

            </div>

          </div>

          <div className="text-center md:text-left">

            <h3 className="text-lg uppercase tracking-wider font-bold text-white mb-6">
              Legal
            </h3>

            <div className="space-y-4">

              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
block
py-2
text-sm
sm:text-base
text-gray-400
transition-all
duration-300
hover:text-cyan-400
">
                  {link.name}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center">

          <p className="
text-gray-500
text-sm
leading-7
">
            © {new Date().getFullYear()} Bytecraft Studio. All rights reserved.
          </p>

          <p className="
text-xs
sm:text-sm
text-gray-600
mt-2
">
            Designed & Developed by Bytecraft Studio
          </p>

        </div>

     

        <div className="
flex
flex-wrap
justify-center
gap-4
sm:gap-6
mt-8
">
          {footerLinks.social.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
px-3
py-2
rounded-xl
text-sm
sm:text-base
text-gray-400
transition-all
duration-300
hover:text-cyan-400
hover:bg-cyan-500/10
"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}