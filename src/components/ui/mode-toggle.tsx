import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../ui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
    //   variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative flex items-center justify-center bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
    >
      {/* Display the Sun icon if the current theme is light, otherwise display the Moon icon */}
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
