"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Monitor, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { useId } from "react";
import { Switch } from "@/components/ui/switch";

// Theme context
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
  storageKey?: string;
}

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "fellou-reports-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  // On mount, sync theme from localStorage if available
  React.useEffect(() => {
    const storedTheme = (typeof window !== "undefined" && localStorage.getItem(storageKey)) as Theme | null;
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme);
      }
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

// Grid Pattern Component
function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              suppressHydrationWarning
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Grid Component
const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

// Link Card Component
interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

function LinkCard({ title, description, href, icon }: LinkCardProps) {
  return (
    <motion.a
      href={href}
      className="relative bg-gradient-to-br from-purple-500 to-blue-500 p-[1px] rounded-xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative bg-background/90 backdrop-blur-md p-6 h-full rounded-xl overflow-hidden">
        <Grid size={20} />
        <div className="relative z-20 space-y-3">
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <span>詳細を見る</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-foreground/70" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Moon className="h-4 w-4 text-foreground/70" />
    </div>
  );
}

// Header Component
interface HeaderProps {
  navItems: { label: string; href: string }[];
}

function Header({ navItems }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 lg:px-12 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-2">
        <FileCode className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Fellou Reports
        </span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <ThemeToggle />
    </header>
  );
}

// Main Page Component
interface PageLinkData {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface PageProps {
  navItems: { label: string; href: string }[];
  pageLinks: PageLinkData[];
}

function PageLinkGrid({ pageLinks }: { pageLinks: PageLinkData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {pageLinks.map((link, index) => (
        <LinkCard
          key={index}
          title={link.title}
          description={link.description}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </div>
  );
}

function ModernLinkPage({ navItems, pageLinks }: PageProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        {/* Gradient Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-teal-900/40" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)]" />
        </div>
        
        <Header navItems={navItems} />
        
        <main className="pt-20">
          <div className="py-16 text-center">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technical Reports
            </motion.h1>
            <motion.p 
              className="text-foreground/70 max-w-2xl mx-auto px-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              技術調査レポートとドキュメントのコレクション。
              最新の技術トレンドや実装方法について詳細にまとめています。
            </motion.p>
          </div>
          
          <PageLinkGrid pageLinks={pageLinks} />
        </main>
      </div>
    </ThemeProvider>
  );
}

// Example Usage
export default function Page() {
  const navItems = [
    { label: "ホーム", href: "/" },
    { label: "レポート", href: "#reports" },
    { label: "カテゴリー", href: "#categories" },
    { label: "検索", href: "#search" },
  ];
  
  const pageLinks = [
    {
      title: "Electron Mac メニューバー",
      description: "ElectronでMacのメニューバーにアイコンと機能を追加する方法についての包括的なレポート。実装方法からベストプラクティスまで詳しく解説。",
      href: "/electron-mac",
      icon: <Monitor className="h-6 w-6 text-purple-500" />
    },
    // プレースホルダーとして追加のカード
    {
      title: "Coming Soon",
      description: "新しいレポートを準備中です。最新の技術トレンドや実装方法について詳しく解説予定。",
      href: "#",
      icon: <FileCode className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Coming Soon",
      description: "新しいレポートを準備中です。最新の技術トレンドや実装方法について詳しく解説予定。",
      href: "#",
      icon: <FileCode className="h-6 w-6 text-teal-500" />
    },
  ];
  
  return <ModernLinkPage navItems={navItems} pageLinks={pageLinks} />;
}
