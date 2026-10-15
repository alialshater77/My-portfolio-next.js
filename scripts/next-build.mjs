import { spawnSync } from "node:child_process"
import { readFileSync } from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(path.join(root, "package.json"))
const nextBin = require.resolve("next/dist/bin/next")

const raw = readFileSync(path.join(root, "wrangler.jsonc"), "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/^\s*\/\/.*$/gm, "")

const vars = JSON.parse(raw).vars ?? {}
const env = { ...process.env }

for (const [key, value] of Object.entries(vars)) {
  if (typeof value === "string" && env[key] == null) {
    env[key] = value
  }
}

const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env,
  cwd: root,
})

process.exit(result.status ?? 1)
