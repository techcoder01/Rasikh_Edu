const nextConfig = {
};

export default nextConfig;

export const webpack = (config) => {
  config.experiments = { ...config.experiments, topLevelAwait: true };
  return config;
};