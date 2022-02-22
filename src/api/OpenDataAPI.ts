export const fetcher = async (year: string) => {
  const response = await fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`,
    {
      method: 'GET',
      headers: {
        Connection: 'keep-alive',
        Host: 'www.ris.gov.tw',
      },
    }
  )
  const res = await response.json()
  return res
}
