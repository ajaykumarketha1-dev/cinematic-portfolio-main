import type { OpenNextConfig } from "@opennextjs/aws";

const config = {
  default: {
    override: {
      wrapper: "cloudflare-node-compat",
      converter: "cloudflare",
      incrementalCache: "cloudflare",
      tagCache: "cloudflare",
      queue: "cloudflare",
      imageOptimization: "cloudflare",
    },
  },
} satisfies OpenNextConfig;

export default config;
