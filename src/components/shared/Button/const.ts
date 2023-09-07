enum SizeButton {
  lg = "lg",
  sm = "sm",
  md = "md",
}

enum VariantButton {
  primary = "primary",
  default = "default",
}

const cnByVariantButton = {
  [VariantButton.primary]: "bg-primary text-white hover:bg-sky-700",
  [VariantButton.default]: "bg-lightgray text-primary hover:bg-gray",
};

const cnBySizeButton = {
  [SizeButton.lg]: "h-[40px] min-w-[160px]",
  [SizeButton.md]: "h-[32px] min-w-[148px]",
  [SizeButton.sm]: "h-[24px] min-w-[136px]",
};

export { SizeButton, VariantButton, cnByVariantButton, cnBySizeButton };
