const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Squarify",
  tagline: "Squarify provides free GED math tutorial",
  url: "https://squarify.com",
  baseUrl: "/",
  favicon: "img/squarify-logo.png",
  organizationName: "Squarify", // Usually your GitHub org/user name.
  projectName: "Squarify", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    announcementBar: {
      id: "announcement", // Any value that will identify this message.
      content:
        "We are going to release our geometry and graphs/function section on 6/24/2020!",
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Squarify",
        src: "img/nav-white-logo.png",
        srcDark: "img/nav-black-logo.png",
      },
      links: [
        {
          to: "/docs/basic-math-1",
          activeBasePath: "tutorials",
          label: "Tutorials",
          position: "left",
        },
        {
          href:
            "https://docs.google.com/forms/d/e/1FAIpQLSevIBQPyKWi25Eym5AB1dneEgnOI9o_s9EqIQi9My9KxZ_Z1w/viewform",
          label: "Feedback",
          position: "right",
        },
        {
          href: "https://www.facebook.com/groups/865336430638379/",
          label: "Facebook",
          position: "right",
        },
        {
          href: "https://discord.gg/mCGJjy3",
          label: "Discord",
          position: "right",
        },
      ],
    },

    plugins: ["@docusaurus/plugin-google-gtag"],
    themeConfig: {
      gtag: {
        trackingID: "UA-168116370-1",
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    },

    footer: {
      style: "dark",

      links: [
        {
          title: "Math Tutorials",
          items: [
            {
              label: "Basic Math",
              to: "docs/basic-math-1",
            },
            {
              label: "Basic Algebra",
              to: "docs/basic-algebra/basic-algebra-1",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/mCGJjy3",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/865336430638379/",
            },
          ],
        },
        {
          title: "Feedback",
          items: [
            {
              label: "Feedback Form",
              href:
                "https://docs.google.com/forms/d/e/1FAIpQLSevIBQPyKWi25Eym5AB1dneEgnOI9o_s9EqIQi9My9KxZ_Z1w/viewform",
            },
          ],
        },
      ],

      copyright: ` GED® is a registered trademark of the American Council on Education (ACE) and administered exclusively by GED Testing Service LLC under license. This content is not endorsed or approved by ACE or GED Testing Service. 
      `,
    },
    image: "img/squarify-logo.png",
    ogImage: "img/squarify-logo.png",
    twitterImage: "img/squarify-logo.png",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.

          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
