const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const repoRoot = path.resolve(__dirname, "..", "..");
const appPath = path.join(repoRoot, "src", "pages", "app.html");
const outDir = path.join(repoRoot, "docs", "figma-make", "screenshots");

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

const SCENARIOS = [
  { file: "page1-default-bg-framed.png", page: 1, clicks: [] },
  {
    file: "page1-panel1-collapsed-bg-framed.png",
    page: 1,
    clicks: ["#info-side-panel-toggle"],
  },
  {
    file: "page1-panel1-2-collapsed-bg-framed.png",
    page: 1,
    clicks: ["#info-side-panel-toggle", "#live-col-collapse-btn"],
  },
  {
    file: "page1-panel1-3-collapsed-bg-framed.png",
    page: 1,
    clicks: ["#info-side-panel-toggle", "#ai-col-collapse-btn"],
  },
  {
    file: "page1-panel2-3-collapsed-bg-framed.png",
    page: 1,
    clicks: ["#live-col-collapse-btn", "#ai-col-collapse-btn"],
  },
  {
    file: "page1-panel3-collapsed-bg-framed.png",
    page: 1,
    clicks: ["#ai-col-collapse-btn"],
  },
  { file: "page2-default-bg-framed.png", page: 2, clicks: [] },
  { file: "page3-default-bg-framed.png", page: 3, clicks: [] },
];

function fileUrl(pageNumber) {
  return `file:///${appPath.replace(/\\/g, "/")}#page=${pageNumber}`;
}

async function clickPanel(frame, selector) {
  const target = frame.locator(selector);
  await target.waitFor({ state: "visible" });
  await target.click();
  await frame.page().waitForTimeout(700);
}

async function captureScenario(browser, scenario) {
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  try {
    await page.goto(fileUrl(scenario.page), { waitUntil: "load" });
    await page.addStyleTag({ content: CAPTURE_CSS });
    await page.waitForSelector("#page-frame");
    await page.waitForTimeout(800);

    const frameHandle = await page.$("#page-frame");
    const frame = await frameHandle.contentFrame();
    await frame.waitForLoadState("load");
    await frame.waitForTimeout(500);

    for (const selector of scenario.clicks) {
      await clickPanel(frame, selector);
    }

    const outputPath = path.join(outDir, scenario.file);
    await page.screenshot({ path: outputPath, type: "png" });
    console.log(outputPath);
  } finally {
    await page.close();
  }
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  try {
    for (const scenario of SCENARIOS) {
      await captureScenario(browser, scenario);
    }
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
