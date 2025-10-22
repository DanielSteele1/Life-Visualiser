
import { Input } from "@chakra-ui/react"

function Search() {

  return (
    <section className="search">

        <div className="search-title">
           How old are you?
        </div>

      <div className="search-bar">
        <Input 
        placeholder=""
        type="number"
        />
      </div>

    </section>
  )
}

export default Search;
