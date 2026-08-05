// Launches the SWA CLI under a pinned Node 22 binary.
//
// @azure/static-web-apps-cli hardcodes a check that refuses to start if the
// process it's running under is newer than Node 22, even though the actual
// Azure Functions host has no problem with newer Node versions. Until that
// check is updated upstream, we run the CLI itself under a portable Node 22
// (see README "Local development") instead of touching the machine's
// default Node install.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const toolsDir = path.resolve(import.meta.dirname, "..", ".tools");

const nodeDirName = existsSync(toolsDir)
  ? readdirSync(toolsDir).find((entry) => /^node-v22\..*-win-x64$/.test(entry))
  : undefined;

if (!nodeDirName) {
  console.error(
    "Portable Node 22 not found in .tools/. See README 'Local development' " +
      "for the one-time setup step, then re-run `npm run swa`.",
  );
  process.exit(1);
}

const node22 = path.join(toolsDir, nodeDirName, "node.exe");
const swaBin = path.resolve(
  import.meta.dirname,
  "..",
  "node_modules",
  "@azure",
  "static-web-apps-cli",
  "dist",
  "cli",
  "bin.js",
);

const result = spawnSync(node22, [swaBin, "start"], { stdio: "inherit" });
process.exit(result.status ?? 1);
