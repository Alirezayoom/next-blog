/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ali",
        mongodb_password: "ali",
        mongodb_clustername: "cluster0",
        mongodb_database: "sms-test",
      },
    };
  }

  return {
    env: {
      mongodb_username: "ali",
      mongodb_password: "ali",
      mongodb_clustername: "cluster0",
      mongodb_database: "sms",
    },
  };
};
