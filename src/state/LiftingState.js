import './LiftingState.css'
import UsePreferencedHook from "../user/Userpropriete"
export default  function SearchWithProps({onChange,value}){
    
        return(
            
            <div>
                <label htmlFor='search'> Search input with lifted state</label>
                <hr />
                <UsePreferencedHook
                type="text"
                placeholder='Search a Title'
                 value={value}
                  onChange={onChange}
                  />
            </div>

        )
    

}