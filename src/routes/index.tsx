import { createFileRoute, Link } from "@tanstack/react-router";

import mangaAsset from "@/assets/manga1.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import heroAsset from "@/assets/hero.png.asset.json";
import { episodes } from "@/lib/episodes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NailBiz｜長く継続できるネイルサロン経営へ" },
      {
        name: "description",
        content:
          "頑張っているのに利益が残らないネイリスト必見。人脈なし・コネなし・資金なしから、安売りと長時間施術を卒業して利益を残す働き方へ。",
      },
      { property: "og:title", content: "NailBiz｜長く継続できるネイルサロン経営へ" },
      {
        property: "og:description",
        content:
          "安売り・長時間施術・薄利多売から卒業。時間にゆとりを持ちながら利益もしっかり残せる働き方を全話公開。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pains = ["単価が上がらない", "時間がない", "頑張っているのに利益が残らない"];

const results = ["無借金経営", "ネイル単価1万円", "経営8年", "ネイリスト歴14年"];

function Home() {
  return (
    <main className="min-h-screen bg-[#fff5fa] font-['Noto_Sans_JP',system-ui,'Hiragino_Sans',sans-serif] text-[#3d2333]">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#ffd9ec] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAsset.url})` }}
      >
        <img
          src={logoAsset.url}
          alt="NailBiz"
          className="absolute right-4 top-4 z-20 w-20 animate-nb-rise sm:right-8 sm:top-6 sm:w-28"
        />

        {/* floating sparkles */}
        <span aria-hidden className="absolute left-[12%] top-16 animate-nb-sparkle text-xl text-white/90">✦</span>
        <span aria-hidden className="absolute right-[30%] top-24 animate-nb-sparkle text-2xl text-white/80 [animation-delay:0.6s]">✦</span>
        <span aria-hidden className="absolute bottom-[45%] left-[6%] animate-nb-sparkle text-lg text-white/70 [animation-delay:1.2s]">✦</span>

        <div className="relative mx-auto min-h-[560px] max-w-5xl px-5 pt-14 sm:min-h-[480px] sm:px-8 sm:pt-16">
          <p className="animate-nb-rise text-sm font-black tracking-wide underline decoration-dotted decoration-2 underline-offset-4 sm:text-lg">
            頑張っているのに利益が残らないネイリスト必見！
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 animate-nb-rise [animation-delay:0.15s] sm:gap-3">
            {["人脈なし", "コネなし", "資金なし"].map((t) => (
              <span
                key={t}
                className="rounded-md border-2 border-[#e5398a] bg-white px-3 py-1 text-sm font-black text-[#e5398a] sm:px-4 sm:text-base"
              >
                ✓{t}
              </span>
            ))}
            <span className="text-sm font-black sm:text-base">からでも</span>
          </div>

          <div className="mt-8 pb-16 animate-nb-rise [animation-delay:0.3s] sm:max-w-[68%]">
            <h1 className="whitespace-nowrap text-4xl font-black leading-[1.35] tracking-tight text-[#e5398a] drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] sm:text-6xl">
              <span className="bg-gradient-to-t from-[#ffd94d] from-40% to-transparent to-40% px-1">
                長く継続
              </span>
              できる
              <br />
              <span className="underline decoration-[#4aa8e0] decoration-4 underline-offset-8">
                ネイルサロン経営へ
              </span>
            </h1>
          </div>
        </div>

        {/* Cloud band */}
        <div className="relative bg-white px-4 pb-8 pt-10">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-8">
            {["安売り", "長時間施術", "薄利多売"].map((t, i) => (
              <div
                key={t}
                className="relative animate-nb-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {/* cloud built from overlapping circles */}
                <div className="relative flex h-24 w-48 items-center justify-center sm:h-28 sm:w-56">
                  <span className="absolute left-2 top-6 h-16 w-16 rounded-full bg-[#d9d9d9] sm:h-20 sm:w-20" />
                  <span className="absolute left-10 top-1 h-20 w-20 rounded-full bg-[#d9d9d9] sm:left-12 sm:h-24 sm:w-24" />
                  <span className="absolute right-8 top-3 h-16 w-16 rounded-full bg-[#d9d9d9] sm:h-20 sm:w-20" />
                  <span className="absolute bottom-1 left-6 h-14 w-14 rounded-full bg-[#d9d9d9] sm:h-16 sm:w-16" />
                  <span className="absolute bottom-2 right-3 h-14 w-14 rounded-full bg-[#d9d9d9] sm:h-16 sm:w-16" />
                  <span className="relative z-10 text-lg font-black text-[#3d2333] sm:text-2xl">
                    {t}
                  </span>
                </div>
                {/* swirl mark */}
                <svg
                  viewBox="0 0 40 32"
                  className="absolute -right-4 -top-3 h-7 w-9 text-[#3d2333]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M6 26 C 4 14, 14 6, 24 8 C 32 10, 32 20, 24 21 C 18 22, 16 16, 21 14" />
                </svg>
              </div>
            ))}
            <p className="flex items-center gap-2">
              <span className="text-lg font-black text-[#3d2333] sm:text-2xl">から</span>
              <span className="text-3xl font-black text-[#e5398a] sm:text-5xl">卒業</span>
              <span className="animate-nb-sparkle text-2xl text-[#ffd94d] sm:text-3xl">✦</span>
            </p>
          </div>
          {/* chevron */}
          <div className="mt-4 flex flex-col items-center leading-none">
            <span className="animate-nb-chevron text-3xl font-black text-[#e5398a]">⌄</span>
            <span className="-mt-4 animate-nb-chevron text-3xl font-black text-[#e5398a] [animation-delay:0.2s]">⌄</span>
          </div>
        </div>

        <div className="relative bg-[#e5398a] py-4 text-center">
          <p className="text-sm font-black tracking-wide text-white sm:text-lg">
            時間にゆとりを持ちながら
            <span className="text-[#ffd94d]">利益もしっかり残せる</span>
            働き方へ
          </p>
        </div>
      </section>

      {/* Manga */}
      <section className="mx-auto max-w-xl px-5 py-14">
        <p className="text-center text-xs font-bold tracking-[0.3em] text-[#a67f93]">
          今から10話ほどのお話…
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#f2c6dd] shadow-lg">
          <img
            src={mangaAsset.url}
            alt="第1話 なぜネイリストを選んだのか"
            loading="lazy"
            className="w-full"
          />
        </div>
      </section>

      {/* Episode list */}
      <section id="episodes" className="mx-auto max-w-xl px-5 pb-16">
        <div className="flex flex-col gap-3">
          {episodes.map((ep) => (
            <Link
              key={ep.id}
              to="/episodes/$id"
              params={{ id: ep.id }}
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f0609f] to-[#e5398a] py-3 pl-2 pr-5 shadow-md shadow-[#e5398a]/30 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-black leading-tight text-[#e5398a]">
                第{ep.num}話
              </span>
              <span className="flex-1 text-center text-sm font-black text-white sm:text-base">
                {ep.title.join("")}
              </span>
              <span aria-hidden className="text-white/90">
                ›
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Message */}
      <section className="mx-auto max-w-xl px-5 pb-16 text-center">
        <h2 className="text-2xl font-black leading-relaxed sm:text-3xl">
          人脈なし、資金なし、コネなし。
        </h2>
        <p className="mt-6 text-sm font-bold leading-loose sm:text-base">
          それでも、赤字から抜け出すことができました。
        </p>
        <p className="mt-8 text-sm font-bold leading-loose sm:text-base">
          もしあなたが今、
        </p>
        <div className="mt-4 flex flex-col items-center gap-3">
          {pains.map((t) => (
            <p key={t} className="text-base font-black sm:text-lg">
              「
              <span className="underline decoration-[#e5398a] decoration-4 underline-offset-4">
                {t}
              </span>
              」
            </p>
          ))}
        </div>
        <p className="mt-8 text-sm font-bold leading-loose sm:text-base">
          そう感じているなら、
          <br />
          それは私が経験してきたことと、
          <br />
          同じかもしれません。
        </p>
        <p className="mt-8 text-sm font-bold leading-loose sm:text-base">
          資金がなくても、
          <br />
          失敗せず開業できる。
        </p>

        <div className="mx-auto mt-10 max-w-sm rounded-2xl border-2 border-[#f2c6dd] bg-white p-6 text-left shadow-lg">
          <ul className="flex flex-col gap-3">
            {results.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm font-black sm:text-base">
                <span className="h-3 w-3 shrink-0 rounded-full bg-[#ffd94d] shadow-inner" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs font-bold leading-relaxed text-[#7b5467]">
          今も毎年数百万円をかけて
          <br />
          経営コミュニティで学び続け、
          <br />
          経営・AI・を勉強。
        </p>
      </section>

      {/* LINE CTA */}
      <section className="mx-auto max-w-xl px-5 pb-20 text-center">
        <p className="text-lg font-black leading-relaxed text-[#e5398a] sm:text-xl">
          無料でネイル技術pdfを
          <br />
          LINEでシェアしています！
        </p>
        <p className="mt-6 inline-block rounded-full border border-[#3d2333] px-4 py-1 text-xs font-bold">
          登録は30秒で完了！
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-lg bg-[#06c755] px-8 py-4 text-lg font-black text-white shadow-xl shadow-[#06c755]/30 transition-transform hover:scale-[1.02]"
          >
            今すぐLINEで受け取る
          </a>
        </div>
      </section>

      <footer className="bg-[#e5398a] py-8 text-center text-xs font-bold text-white/90">
        © NailBiz All Rights Reserved.
      </footer>
    </main>
  );
}
