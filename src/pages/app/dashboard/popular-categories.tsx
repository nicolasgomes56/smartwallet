import { ApexOptions } from 'apexcharts'
import { PieChart } from 'lucide-react'
import Chart from 'react-apexcharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PopularCategories() {
  return (
    <>
      <Card className="col-span-5 lg:col-span-5">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Categoria de gastos
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>

        <CardContent>
          <Chart
            options={options}
            series={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
            type="donut"
            width={500}
            height={320}
          />

          {/* <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div> */}
        </CardContent>
      </Card>
    </>
  )
}

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

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: [
    'Alimentação',
    'Compras',
    'Estudos',
    'Lazer',
    'Mercado',
    'Moradia',
    'Outros',
    'Saúde',
    'Transporte',
    'Viagens',
  ],
  colors: COLORS,
  legend: {
    position: 'right',
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    colors: [colors.black],
    width: 4,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
        },
      },
    },
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
