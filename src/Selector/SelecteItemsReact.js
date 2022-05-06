export default function ReactSelectInput() {
    const countries =[ "Kenya", "Uganda", "Tanzania", "Drc Congo", "Somali", "Sudan", "South Sudan"  ] 
   const handleSelect=()=>{


    }
    
    
    
    return (
      <>
        <form >
          <label htmlFor="name">Electronics</label>
          <input 
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            //onChange={handleSelect}
          />
          <label htmlFor="email">Electronics</label>
          <select
          type='text'
          id="country"
          
          
          >
          <option />
              {countries.map((country) => (
                <option
                onChange={handleSelect}
                 value={country}>
                  {country}
                </option>
              ))}
          </select>
        </form>
      </>
    )
  }
  
  
  
  
  
  
  
  
  