import { getStationById, stations } from "@/lib/stations-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Utensils, Store } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function generateStaticParams() {
  return stations.map((station) => ({
    id: station.id,
  }))
}

export default async function FoodsPage({
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
      <header
        className={`sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg`}
      >
        <div className="flex items-center gap-3 py-4 px-4">
          <Link
            href={`/station/${station.id}`}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold">美食店铺</h1>
            <p className="text-xs text-white/80">{station.name}</p>
          </div>
        </div>
      </header>

      {/* 美食列表 */}
      <div className="p-4 space-y-4">
        {/* 主要美食 */}
        {station.foods.length > 0 && (
          <div className="space-y-3">
            {station.foods.map((food) => (
              <Card key={food.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                      <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground">
                          {food.name}
                        </h3>
                        {food.category && (
                          <span className="px-2 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full">
                            {food.category}
                          </span>
                        )}
                      </div>
                      {food.description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {food.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* 分类美食 */}
        {station.foodCategories?.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="sticky top-16 z-40 bg-background py-2">
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <Store className="w-4 h-4 text-orange-500" />
                {category.title}
              </h2>
              {category.description && (
                <p className="text-xs text-muted-foreground mt-1">
                  {category.description}
                </p>
              )}
            </div>

            {category.foods.map((food) => (
              <Card key={food.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <Utensils className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground">
                          {food.name}
                        </h3>
                        {food.category && (
                          <span className="px-2 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full">
                            {food.category}
                          </span>
                        )}
                      </div>
                      {food.description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {food.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}

        {station.foods.length === 0 && !station.foodCategories?.length && (
          <div className="text-center py-12 text-muted-foreground">
            暂无美食信息
          </div>
        )}
      </div>
    </main>
  )
}
