import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public/images/duo.png");
const outputDir = path.join(root, "public/images");

const { width, height } = await sharp(input).metadata();
const mid = Math.floor(width / 2);
const gap = Math.floor(width * 0.02);

const shampooCrop = {
  left: 0,
  top: 0,
  width: mid - gap,
  height,
};

const conditionerCrop = {
  left: mid + gap,
  top: 0,
  width: width - (mid + gap),
  height,
};

await sharp(input)
  .extract(shampooCrop)
  .png()
  .toFile(path.join(outputDir, "shampoo.png"));

await sharp(input)
  .extract(conditionerCrop)
  .png()
  .toFile(path.join(outputDir, "conditioner.png"));

console.log("Split complete:", { width, height, shampooCrop, conditionerCrop });
