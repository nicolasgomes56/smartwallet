import { ApexOptions } from 'apexcharts'
import { LineChart } from 'lucide-react'
import Chart from 'react-apexcharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TransactionsChart() {
  return (
    <>
      <Card className="col-span-5 lg:col-span-7">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium ">Transações</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <Chart
            options={options}
            series={monthlyData.series}
            type="line"
            height={300}
          />
        </CardContent>
      </Card>
    </>
  )
}

const monthlyData = {
  labels: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  series: [
    {
      name: 'Entrada',
      data: [500, 700, 600, 800, 1000, 1200, 900, 1100, 1300, 1500, 1400, 1600],
    },
    {
      name: 'Saída',
      data: [
        -300, -500, -400, -600, -800, -1000, -700, -900, -1100, -1300, -1200,
        -1400,
      ],
    },
  ],
}

const options: ApexOptions = {
  chart: {
    type: 'line',
    toolbar: {
      show: false,
    },
    background: 'transparent',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    categories: monthlyData.labels,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#34D399', '#EF4444'],
  theme: {
    mode: 'dark',
  },
}
