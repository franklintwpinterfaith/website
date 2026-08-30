import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://franklintwpinterfaith.org/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the FTIC rebuilt homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Franklin Township Interfaith Council/);
  assert.match(html, /Many faiths\. One community\./);
  assert.match(html, /Community Resources/);
  assert.match(html, /Clergy Council/);
  assert.match(html, /Rev\. Sonya Redd/);
  assert.match(html, /Rabbi Eli L\. Garfinkel/);
  assert.match(html, /ftic110@gmail\.com/);
  assert.doesNotMatch(html, /href="#donate"/);
  assert.doesNotMatch(html, />Donate</);
  assert.doesNotMatch(html, /Contact us about giving/);
  assert.doesNotMatch(html, /Leadership details from the old website/);
  assert.doesNotMatch(html, /The old website included event announcements/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
  assert.doesNotMatch(html, /July 31, 2024/);
});

test("includes required public assets", async () => {
  await access(new URL("public/ftic-logo-color-transparent.png", projectRoot));
  await access(new URL("public/ftic-logo-color-white-background.png", projectRoot));
  await access(new URL("public/ftic-food-bank-impact.jpg", projectRoot));
  await access(new URL("public/leadership/rev-sonya-redd.jpg", projectRoot));
  await access(new URL("public/leadership/rabbi-eli-garfinkel.png", projectRoot));
  await access(new URL("public/og.png", projectRoot));
});
