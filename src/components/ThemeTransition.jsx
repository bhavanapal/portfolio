import { useTheme } from "../context/ThemeContext";

export default function ThemeTransition() {
  const { isTransitioning } = useTheme();
  if (!isTransitioning) return null;
  return null;
}