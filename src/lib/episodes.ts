import sampleHero from "@/assets/episode-sample.png.asset.json";

export type Line = string | { em: string; rest?: string };

export type Episode = {
  id: string;
  num: number;
  title: string[];
  hero: string;
  body: Line[];
};

const sampleBody: Line[] = [
  "10代後半、アパレル店員として勤務。",
  "当時はカリスマ店員が流行し、",
  "憧れの存在だった。",
  "しかし実際は低賃金。",
  "洋服代なども差し引かれ、",
  "手元に残るのは数万円のみ。",
  { em: "「資格を取れば人生が上手くいく」", rest: "と思い、" },
  "ネイルスクールへ通うことを決意。",
  "団体行動は得意ではなく、",
  "ネイリストは1対1の仕事のため、",
  "職場の人間関係に悩まされずに済む。",
  "「基本1人仕事」という点に",
  "強く惹かれた。",
  "実際になってからも苦労はあったが、",
  "適性は合っており、",
  "やりがいも感じていた。",
  "休みの日はセミナーやスクールに通い",
  "技術を磨く日々。",
  "人脈も資金もないため、貯金のみで",
  "マンション開業に至る。",
  { em: "「開業すれば予約は入る」" },
  { em: "「技術があれば上手くいく」" },
  "――そう信じてのスタートだった",
];

const titles: string[][] = [
  ["なぜネイリストを", "選んだのか"],
  ["赤字", "そこからの苦しみ"],
  ["発想の転換", "（経費削減）"],
  ["時短×高単価の", "確立"],
  ["スタッフ雇用の壁"],
  ["満席ネイルサロンへ"],
  ["今も学び続ける"],
  ["経営スクールでの学び", "そしてこれから"],
];

export const episodes: Episode[] = titles.map((title, i) => ({
  id: String(i + 1),
  num: i + 1,
  title,
  hero: sampleHero.url,
  body: sampleBody,
}));

export const getEpisode = (id: string) => episodes.find((e) => e.id === id);
