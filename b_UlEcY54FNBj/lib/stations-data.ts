export interface Attraction {
  id: string
  name: string
  description?: string
}

export interface Food {
  id: string
  name: string
  description?: string
  category?: string
}

export interface FoodCategory {
  id: string
  title: string
  description?: string
  foods: Food[]
}

export interface Station {
  id: string
  name: string
  isExpress?: boolean
  color?: "red" | "yellow"
  attractions: Attraction[]
  foods: Food[]
  foodCategories?: FoodCategory[]
}

export const stations: Station[] = [
  {
    id: "1",
    name: "西善桥站",
    isExpress: true,
    attractions: [
      { id: "1-a-1", name: "建宁公园" },
      { id: "1-a-2", name: "姚南村明墓石刻" },
      { id: "1-a-3", name: "六朝遗址" },
    ],
    foods: [
      { id: "1-f-1", name: "地道老面馆", category: "面馆" },
      { id: "1-f-2", name: "鸭血粉丝汤", category: "小吃" },
    ],
  },
  {
    id: "2",
    name: "雨花经济开发区站",
    attractions: [
      { id: "2-a-1", name: "莲花湖公园" },
      { id: "2-a-2", name: "板桥生态园" },
      { id: "2-a-3", name: "江豚广场" },
    ],
    foods: [
      { id: "2-f-1", name: "雨花吾悦广场", description: "火锅、烤肉、小吃一站式", category: "综合商场" },
    ],
  },
  {
    id: "3",
    name: "板桥站",
    attractions: [
      { id: "3-a-1", name: "落星岗遗址" },
      { id: "3-a-2", name: "三山矶" },
    ],
    foods: [
      { id: "3-f-1", name: "本地土菜馆", category: "土菜" },
      { id: "3-f-2", name: "板桥老卤面", category: "面馆" },
    ],
  },
  {
    id: "4",
    name: "板桥南站",
    attractions: [
      { id: "4-a-1", name: "新林滨江风光带" },
    ],
    foods: [
      { id: "4-f-1", name: "周边家常菜馆", category: "家常菜" },
    ],
  },
  {
    id: "5",
    name: "江宁镇站",
    attractions: [
      { id: "5-a-1", name: "江宁镇老街", description: "远眺新济洲" },
    ],
    foods: [
      { id: "5-f-1", name: "江宁镇老卤", category: "卤味" },
      { id: "5-f-2", name: "盐水鸭", category: "特产" },
    ],
  },
  {
    id: "6",
    name: "江宁滨江开发区站",
    isExpress: true,
    attractions: [
      { id: "6-a-1", name: "滨江公园" },
      { id: "6-a-2", name: "长江岸线风光" },
    ],
    foods: [
      { id: "6-f-1", name: "江鲜馆", category: "江鲜" },
      { id: "6-f-2", name: "农家菜", category: "农家菜" },
    ],
  },
  {
    id: "7",
    name: "牧龙站",
    attractions: [
      { id: "7-a-1", name: "牧龙风光" },
    ],
    foods: [
      { id: "7-f-1", name: "本地小吃", category: "小吃" },
    ],
  },
  {
    id: "8",
    name: "铜井站",
    attractions: [
      { id: "8-a-1", name: "铜井老街" },
      { id: "8-a-2", name: "江宁河风光" },
    ],
    foods: [
      { id: "8-f-1", name: "本地小吃", category: "小吃" },
      { id: "8-f-2", name: "特色土菜", category: "土菜" },
    ],
  },
  {
    id: "9",
    name: "慈湖高新区站",
    attractions: [
      { id: "9-a-1", name: "慈湖河公园" },
    ],
    foods: [
      { id: "9-f-1", name: "社区周边土菜", category: "土菜" },
      { id: "9-f-2", name: "生鲜小吃", category: "小吃" },
    ],
  },
  {
    id: "10",
    name: "湖北路·二中站",
    isExpress: true,
    color: "red",
    attractions: [
      { id: "10-a-1", name: "真趣园" },
      { id: "10-a-2", name: "马鞍山二中" },
      { id: "10-a-3", name: "采石矶", description: "打车10分钟可达" },
    ],
    foods: [
      { id: "10-f-1", name: "蔡老五面馆", description: "步行至健康路", category: "面馆" },
      { id: "10-f-2", name: "姐妹铁板鱿鱼", description: "鱿鱼炒面", category: "小吃" },
      { id: "10-f-3", name: "卡旺卡", description: "金鹰商圈", category: "奶茶" },
      { id: "10-f-4", name: "詹记", description: "金鹰商圈", category: "甜品" },
      { id: "10-f-5", name: "安工大肉饼", description: "沿途路过", category: "小吃" },
      { id: "10-f-6", name: "解放路美食街", description: "牛肉汤、炸串", category: "美食街" },
    ],
  },
  {
    id: "11",
    name: "湖南路·安工大站",
    color: "red",
    attractions: [
      { id: "11-a-1", name: "安徽工业大学" },
      { id: "11-a-2", name: "雨山湖公园" },
      { id: "11-a-3", name: "湖南路商圈", description: "金鹰、八佰伴" },
    ],
    foods: [
      { id: "11-f-1", name: "三子牛肉拉面", category: "面馆" },
      { id: "11-f-2", name: "新岗拉面馆", category: "面馆" },
      { id: "11-f-3", name: "騳街", description: "章鱼小丸子、烤冷面、卤肉卷", category: "小吃街" },
      { id: "11-f-4", name: "重阳路美食街", category: "美食街" },
      { id: "11-f-5", name: "蓬莱路、解放路一带小吃", category: "小吃" },
    ],
  },
  {
    id: "12",
    name: "雨山东路站",
    isExpress: true,
    color: "red",
    attractions: [
      { id: "12-a-1", name: "雨山湖公园" },
      { id: "12-a-2", name: "长江不夜城", description: "夜景" },
    ],
    foods: [
      { id: "12-f-1", name: "徐小厨新桥砂锅麻辣烫", description: "大润发附近，人气旺", category: "麻辣烫" },
      { id: "12-f-2", name: "傻阿哥砂锅", description: "大润发附近", category: "砂锅" },
      { id: "12-f-3", name: "涛娃子川菜", description: "大润发附近", category: "川菜" },
      { id: "12-f-4", name: "古茗", description: "大润发/印象汇", category: "奶茶" },
      { id: "12-f-5", name: "恋芝香", description: "马鞍山版詹记", category: "甜品" },
      { id: "12-f-6", name: "军民路美食街", description: "整条路全是吃的", category: "美食街" },
      { id: "12-f-7", name: "印象汇", description: "步行10分钟/骑车5分钟", category: "商场" },
      { id: "12-f-8", name: "古月坊炸鸡", category: "炸鸡" },
      { id: "12-f-9", name: "王家山炸鸡", category: "炸鸡" },
      { id: "12-f-10", name: "新一城炸鸡", category: "炸鸡" },
      { id: "12-f-11", name: "大巧坊鸭业", category: "卤味" },
      { id: "12-f-12", name: "石臼湖老鸭汤泡锅巴", category: "汤品" },
      { id: "12-f-13", name: "盛鲜生杀猪粉", category: "粉面" },
      { id: "12-f-14", name: "特色三鲜面", category: "面馆" },
      { id: "12-f-15", name: "一品火腿煲笋丝面", category: "面馆" },
      { id: "12-f-16", name: "三台拉面", category: "面馆" },
      { id: "12-f-17", name: "钟福聚205面馆", category: "面馆" },
      { id: "12-f-18", name: "味湾黄焖鸡米饭", category: "快餐" },
      { id: "12-f-19", name: "福妈砂锅米线", category: "米线" },
      { id: "12-f-20", name: "柒味糖水铺", category: "甜品" },
      { id: "12-f-21", name: "钱光明烤鸭店", category: "烤鸭" },
      { id: "12-f-22", name: "薛记烤鸭", category: "烤鸭" },
      { id: "12-f-23", name: "李达叔渣肉蒸饭", category: "蒸饭" },
      { id: "12-f-24", name: "董记祖传肉丝面", category: "面馆" },
    ],
  },
  {
    id: "13",
    name: "阳湖站",
    attractions: [
      { id: "13-a-1", name: "阳湖公园", description: "出站3分钟直达" },
      { id: "13-a-2", name: "古床博物馆" },
    ],
    foods: [
      { id: "13-f-1", name: "湖鲜", category: "湖鲜" },
      { id: "13-f-2", name: "本地家常菜", category: "家常菜" },
    ],
  },
  {
    id: "14",
    name: "马鞍山经开区站",
    attractions: [
      { id: "14-a-1", name: "节庆广场" },
    ],
    foods: [
      { id: "14-f-1", name: "经开区特色土菜馆", category: "土菜" },
    ],
  },
  {
    id: "15",
    name: "姑孰站",
    color: "yellow",
    attractions: [
      { id: "15-a-1", name: "清源门古城墙" },
      { id: "15-a-2", name: "凌云山公园" },
    ],
    foods: [
      { id: "15-f-1", name: "当涂大肉面", description: "一定要尝老字号", category: "面馆" },
    ],
    foodCategories: [
      {
        id: "15-c-1",
        title: "核心老城区（南寺路/姑孰路周边）",
        description: "距离最近，步行或短途打车即可到达",
        foods: [
          { id: "15-c-1-f-1", name: "蔡华英大肉面", description: "南寺路", category: "大肉面" },
          { id: "15-c-1-f-2", name: "姑孰路老面馆", category: "大肉面" },
          { id: "15-c-1-f-3", name: "姑孰初中门口小煎包", description: "南寺路", category: "包子/煎包" },
          { id: "15-c-1-f-4", name: "汉荣汤包", description: "原老二中巷子里", category: "包子/煎包" },
          { id: "15-c-1-f-5", name: "团结街小学门口特色炒面", category: "炒面/蒸饭" },
          { id: "15-c-1-f-6", name: "老式蒸饭", description: "天井街与南寺路交叉口", category: "炒面/蒸饭" },
          { id: "15-c-1-f-7", name: "鸡蛋灌饼", description: "天井街与南寺路交叉口摆摊", category: "小吃" },
          { id: "15-c-1-f-8", name: "湘江米线", description: "兴隆街总店", category: "米线" },
        ],
      },
      {
        id: "15-c-2",
        title: "商业聚集区（东营路/行春路周边）",
        description: "县城的主干道，餐饮最密集的区域",
        foods: [
          { id: "15-c-2-f-1", name: "小武面馆", description: "东营路", category: "大肉面" },
          { id: "15-c-2-f-2", name: "小燕子面馆", description: "行春路", category: "大肉面" },
          { id: "15-c-2-f-3", name: "够意思奶茶/乐乐旺", description: "东营路，本地人心头好", category: "奶茶/甜品" },
          { id: "15-c-2-f-4", name: "木木茶", description: "行春路", category: "奶茶/甜品" },
          { id: "15-c-2-f-5", name: "跳跳蛙", category: "特色正餐" },
          { id: "15-c-2-f-6", name: "啦啦美", description: "牛尾巴火锅/拌牛杂", category: "特色正餐" },
          { id: "15-c-2-f-7", name: "牛羊小馆", category: "特色正餐" },
          { id: "15-c-2-f-8", name: "王荣包子", description: "东营路", category: "包子" },
          { id: "15-c-2-f-9", name: "大卫面馆", description: "东营路炒面", category: "小吃" },
          { id: "15-c-2-f-10", name: "薛津佬麻辣烫", description: "南营口", category: "小吃" },
        ],
      },
      {
        id: "15-c-3",
        title: "稍远生活区（提署路/周边社区）",
        description: "",
        foods: [
          { id: "15-c-3-f-1", name: "邹氏面馆", description: "八六医院南门口", category: "大肉面" },
          { id: "15-c-3-f-2", name: "双品面馆", description: "天井街", category: "大肉面" },
          { id: "15-c-3-f-3", name: "芳芳麻辣烫", description: "竹山小区", category: "特色小吃" },
          { id: "15-c-3-f-4", name: "新桥炒粉丝", description: "五星佳苑", category: "特色小吃" },
        ],
      },
    ],
  },
  {
    id: "16",
    name: "太白站",
    isExpress: true,
    color: "yellow",
    attractions: [
      { id: "16-a-1", name: "李白文化园" },
      { id: "16-a-2", name: "大青山野生动物世界" },
    ],
    foods: [
      { id: "16-f-1", name: "大青山农家菜", category: "农家菜" },
      { id: "16-f-2", name: "特色李白宴", category: "特色宴席" },
    ],
    foodCategories: [
      {
        id: "16-c-1",
        title: "经济开发区 / 205国道方向",
        description: "处于县城往北，距离太白站相对较近",
        foods: [
          { id: "16-c-1-f-1", name: "国河面馆", description: "205国道焦家，老牌面馆", category: "大肉面" },
          { id: "16-c-1-f-2", name: "大胡子面馆", description: "洁缘家居广场下，经开区", category: "大肉面" },
          { id: "16-c-1-f-3", name: "城郊面馆", description: "城郊中学对面", category: "面馆" },
          { id: "16-c-1-f-4", name: "兰兰面馆", description: "华东驾校旁", category: "面馆" },
        ],
      },
      {
        id: "16-c-2",
        title: "太白站周边",
        description: "太白镇以大肉面闻名，口味与县城略有区别",
        foods: [
          { id: "16-c-2-f-1", name: "205国道沿线大肉面", description: "本地老字号", category: "大肉面" },
          { id: "16-c-2-f-2", name: "武家烤鸭", description: "通往太白镇路途中有多家分支", category: "烤鸭" },
        ],
      },
    ],
  },
]

export function getStationById(id: string): Station | undefined {
  return stations.find((s) => s.id === id)
}
