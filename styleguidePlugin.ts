import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
      padding: "0 0.5rem 0.5rem 0.5rem",
      fontWeight: theme("fontWeight.bold"),
      fontSize: "30px",
      whiteSpace: "nowrap",
      fontFamily: theme("fontFamily.oldStandard"),
      "@screen lg": {
        padding: "0 1rem 0.5rem",
      },
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
      fontSize: "14px",
      lineHeight: "22px",
      "@screen xs": {
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
    ".promo-image": {
      "@media(min-width: 600px)": {
        height: "168px",
      },
      "@media(min-width: 900px)": {
        height: "268px",
      },
      "@media(min-width: 1024px)": {
        height: "200px",
      },
    },
    ".promo-item": {
      width: "100%",
      "@media(min-width: 600px)": {
        width: "45%",
      },
    },
    ".divider": {
      backgroundImage: "url('src/assets/images/divider.png')",
    },
    ".HoursStatus": {
      color: theme("colors.brand-primary"),
      fontWeight: "400",
      fontSize: "24px",
      "@screen xs": {
        fontSize: "18px",
      },
    },
    ".bordered-box-h": {
      position: "relative",
      padding: "34px",
      background: "white",
      "&::before, &::after, & div::before, & div::after": {
        content: "''",
        position: "absolute",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      },
      "&::before, &::after": {
        height: "18px",
        width: "100%",
        left: "0",
      },
      "&::before": {
        top: "0",
        backgroundImage: "url(/src/assets/images/border-h.png)",
      },
      "&::after": {
        bottom: "0",
        backgroundImage: "url(/src/assets/images/border-h.png)",
      },
    },
    ".bordered-box-v": {
      justifyItems: "center",
      "&::before, &::after": {
        width: "18px",
        height: "100%",
        top: "0",
        backgroundImage: "url('/src/assets/images/border-v.png')",
      },
      "&::before": {
        left: "0",
        backgroundImage: "url('/src/assets/images/border-v.png')",
      },
      "&::after": {
        right: "0",
        backgroundImage: "url('/src/assets/images/border-v.png')",
      },
    },
    ".map": {
      display: "none",
      padding: "18px",
      "@screen lg": {
        display: "block",
      },
    },
    ".shop": {
      padding: "18px",
      "@screen lg": {
        height: "290px",
      },
    },
    ".phone": {
      "@screen xs": {
        textDecoration: "underline",
      },
    },
    ".section": {
      "@media(min-width: 640px) and (max-width: 767px)": {
        gap: "16px",
      },
    },
    ".direction": {
      textDecoration: "underline",
    },
    ".online": {
      height: "8px",
      width: "8px",
      backgroundColor: "green",
      borderRadius: "100%",
      marginTop: "12px",
      marginRight: "6px",
      "@screen md": {
        height: "10px",
        width: "10px",
        marginTop: "16px",
      },
    },
    header: {
      borderBottom: "20px solid transparent",
      borderImage: "url('/src/assets/images/navbarBorder.png') 30 round",
    },
  });
});
