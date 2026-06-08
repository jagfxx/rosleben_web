import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outputDir = path.join(root, "public/images");
const duoPath = path.join(outputDir, "duo.png");

if (!fs.existsSync(duoPath)) {
  throw new Error("No se encontró public/images/duo.png. Restaura la imagen original antes de dividir.");
}

const { width, height } = await sharp(duoPath).metadata();
const mid = Math.floor(width / 2);
const gap = Math.floor(width * 0.02);

const shampooCrop = { left: 0, top: 0, width: mid - gap, height };
const conditionerCrop = { left: mid + gap, top: 0, width: width - (mid + gap), height };

await sharp(duoPath)
  .extract(shampooCrop)
  .png()
  .toFile(path.join(outputDir, "shampoo.png"));

await sharp(duoPath)
  .extract(conditionerCrop)
  .png()
  .toFile(path.join(outputDir, "conditioner.png"));

console.log("Split complete (sin modificar píxeles):", {
  duo: { width, height },
  shampooCrop,
  conditionerCrop,
});
