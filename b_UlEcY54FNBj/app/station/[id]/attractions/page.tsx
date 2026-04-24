import { getStationById, stations } from "@/lib/stations-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function generateStaticParams() {
  return stations.map((station) => ({
    id: station.id,
  }))
}

export default async function AttractionsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const station = getStationById(id)

  if (!station) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg">
        <div className="flex items-center gap-3 py-4 px-4">
          <Link
            href={`/station/${station.id}`}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold">游玩景点</h1>
            <p className="text-xs text-white/80">{station.name}</p>
          </div>
        </div>
      </header>

      {/* 景点列表 */}
      <div className="p-4 space-y-3">
        {station.attractions.map((attraction, index) => (
          <Card key={attraction.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-orange-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {attraction.name}
                    </h3>
                  </div>
                  {attraction.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {attraction.description}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {station.attractions.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            暂无景点信息
          </div>
        )}
      </div>
    </main>
  )
}
