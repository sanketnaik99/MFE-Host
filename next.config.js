/** @type {import('next').NextConfig} */
const { CHILD1_URL } = process.env;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/child-1",
        destination: `${CHILD1_URL}/child-1`,
      },
      {
        source: "/child-1/:path*",
        destination: `${CHILD1_URL}/child-1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
