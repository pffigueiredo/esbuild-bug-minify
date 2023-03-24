import { build, BuildOptions } from "esbuild";
import { removeSync, copySync } from "fs-extra";

/**
 * ESBuild Params
 * @link https://esbuild.github.io/api/#build-api
 */
const buildParams: BuildOptions = {
  color: true,
  entryPoints: ["src/index.tsx"],
  loader: { ".ts": "tsx", ".json": "json", ".png": "file", ".jpeg": "file", ".jpg": "file", ".svg": "file" },
  assetNames: "assets/[name]-[hash]",
  outdir: "build",
  minify: true,
  format: "cjs",
  bundle: true,
  sourcemap: false,
  logLevel: "error",
  incremental: false
};

// Clean build folder
try {
  removeSync("build");
} catch (err) {
  console.error(err);
}
// Copy public folder into build folder
try {
  copySync("public", "build");
} catch (err) {
  console.error(err);
}

build(buildParams).catch(() => process.exit(1));
