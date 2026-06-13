import { chromium } from "@playwright/test";
import fs from "node:fs";

const outputDir = "ai/sprints/initial-sprint/validation";
const baseUrl = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:5173";

const viewports = [
  ["lumenor-desktop-1055x1491.png", { width: 1055, height: 1491 }],
  ["lumenor-mobile-390x844.png", { width: 390, height: 844 }],
  ["lumenor-tablet-768x1024.png", { width: 768, height: 1024 }],
  ["lumenor-wide-1440x1600.png", { width: 1440, height: 1600 }]
];

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch();
try {
  for (const [fileName, viewport] of viewports) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.screenshot({ path: `${outputDir}/${fileName}`, fullPage: false });
    await page.close();
    console.log(`Captured ${fileName}`);
  }
} finally {
  await browser.close();
}
