import { useParams } from "react-router-dom"
import { industryData } from "./industryData" // The big array we made earlier
import IndustryTemplate from "./IndustriesTemplate"
import NotFound from "../../Error/NotFound"
import { useEffect } from "react"
const IndustryPage = () => {
  // 1. Grab the :id from the URL (e.g., 'marine-subsea')
  const { id } = useParams()

  // 2. Find the matching data object
  const data = industryData.find(item => item.id === id)

  // 3. Handle cases where the ID doesn't exist+


  if (!data) {
    return <NotFound />
  }

  // 4. Prop drill the data into your template
  return (
    <>
      {/* React 19 SEO Hoisting */}
      <meta name="description" content={data.hero.description} />

      {/* Dynamic Open Graph Tags */}
      <meta property="og:title" content={`${data.title} | Engineering for ${data.id.replace("-", " ")}`} />
      <meta property="og:image" content={data.hero.backgroundImage} />
      <meta property="og:description" content={data.content.heading} />

      <IndustryTemplate hero={data.hero} content={data.content} />
    </>
  )
}

export default IndustryPage
