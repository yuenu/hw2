import { useEffect, useState, useCallback } from 'react'
import { Record } from '@/types'
import Logo from '@/assets/images/taipeilogo.png'
import MockData from './mock/data'

const taipeiDistricts = [
  { id: 1, name: '中正區' },
  { id: 2, name: '大同區' },
  { id: 3, name: '中山區' },
  { id: 4, name: '松山區' },
  { id: 5, name: '大安區' },
  { id: 6, name: '萬華區' },
  { id: 7, name: '信義區' },
  { id: 8, name: '士林區' },
  { id: 9, name: '北投區' },
  { id: 10, name: '內湖區' },
  { id: 11, name: '南港區' },
  { id: 12, name: '文山區' },
]

type ChartProps = {
  display: Record
}

const Chart = ({ display }: ChartProps) => {
  const rateHouseholdOrdinaryMale =
    (parseInt(display.household_ordinary_f) /
      (parseInt(display.household_ordinary_m) +
        parseInt(display.household_ordinary_f))) *
    100

  const rateHouseholdOrdinaryFemale =
    (parseInt(display.household_ordinary_m) /
      (parseInt(display.household_ordinary_m) +
        parseInt(display.household_ordinary_f))) *
    100

  const rateHouseholdSingleMale =
    (parseInt(display.household_single_m) /
      (parseInt(display.household_single_m) +
        parseInt(display.household_single_f))) *
    100

  const rateHouseholdSingleFemale =
    (parseInt(display.household_single_f) /
      (parseInt(display.household_single_m) +
        parseInt(display.household_single_f))) *
    100

  return (
    <div className="chart">
      <ul className="chart-number">
        <li>
          <span>90%</span>
        </li>
        <li>
          <span>80%</span>
        </li>
        <li>
          <span>70%</span>
        </li>
        <li>
          <span>60%</span>
        </li>
        <li>
          <span>50%</span>
        </li>
        <li>
          <span>40%</span>
        </li>
        <li>
          <span>30%</span>
        </li>
        <li>
          <span>20%</span>
        </li>
        <li>
          <span>10%</span>
        </li>
        <li>
          <span>0%</span>
        </li>
      </ul>
      <table>
        <tbody>
          <tr>
            <th>共同生活戶</th>
            <td style={{ height: `${rateHouseholdOrdinaryMale}%` }}>
              <span>{display.household_ordinary_m}</span>
              <div>{rateHouseholdOrdinaryMale.toFixed(2)}%</div>
            </td>
            <td style={{ height: `${rateHouseholdOrdinaryFemale}%` }}>
              <span>{display.household_ordinary_f}</span>
              <div>{rateHouseholdOrdinaryFemale.toFixed(2)}%</div>
            </td>
          </tr>
          <tr>
            <th>獨立生活戶</th>
            <td style={{ height: `${rateHouseholdSingleMale}%` }}>
              <span>{display.household_single_m}</span>
              <div>{rateHouseholdSingleMale.toFixed(2)}%</div>
            </td>
            <td style={{ height: `${rateHouseholdSingleFemale}%` }}>
              <span>{display.household_single_f}</span>
              <div>{rateHouseholdSingleFemale.toFixed(2)}%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [data, setData] = useState<Record[]>([])
  const [display, setDisplay] = useState<Record>({
    statistic_yyy: '110',
    district_code: '65000010002',
    site_id: '臺北市松山區',
    village: '莊敬里',
    household_ordinary_total: '386',
    household_business_total: '0',
    household_single_total: '246',
    household_ordinary_m: '570',
    household_business_m: '0',
    household_single_m: '111',
    household_ordinary_f: '662',
    household_business_f: '0',
    household_single_f: '135',
  })
  const [currentDist, setCuttentDist] = useState('臺北市松山區')
  const [villages, setVillages] = useState<string[]>([])

  const setCurrentDisplay = useCallback(
    (village: string) => {
      const filterDisplay = data.filter((item) => item.village === village)
      setDisplay(filterDisplay[0])
    },
    [data]
  )

  useEffect(() => {
    setData(MockData.result.records)
  }, [])

  useEffect(() => {
    const villages: string[] = []
    data.forEach((item) => {
      if (item.site_id === currentDist) villages.push(item.village)
    })
    setVillages(villages)
    if (villages && villages.length > 0) {
      setCurrentDisplay(villages[0])
    }
  }, [currentDist, data, setCurrentDisplay])

  return (
    <>
      <div className="tab">
        <div className="tab-logo">
          <img src={Logo} alt="" />
        </div>
        <span>110年人口戶數及性別</span>
      </div>
      <div className="container">
        <header className="container-header">
          <h2 className="container-heading">地區</h2>
          <select
            name="site"
            className="container-select"
            onChange={(e) => setCuttentDist(e.target.value)}
          >
            {taipeiDistricts.map((city) => {
              return (
                <option key={city.id} value={'臺北市' + city.name}>
                  {city.name}
                </option>
              )
            })}
          </select>
          <span>{display.village}</span>
        </header>
        <div className="villages">
          {villages.map((village) => (
            <span key={village} onClick={() => setCurrentDisplay(village)}>
              {village}
            </span>
          ))}
        </div>
        <Chart display={display} />
      </div>
    </>
  )
}

export default App
