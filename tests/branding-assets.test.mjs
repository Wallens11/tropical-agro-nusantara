import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const files = [
  new URL("../app/layout.tsx", import.meta.url),
  new URL("../components/header.tsx", import.meta.url),
  new URL("../components/hero.tsx", import.meta.url),
  new URL("../components/footer.tsx", import.meta.url),
];

test("branding uses the approved photo logo asset and brochure link", async () => {
  const company = JSON.parse(
    await readFile(new URL("../data/company.json", import.meta.url), "utf8"),
  );

  assert.equal(company.brochureUrl, "/docs/company-profile.pdf");

  for (const file of files) {
    const content = await readFile(file, "utf8");
    assert.match(content, /logo-company\.jpeg/);
    assert.doesNotMatch(content, /logo-(mark|wordmark)\.svg/);
  }
});
