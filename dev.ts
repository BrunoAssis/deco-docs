#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";

await dev(import.meta.url, "./main.ts", {
  siteId: 530,
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});