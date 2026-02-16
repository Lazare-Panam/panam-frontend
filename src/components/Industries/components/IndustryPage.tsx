import { useParams } from "react-router-dom"
import { industryData } from "./industryData" // The big array we made earlier
import IndustryTemplate from "./IndustriesTemplate"
import NotFound from "../../Error/NotFound"
const IndustryPage = () => {
  // 1. Grab the :id from the URL (e.g., 'marine-subsea')
  const { id } = useParams()

  // 2. Find the matching data object
  const data = industryData.find(item => item.id === id)

  // 3. Handle cases where the ID doesn't exist
  if (!data) {
    return <NotFound />
  }

  // 4. Prop drill the data into your template
  return <IndustryTemplate hero={data.hero} content={data.content} />
}

export default IndustryPage
