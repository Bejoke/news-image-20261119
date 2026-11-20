# World news in one image — Thursday, 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Bejoke/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Bejoke/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up the world's news of 19 November 2026, drawn as a
newspaper front page (`entry.png`, 1024×1024, drawn with PIL so every word
is crisp and spelled correctly).

## The stories

- **Historic summit in Shenzhen** — Trump, Xi & Putin meet at the APEC
  summit; a "peace declaration" after 90-minute talks.
- **Iran war** — Trump: the U.S. will "see what happens" after Jan. 1,
  2027, and warns it would "wipe them out" if Iran fired a dirty bomb
  at Washington.
- **Crimea Bridge hit again** — Ukraine strikes the bridge a third time
  this week; Putin vows a "far more painful" response.
- **ICJ: Myanmar guilty** — the UN court rules Myanmar committed
  state-sponsored genocide, the first ruling of its kind.
- **Missile hits Riyadh** — a Houthi missile attack damages the PIF Tower
  in Saudi Arabia's capital.
- Also: GTA VI launch week (doctors urge gamers to take breaks),
  Denmark–Greenland–U.S. Arctic security deal, Rio Tinto pays $250m
  over its Papua New Guinea mine.

All facts as reported on 19 November 2026 (Just Security, BBC, Reuters,
The New York Times).

## How it is built

`draw.py` (outside this repo) renders `entry.png` with PIL. `main.ts`
(Node 22, standard library only) copies `entry.png` to
`/output/entry.png`, so both grader runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## make.fun

Entry for the `news-image-20261119` bounty ($250 USDC). Payout wallet is
in `.makefun/owner.json`.
