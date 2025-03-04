import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      padding: `${theme("spacing.2")} ${theme("spacing.6")}`,
      fontWeight: theme("fontWeight.bold"),
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
      backgroundColor: "white",
      color: theme("colors.brand-secondary"),
      border: `2px solid ${theme("colors.brand-primary")}`,
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
      fontSize: "14px",
      lineHeight: "22px",
      "@screen sm": {
        fontSize: "1.5rem",
        lineHeight: "1.25",
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
    ".location-path": {
      fontFamily: theme("fontFamily.gotham"),
      fontSize: "14px",
      color: theme("colors.brand-primary"),
    },
    ".location-button": {
      backgroundColor: theme("colors.brand-secondary"),
      padding: "14px",
      borderRadius: "16px",
    },
  });
});
