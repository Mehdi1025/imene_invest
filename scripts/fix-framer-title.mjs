import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const file = join(
  import.meta.dirname,
  "..",
  "public",
  "assets",
  "animate",
  "shared-lib.BtVeghIs.mjs",
);

const oldMeta =
  "description:`Made with Framer`,robots:`max-image-preview:large`,title:`My Framer Site`";

const newMeta =
  "description:`M&B by Reign — Investissement immobilier à Dubaï pour investisseurs francophones.`,robots:`max-image-preview:large`,title:`Investir à Dubaï | M&B by Reign`";

let content = readFileSync(file, "utf8");

if (!content.includes(oldMeta)) {
  console.error("Framer title pattern not found — already patched?");
  process.exit(1);
}

content = content.replace(oldMeta, newMeta);
writeFileSync(file, content, "utf8");
console.log("Patched Framer client-side title in shared-lib.BtVeghIs.mjs");
