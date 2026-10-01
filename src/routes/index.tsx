import { createFileRoute } from "@tanstack/react-router";

import heroAsset from "@/assets/hero.png.asset.json";
import mangaAsset from "@/assets/manga1.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NailBiz｜長く続けられるネイルサロン経営へ" },
      {
        name: "description",
        content:
          "頑張っているのに利益が残らないネイリスト必見。人脈なし・コネなし・資金なしから、安売りと長時間施術を卒業して利益を残す働き方へ。",
      },
      { property: "og:title", content: "NailBiz｜長く続けられるネイルサロン経営へ" },
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
  {
    no: "第1話",
    title: "なぜネイリストを選んだのか",
    desc: "好きを仕事にしたあの日から。独立を決めるまでの原点のお話。",
    image: mangaAsset.url,
    ready: true,
  },
  {
    no: "第2話",
    title: "赤字、そこからの苦しみ",
    desc: "売上わずか8万円。大赤字から抜け出すための試行錯誤がはじまる。",
    image: mangaAsset.url,
    ready: true,
  },
  {
    no: "第3話",
    title: "安売りをやめた日",
    desc: "値下げと長時間施術の悪循環を断ち切るために決めたこと。",
    ready: false,
  },
  {
    no: "第4話",
    title: "利益が残る仕組みへ",
    desc: "時間にゆとりを持ちながら、利益もしっかり残す働き方の作り方。",
    ready: false,
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-[#fff6fb] text-[#4a2b3c] font-[system-ui,'Hiragino_Sans','Noto_Sans_JP',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="ネイルサロンでお客様に施術するネイリスト"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffd9ee]/95 via-[#ffd9ee]/70 to-transparent" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
          <img src={logoAsset.url} alt="NailBiz" className="mb-8 w-40 sm:w-52" />

          <p className="inline-flex w-fit rounded-full bg-[#e5398a] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#e5398a]/30 sm:text-base">
            頑張っているのに利益が残らないネイリスト必見！
          </p>

          <p className="mt-6 text-base font-bold tracking-wide text-[#8a3d64] sm:text-xl">
            人脈なし　コネなし　資金なし　からでも
          </p>

          <h1 className="mt-3 text-4xl font-black leading-[1.25] tracking-tight sm:text-6xl">
            長く継続できる
            <br />
            <span className="bg-gradient-to-r from-[#e5398a] to-[#9b4df5] bg-clip-text text-transparent">
              ネイルサロン経営
            </span>
            へ
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {["安売り", "長時間施術", "薄利多売"].map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-[#e5398a]/40 bg-white/80 px-4 py-1.5 text-sm font-bold text-[#e5398a] line-through decoration-[#e5398a]/60 sm:text-base"
              >
                {t}
              </span>
            ))}
            <span className="self-center text-sm font-bold text-[#8a3d64] sm:text-base">
              から卒業
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-[#5c2f47] sm:text-lg">
            時間にゆとりを持ちながら
            <br className="sm:hidden" />
            利益もしっかり残せる働き方へ
          </p>

          <a
            href="#episodes"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#e5398a] to-[#9b4df5] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#e5398a]/30 transition-transform hover:scale-105 sm:text-lg"
          >
            物語を読む
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Episodes */}
      <section id="episodes" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-[#e5398a]">STORY</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            赤字サロンから抜け出すまでの全話
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#7b5467] sm:text-base">
            実話をもとにしたマンガで、ネイルサロン経営の現実と変わり方をお届けします。
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {episodes.map((ep) => (
            <article
              key={ep.no}
              className="group overflow-hidden rounded-3xl border border-[#ffd2e8] bg-white shadow-[0_12px_40px_-20px_rgba(229,57,138,0.5)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#ffeaf5]">
                {ep.ready ? (
                  <img
                    src={ep.image}
                    alt={`${ep.no} ${ep.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-bold text-[#e5398a]/60">
                    COMING SOON
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-[#e5398a] px-4 py-1 text-sm font-black text-white shadow-md">
                  {ep.no}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black sm:text-2xl">{ep.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7b5467]">{ep.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#e5398a] to-[#9b4df5] px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-black leading-relaxed sm:text-3xl">
          その方法を、今からお話しします。
        </h2>
        <p className="mt-4 text-sm opacity-90 sm:text-base">
          人脈なし。お金なし。コネなし。それでも、自力で黒字化した方法を公開中。
        </p>
        <a
          href="#episodes"
          className="mt-8 inline-flex rounded-full bg-white px-10 py-4 text-base font-black text-[#e5398a] shadow-xl transition-transform hover:scale-105"
        >
          第1話を読む
        </a>
      </section>

      <footer className="bg-[#fff6fb] py-8 text-center text-xs text-[#a67f93]">
        © NailBiz
      </footer>
    </main>
  );
}
