
class state {

  //* Get all states *//
 async getStates() {
  const data = await fetch(`http://pos.idtretailsolutions.com/countytest/states`)

    const json = await data.json()
    return json
  }
 async getDetail(url) {
   console.log(url)
  const data = await fetch(url)

    const json = await data.json()
    return json
  }

 
}

export default new state();