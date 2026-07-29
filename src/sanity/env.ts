function requireEnv(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const sanityEnv = {
  get projectId() {
    return requireEnv(
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    );
  },
  get dataset() {
    return requireEnv(
      "NEXT_PUBLIC_SANITY_DATASET",
      process.env.NEXT_PUBLIC_SANITY_DATASET,
    );
  },
  get apiVersion() {
    return process.env.SANITY_API_VERSION ?? "2026-07-29";
  },
  get token() {
    return requireEnv("SANITY_API_TOKEN", process.env.SANITY_API_TOKEN);
  },
};
