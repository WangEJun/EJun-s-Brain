import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = [
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml",
  "mjx-container",
  "mjx-assistive-mml",
];

export default defineConfig({
  title: "知识库",
  themeConfig: {
    // siteTitle: false,
    // logo: "/logo.png",
    docFooter: { prev: "上一篇", next: "下一篇" },
    nav: [
      { text: "社区工作者", link: "/guild/sqgzz/sgzs" },
      { text: "公务员", link: "/guild/gwy/slgx" },
      // { text: "地图", link: "/guild/map/dqjd" },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com" }],
    sidebar: {
      "/guild/gwy": [
        {
          text: "公务员",
          items: [
            {
              text: "数量关系",
              link: "/guild/gwy/slgx",
            },
            {
              text: "资料分析",
              link: "/guild/gwy/zlfx",
            },
            {
              text: "判断推理",
              link: "/guild/gwy/dlpd",
            },
          ],
        },
      ],
      "/guild/sqgzz": [
        {
          text: "社区工作者",
          items: [
            {
              text: "社工知识",
              link: "/guild/sqgzz/sgzs",
            },
            {
              text: "如何做好社区工作者",
              link: "/guild/sqgzz/howTodo",
            },
          ],
        },
      ],
    },
    outline: {
      label: "大纲",
    },
  },
  markdown: {
    config: md => {
      md.use(mathjax3);
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
        crossorigin: "",
      },
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
});
