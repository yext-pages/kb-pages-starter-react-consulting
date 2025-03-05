import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".button": {
      borderRadius: "16px",
      fontSize: "40px",
      lineHeight: "40px",
      paddingTop: "6px",
      height: "64px",
      textAlign: "center",
      whiteSpace: "nowrap",
      fontWeight: "400",
      fontFamily: theme("fontFamily.oldStandard"),
    },
    ".button-primary": {
      backgroundColor: theme("colors.brand-primary"),
      color: "white",
      border: `2px solid ${theme("colors.brand-primary")}`,
      "&:hover": {
        backgroundColor: theme("colors.brand-secondary"),
        color: "white",
        border: `2px solid ${theme("colors.brand-secondary")}`,
      },
    },
    ".button-secondary": {
      backgroundColor: theme("colors.brand-secondary"),
      color: theme("colors.brand-primary"),
      border: `2px solid ${theme("colors.brand-secondary")}`,
      "&:hover": {
        backgroundColor: theme("colors.brand-secondary"),
        color: "white",
        border: `2px solid ${theme("colors.brand-primary")}`,
      },
    },
    ".heading": {
      fontFamily: theme("fontFamily.primary"),
      fontWeight: theme("fontWeight.bold"),
    },
    ".heading-lead": {
      fontSize: "1.75rem",
      lineHeight: "1.14",
      "@screen sm": {
        fontSize: "3rem",
        lineHeight: "1.33",
      },
    },
    ".heading-head": {
      fontFamily: theme("fontFamily.oldStandard"),
      color: theme("colors.brand-primary"),
      fontSize: "67px",
      lineHeight: "70px",
      "@screen xs": {
        fontSize: "50px",
        lineHeight: "56px",
      },
    },
    ".heading-sub": {
      fontFamily: theme("fontFamily.gotham"),
      color: theme("colors.brand-primary"),
      fontSize: "35px",
      lineHeight: "52px",
      "@screen xs": {
        fontSize: "29px",
        lineHeight: "43px",
      },
    },
    ".link-primary": {
      color: theme("colors.brand-primary"),
      "&:hover": {
        color: theme("colors.brand-secondary"),
      },
    },
    ".link-secondary": {
      color: theme("colors.brand-secondary"),
      "&:hover": {
        color: theme("colors.brand-primary"),
      },
    },
    ".link-breadcrumbs": {
      color: theme("colors.brand-primary"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.gotham"),
    },
    ".link-underline": {
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "none",
      },
    },
    ".link-header": {
      fontFamily: theme("fontFamily.oldStandard"),
      color: theme("colors.brand-primary"),
      fontSize: "42px",
    },
    ".link-footer": {
      fontFamily: theme("fontFamily.oldStandard"),
      color: theme("colors.brand-primary"),
      fontSize: "29px",
    },
    ".border-primary": {
      borderColor: theme("colors.brand-primary"),
    },
    ".promo-image": {
      "@media(min-width: 600px)": {
        height: "168px",
      },
      "@media(min-width: 900px)": {
        height: "268px",
      },
    },
    ".promo-item": {
      width: "100%",
      "@media(min-width: 600px)": {
        width: "45%",
      },
    },
  });
});
