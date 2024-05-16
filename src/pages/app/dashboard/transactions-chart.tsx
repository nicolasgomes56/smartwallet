import { LineChart as LineChartIcon, Loader2 } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { violet } from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const chartData = [
  {
    date: '2021-01-01',
    receipt: 400,
  },
  {
    date: '2021-02-01',
    receipt: 300,
  },
  {
    date: '2021-03-01',
    receipt: 300,
  },
  {
    date: '2021-04-01',
    receipt: 200,
  },
  {
    date: '2021-05-01',
    receipt: 100,
  },
]

export function TransactionsChart() {
  return (
    <>
      <Card className="col-span-6">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium ">Transações</CardTitle>
            <LineChartIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          {chartData ? (
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={chartData} style={{ fontsize: 12 }}>
                <XAxis
                  dataKey={'date'}
                  tickLine={false}
                  axisLine={false}
                  dy={16}
                />
                <YAxis
                  stroke="#888"
                  axisLine={false}
                  tickLine={false}
                  width={100}
                  tickFormatter={(value: number) =>
                    value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                  }
                />

                <CartesianGrid vertical={false} className="stroke-muted" />

                <Line
                  type="linear"
                  strokeWidth={2}
                  dataKey={'receipt'}
                  stroke={violet['500']}
                />
                <Line
                  type="linear"
                  strokeWidth={2}
                  dataKey={'receipt'}
                  stroke={violet['500']}
                />

                <Tooltip wrapperClassName="!bg-accent border-0" />
              </LineChart>
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
