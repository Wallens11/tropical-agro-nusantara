import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

async function loadCompanyData() {
  const raw = await readFile(new URL("../data/company.json", import.meta.url), "utf8");
  return JSON.parse(raw);
}

test("company data matches the approved profile essentials", async () => {
  const company = await loadCompanyData();

  assert.equal(company.name, "PT. Tropical Agro Nusantara");
  assert.equal(company.foundedYear, "2026");
  assert.equal(company.contact.phone, "+6282185449855");
  assert.equal(company.contact.additionalPhones[0].phone, "+819075068018");
  assert.equal(company.contact.email, "tropicalagronusantara@virgilian.com");
  assert.match(company.history.summary, /mocaf flour/i);
  assert.match(company.history.summary, /tiwul/i);
  assert.equal(company.products.length, 2);
  assert.deepEqual(
    company.team.map((member) => member.name),
    ["Tommy", "Danin", "Jennifer"],
  );
});
