import { ThemeProvider } from "@/providers/theme.provider";
import { Child } from "@/types/global";

export default function HomeLayout({ children }: Readonly<Child>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="h-full">{children}</div>
    </ThemeProvider>
  );
}
