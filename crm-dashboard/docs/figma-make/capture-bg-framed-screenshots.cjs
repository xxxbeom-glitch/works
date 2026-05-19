const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const repoRoot = path.resolve(__dirname, "..", "..");
const appPath = path.join(repoRoot, "src", "pages", "app.html");
const bgPath = path.join(repoRoot, "src", "assets", "bg", "01.jpg");
const outDir = path.join(repoRoot, "docs", "figma-make", "screenshots");

/** 출력 캔버스 — 참고 시안과 동일 1920×1080 */
const VIEWPORT = { width: 1920, height: 1080 };
const BG_URL = 'url("file:///' + bgPath.replace(/\\/g, "/") + '")';

/**
 * 참고 시안:
 * - 바탕화면: Windows 배율 150% 와 동일 (background-size: 150% auto)
 * - UI 프레임: 중앙에 떠 있고 상·하·좌·우에 배경이 보임 (zoom으로 축소)
 */
const CAPTURE_CSS = `
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    width: ${VIEWPORT.width}px !important;
    min-width: ${VIEWPORT.width}px !important;
    height: ${VIEWPORT.height}px !important;
    min-height: ${VIEWPORT.height}px !important;
    overflow: hidden !important;
    background: transparent !important;
  }
  body {
    display: grid !important;
    place-items: center !important;
  }
  .app-desktop-bg {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 0 !important;
    background-image: ${BG_URL} !important;
    background-color: transparent !important;
    background-size: 150% auto !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
  }
  .app-stage {
    position: relative !important;
    z-index: 1 !important;
    zoom: 0.86 !important;
    border-radius: 16px !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background: rgba(255, 255, 255, 0.48) !important;
    box-shadow: 0 24px 80px rgba(8, 20, 48, 0.28) !important;
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
  await frame.evaluate((sel) => {
    const btn = document.querySelector(sel);
    if (!btn) throw new Error("missing " + sel);
    btn.click();
  }, selector);
  await frame.page().waitForTimeout(900);
}

async function waitForReady(page) {
  await page.waitForSelector(".app-desktop-bg");
  await page.waitForFunction(() => {
    const bg = document.querySelector(".app-desktop-bg");
    return bg && getComputedStyle(bg).backgroundImage !== "none";
  });
  await page.waitForTimeout(500);
}

async function captureScenario(browser, scenario) {
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  try {
    await page.goto(fileUrl(scenario.page), { waitUntil: "networkidle" });
    await page.addStyleTag({ content: CAPTURE_CSS });
    await page.waitForSelector("#page-frame");
    await waitForReady(page);

    const frameHandle = await page.$("#page-frame");
    const frame = await frameHandle.contentFrame();
    await frame.waitForLoadState("networkidle");
    await frame.waitForTimeout(600);

    for (const selector of scenario.clicks) {
      await clickPanel(frame, selector);
    }
    await page.waitForTimeout(1200);
    await waitForReady(page);

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
