import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("media data points to the refreshed lab and product assets", async () => {
  const company = JSON.parse(
    await readFile(new URL("../data/company.json", import.meta.url), "utf8"),
  );

  assert.equal(company.gallery[0].label, "Processing Facility");
  assert.ok(Array.isArray(company.gallery[0].slides));
  assert.equal(company.gallery[0].slides?.length, 4);
  assert.equal(company.gallery[1].src, "/images/lab-report-mocaf.png");
  assert.equal(company.gallery[1].href, "/docs/JKF26-0000563_60006019_Final.pdf");
  assert.equal(company.gallery[2].label, "Finished Products");
  assert.ok(Array.isArray(company.gallery[2].slides));
  assert.equal(company.gallery[2].slides?.length, 2);
  assert.equal(company.products[0].image, "/images/product-mocaf-premium.png");
  assert.equal(company.products[1].image, "/images/product-tiwul-premium.png");
  assert.equal(company.team[0].image, "/images/team-tommy.png");
  assert.equal(company.team[1].image, "/images/team-danin.png");
  assert.equal(company.team[2].image, "/images/team-jennifer-avatar.png");
});
