import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { episodes, getEpisode } from "@/lib/episodes";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/episodes/$id")({
  loader: ({ params }) => {
    const ep = getEpisode(params.id);
    if (!ep) throw notFound();
    return { ep };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `第${loaderData.ep.num}話 ${loaderData.ep.title.join("")}｜NailBiz`;
    const d = `NailBizストーリー第${loaderData.ep.num}話「${loaderData.ep.title.join("")}」`;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <Link to="/" className="text-[#e5398a] underline">トップへ戻る</Link>
    </div>
  ),
  component: EpisodePage,
});

function EpisodePage() {
  const { ep } = Route.useLoaderData();
  const prev = episodes[ep.num - 2];
  const next = episodes[ep.num];
  return (
    <main className="relative min-h-screen bg-white font-['Noto_Sans_JP',system-ui,sans-serif] text-[#222]">
      <Link to="/">
        <img src={logoAsset.url} alt="NailBiz" className="absolute right-4 top-4 z-20 w-20 sm:right-8 sm:w-28" />
      </Link>
      <article className="mx-auto max-w-xl px-5 pb-20 pt-20 text-center">
        <p className="inline-block border-b-4 border-[#ffd400] px-1 text-xl font-bold">
          第<span className="text-4xl font-black">{ep.num}</span>話
        </p>
        <h1 className="mt-10 text-3xl font-black leading-snug text-[#e5398a] sm:text-4xl">
          {ep.title.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </h1>
        <img src={ep.hero} alt={ep.title.join("")} className="mx-auto mt-14 w-full max-w-md" />
        <div className="mt-14 flex flex-col gap-6 text-sm font-medium sm:text-base">
          {ep.body.map((line, i) =>
            typeof line === "string" ? (
              <p key={i}>{line}</p>
            ) : (
              <p key={i}>
                <span className="border-b-2 border-[#e5398a] font-bold text-[#e5398a]">{line.em}</span>
                {line.rest && <span> {line.rest}</span>}
              </p>
            ),
          )}
        </div>
        <nav className="mt-16 flex justify-between gap-3 text-sm font-bold">
          {prev ? (
            <Link to="/episodes/$id" params={{ id: prev.id }} className="text-[#e5398a]">‹ 第{prev.num}話</Link>
          ) : <span />}
          <Link to="/" hash="episodes" className="text-[#e5398a]">一覧へ</Link>
          {next ? (
            <Link to="/episodes/$id" params={{ id: next.id }} className="text-[#e5398a]">第{next.num}話 ›</Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
}
