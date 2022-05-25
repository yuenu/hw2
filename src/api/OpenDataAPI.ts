export const fetcher = async (year: string) => {
  const response = await fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`
  )
  const res = await response.json()
  return res
}
