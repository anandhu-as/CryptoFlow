export const clerkAppearance = {
  variables: {
    colorPrimary: "#059669", // emerald-600
    colorText: "#0F172A", // slate-900
    colorTextSecondary: "#64748B", // slate-500
    colorBackground: "#FFFFFF",
    colorInputBackground: "#FFFFFF",
    colorInputText: "#0F172A",
    colorNeutral: "#0F172A",
    borderRadius: "0.625rem",
    fontFamily: "var(--font-sans)",
  },
  elements: {
    rootBox: "w-full",
    card: "bg-white border border-slate-200 shadow-sm rounded-2xl",
    headerTitle: "text-slate-900",
    headerSubtitle: "text-slate-500",
    socialButtonsBlockButton:
      "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors",
    dividerLine: "bg-slate-200",
    dividerText: "text-slate-400",
    formFieldLabel: "text-slate-600",
    formFieldInput:
      "bg-white border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500/20",
    formButtonPrimary:
      "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-colors",
    footer: "bg-transparent",
    footerActionText: "text-slate-500",
    footerActionLink: "text-emerald-600 hover:text-emerald-700 font-medium",
    identityPreviewEditButton: "text-emerald-600 hover:text-emerald-700",
  },
} as const;
