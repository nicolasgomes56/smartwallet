import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
  colors.cyan[500],
  colors.fuchsia[500],
  colors.lime[500],
  colors.orange[500],
  colors.teal[500],
]

const data = [
  { product: 'Alimentação', amount: 100 },
  { product: 'Compras', amount: 200 },
  { product: 'Estudos', amount: 300 },
  { product: 'Lazer', amount: 400 },
  { product: 'Mercado', amount: 500 },
  { product: 'Moradia', amount: 600 },
  { product: 'Outros', amount: 700 },
  { product: 'Saúde', amount: 800 },
  { product: 'Transporte', amount: 900 },
  { product: 'Viagens', amount: 1000 },
]

export function SpendingCategory() {
  return (
    <>
      <Card className="col-span-3">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Categoria de gastos
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>

        <CardContent>
          {data ? (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart data={data} style={{ fontsize: 12 }}>
                <Pie
                  data={data}
                  dataKey={'amount'}
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180
                    const radius =
                      12 + innerRadius + (outerRadius - innerRadius)
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)

                    return (
                      <text
                        x={x}
                        y={y}
                        className="fill-muted-foreground text-xs"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        {data[index].product.length > 12
                          ? data[index].product.substring(0, 12).concat('...')
                          : data[index].product}{' '}
                        ({value})
                      </text>
                    )
                  }}
                >
                  {data.map((_, index) => {
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                        className="stroke-background hover:opacity-80"
                      />
                    )
                  })}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
