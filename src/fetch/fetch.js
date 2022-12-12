import axios from "axios";

const getData = async (URL) => {
    const response = await axios.get(URL)
    const rest = await response.data
return rest
  }

  export {getData}