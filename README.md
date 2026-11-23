# One Emoji, One Smile 🤗

![bounty](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)
![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Nghyuu/u-0xkianno-one-emoji-one-smile-5470751f-entry/rank.svg)
![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Nghyuu/u-0xkianno-one-emoji-one-smile-5470751f-entry/reward.svg)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on make.fun.

## The entry

Exactly one emoji: 🤗 — the hugging face.

Why this one? A stranger glancing at a phone screen reads it instantly as warm, open and friendly — a hug offered, not a comment made. It is warm at first glance, universal across ages and backgrounds, and it is a deliberate choice rather than the first smiley that comes to mind. It carries no intimacy, sarcasm or flirtation, so it works coming from someone unknown. Of all the candidates, it is the one most likely to make a stranger smile.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.txt` — the single emoji, byte for byte — to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Files

- `entry.txt` — the entry itself: exactly one emoji, no other content.
- `main.ts` — the program that writes the entry to the output directory.
- `LICENSE` — MIT.
