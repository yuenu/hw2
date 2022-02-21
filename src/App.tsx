import { useEffect, useState, useCallback } from 'react'
import { Record } from '@/types'
import { MockData, taipeiDistricts } from '@/mock'
import { Chart, Tab } from '@/components'

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
      <Tab />
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
            <span
              className={display.village === village ? 'active' : ''}
              key={village}
              onClick={() => setCurrentDisplay(village)}
            >
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
