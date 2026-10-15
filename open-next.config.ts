import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // Called by `opennextjs-cloudflare build`. Keep this as the Next.js build
  // so the package.json `build` script can run OpenNext without looping.
  buildCommand: "node scripts/next-build.mjs",
};
