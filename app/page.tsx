import Dashboard from "@/components/Dashboard";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="w-full mx-auto h-screen flex flex-col">
      <Nav />
      <Dashboard />
    </main>
  )
}
