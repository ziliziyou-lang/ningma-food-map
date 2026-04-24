"use client"

import { stations } from "@/lib/stations-data"
import Link from "next/link"
import { Zap } from "lucide-react"

const dotColors = {
  default: {
    bg: "bg-orange-500",
    hover: "group-hover:bg-orange-600",
  },
  red: {
    bg: "bg-red-500",
    hover: "group-hover:bg-red-600",
  },
  yellow: {
    bg: "bg-amber-400",
    hover: "group-hover:bg-amber-500",
  },
}

export function MetroLine() {
  return (
    <div className="relative py-8 px-4">
      {/* 中央轨道线 */}
      <div className="absolute left-1/2 top-8 bottom-8 w-1.5 -translate-x-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400 rounded-full shadow-sm" />

      {/* 站点列表 */}
      <div className="relative flex flex-col gap-5">
        {stations.map((station, index) => {
          const isLeft = index % 2 === 0
          const isFirst = index === 0
          const isLast = index === stations.length - 1
          const colorKey = station.color || "default"
          const colors = dotColors[colorKey]

          return (
            <Link
              href={`/station/${station.id}`}
              key={station.id}
              className="relative flex items-center group h-10"
            >
              {/* 左侧站点名 */}
              <div className={`flex-1 flex ${isLeft ? 'justify-end pr-6' : 'justify-end pr-6 invisible'}`}>
                {isLeft && (
                  <div className="flex items-center gap-2">
                    {isFirst && (
                      <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                        始发站
                      </span>
                    )}
                    {station.isExpress && (
                      <span className="flex items-center gap-0.5 text-xs text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                        <Zap className="w-3 h-3" />
                        快车
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-orange-600 group-hover:font-semibold">
                      {station.name}
                    </span>
                  </div>
                )}
              </div>

              {/* 中央站点圆点 - 在轨道线上 */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full ${colors.bg} ring-4 ring-white shadow-md transition-all duration-200 group-hover:scale-150 group-hover:shadow-lg ${colors.hover}`}
                />
              </div>

              {/* 右侧站点名 */}
              <div className={`flex-1 flex ${!isLeft ? 'justify-start pl-6' : 'justify-start pl-6 invisible'}`}>
                {!isLeft && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-orange-600 group-hover:font-semibold">
                      {station.name}
                    </span>
                    {station.isExpress && (
                      <span className="flex items-center gap-0.5 text-xs text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                        <Zap className="w-3 h-3" />
                        快车
                      </span>
                    )}
                    {isLast && (
                      <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                        终点站
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {/* 图例 */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground px-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
          <span>马鞍山市区</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
          <span>当涂县</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-orange-600 shrink-0" />
          <span>快车</span>
        </div>
      </div>
    </div>
  )
}
