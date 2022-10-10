import { gql } from "@apollo/client/core"
import { useQuery } from "@apollo/client/react"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { loading, error, data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <div className="text-2xl font-bold">
      <ul>
        {data?.lessons.map(lesson => {return <li key={lesson.id}>{lesson.title}</li>})}
      </ul>
    </div>
  )
}

export default App
