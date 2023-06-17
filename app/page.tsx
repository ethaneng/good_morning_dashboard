import Dashboard from "@/components/Dashboard";
import Nav from "@/components/Nav";
import ThemeProvider from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="w-full mx-auto h-screen flex flex-col dark:bg-zinc-950 transition-colors">
        <Nav />
        <Dashboard />
      </main>
    </ThemeProvider>
  )
}
