import { createFileRoute } from "@tanstack/react-router";

import mangaAsset from "@/assets/manga1.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import characterAsset from "@/assets/character.png.asset.json";

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

const episodes = [
  { no: "第1話", title: "なぜネイリストを選んだのか", ready: true },
  { no: "第2話", title: "赤字そこからの苦しみ", ready: true },
  { no: "第3話", title: "発想の転換（経費削減）", ready: false },
  { no: "第4話", title: "時短×高単価の確立", ready: false },
  { no: "第5話", title: "スタッフ雇用の壁", ready: false },
  { no: "第6話", title: "満席ネイルサロンへ", ready: false },
  { no: "第7話", title: "今も学び続ける", ready: false },
  { no: "第8話", title: "経営スクールでの学び そしてこれから", ready: false },
];

const pains = ["単価が上がらない", "時間がない", "頑張っているのに利益が残らない"];

const results = ["無借金経営", "ネイル単価1万円", "経営8年", "ネイリスト歴14年"];

function Home() {
  return (
    <main className="min-h-screen bg-[#fff5fa] font-['Noto_Sans_JP',system-ui,'Hiragino_Sans',sans-serif] text-[#3d2333]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ffe3f1] via-[#ffd9ec] to-[#ffcfe6]">
        {/* logo top-right */}
        <img
          src={logoAsset.url}
          alt="NailBiz"
          className="absolute right-4 top-4 z-20 w-20 sm:right-8 sm:top-6 sm:w-28"
        />

        <div className="relative mx-auto max-w-5xl px-5 pt-14 sm:px-8 sm:pt-16">
          <p className="text-center text-sm font-black tracking-wide sm:text-lg">
            頑張っているのに利益が残らないネイリスト必見！
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["人脈なし", "コネなし", "資金なし"].map((t) => (
              <span
                key={t}
                className="rounded-md border-2 border-[#3d2333] bg-white px-3 py-1 text-sm font-black sm:px-4 sm:text-base"
              >
                ✓{t}
              </span>
            ))}
            <span className="text-sm font-black sm:text-base">からでも</span>
          </div>

          <div className="mt-6 grid items-end gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div className="pb-6 text-center sm:text-left">
              <h1 className="text-4xl font-black leading-[1.3] tracking-tight text-[#e5398a] drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] sm:text-6xl">
                長く継続できる
                <br />
                ネイルサロン経営へ
              </h1>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">
                {["安売り", "長時間施術", "薄利多売"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#4a4a4a] px-4 py-2 text-sm font-black text-white shadow-md sm:text-base"
                  >
                    {t}
                  </span>
                ))}
                <span className="text-sm font-black sm:text-base">から</span>
                <span className="text-xl font-black text-[#e5398a] sm:text-2xl">卒業</span>
              </div>
            </div>

            <img
              src={characterAsset.url}
              alt="施術するネイリストの女の子"
              width={1024}
              height={1024}
              className="mx-auto w-64 drop-shadow-xl sm:w-full sm:max-w-sm"
            />
          </div>
        </div>

        <div className="relative bg-[#e5398a] py-3 text-center">
          <p className="text-sm font-black tracking-wide text-white sm:text-lg">
            時間にゆとりを持ちながら利益もしっかり残せる働き方へ
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
            <a
              key={ep.no}
              href={ep.ready ? "#episodes" : undefined}
              aria-disabled={!ep.ready}
              className={`flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f0609f] to-[#e5398a] py-3 pl-2 pr-5 shadow-md shadow-[#e5398a]/30 transition-transform ${
                ep.ready ? "hover:scale-[1.02]" : "opacity-80"
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-black leading-tight text-[#e5398a]">
                {ep.no}
              </span>
              <span className="flex-1 text-center text-sm font-black text-white sm:text-base">
                {ep.title}
              </span>
              <span aria-hidden className="text-white/90">
                ›
              </span>
            </a>
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
