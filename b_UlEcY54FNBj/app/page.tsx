import { MetroLine } from "@/components/metro-line"
import { Train } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 顶部标题栏 */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg">
        <div className="flex items-center justify-center gap-3 py-4 px-4">
          <Train className="w-6 h-6" />
          <h1 className="text-lg font-bold tracking-wide">
            宁马城际沿线逛吃指南
          </h1>
        </div>
      </header>

      {/* 地铁线路图 */}
      <MetroLine />

      {/* 底部提示 */}
      <footer className="py-6 text-center text-xs text-muted-foreground">
        点击站点查看周边景点和美食
      </footer>
    </main>
  )
}
