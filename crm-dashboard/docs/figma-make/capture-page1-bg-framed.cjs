const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const repoRoot = path.resolve(__dirname, "..", "..");
const appPath = path.join(repoRoot, "src", "pages", "app.html");
const outDir = path.join(repoRoot, "docs", "figma-make", "screenshots");
const outFile = "page1-default-bg-framed.png";

const APP_W = 1920;
const APP_H = 1080;
const FRAME_GAP_Y = 26;
const VIEWPORT = {
  width: APP_W,
  height: APP_H + FRAME_GAP_Y * 2,
};

const CAPTURE_CSS = `
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    min-height: ${VIEWPORT.height}px !important;
    height: ${VIEWPORT.height}px !important;
    overflow: hidden !important;
    background: transparent !important;
  }
  body {
    display: grid !important;
    place-items: center !important;
  }
  .app-desktop-bg {
    background-size: contain !important;
    background-position: center center !important;
  }
  html {
    background-image: none !important;
  }
  .bg-switcher {
    display: none !important;
  }
`;

function fileUrl(filePath, page) {
  return `file:///${filePath.replace(/\\/g, "/")}#page=1`;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: VIEWPORT,
      deviceScaleFactor: 1,
    });

    await page.goto(fileUrl(appPath, 1), { waitUntil: "load" });
    await page.addStyleTag({ content: CAPTURE_CSS });
    await page.waitForSelector("#page-frame");
    await page.waitForTimeout(800);

    const frameHandle = await page.$("#page-frame");
    const frame = await frameHandle.contentFrame();
    await frame.waitForLoadState("load");
    await frame.waitForTimeout(500);

    const outputPath = path.join(outDir, outFile);
    await page.screenshot({ path: outputPath, type: "png" });
    console.log(outputPath);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
