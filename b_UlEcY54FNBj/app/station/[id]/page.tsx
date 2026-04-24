import { getStationById, stations } from "@/lib/stations-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, MapPin, Utensils } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function generateStaticParams() {
  return stations.map((station) => ({
    id: station.id,
  }))
}

export default async function StationPage({
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
            href="/"
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold">{station.name}</h1>
            <p className="text-xs text-white/80">宁马城际S2线</p>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <div className="p-4 space-y-4">
        {/* 景点卡片 */}
        <Link href={`/station/${station.id}/attractions`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-orange-600">
                      游玩景点
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {station.attractions.length} 个推荐景点
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground rotate-180" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {station.attractions.slice(0, 3).map((attr) => (
                    <span
                      key={attr.id}
                      className="px-2 py-1 text-xs bg-orange-100 rounded-full text-orange-700"
                    >
                      {attr.name}
                    </span>
                  ))}
                  {station.attractions.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                      +{station.attractions.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 美食卡片 */}
        <Link href={`/station/${station.id}/foods`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-orange-600">
                      美食店铺
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {station.foods.length +
                        (station.foodCategories?.reduce(
                          (acc, cat) => acc + cat.foods.length,
                          0
                        ) || 0)}{" "}
                      家推荐店铺
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground rotate-180" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {station.foods.slice(0, 3).map((food) => (
                    <span
                      key={food.id}
                      className="px-2 py-1 text-xs bg-orange-100 rounded-full text-orange-700"
                    >
                      {food.name}
                    </span>
                  ))}
                  {station.foods.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                      +{station.foods.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
}
