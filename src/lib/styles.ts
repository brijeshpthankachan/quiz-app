import { cva } from "class-variance-authority";

export const timerClass = cva(
  "flex justify-center items-center w-[50px] h-[50px] rounded-full border-[2px] z-2 bg-white dark:bg-slate-700",
  {
    variants: {
      timer: {
        running:
          "border-blue-100",
        finished:
          "border-red-700 animate-jump animate-once animate-duration-700 animate-ease-in-out",
      },
    },
    defaultVariants: {
      timer: "running",
    },
  }
);
