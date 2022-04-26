import './LiftingState.css'
import UsePreferencedHook from "../user/Userpropriete"
export default  function SearchWithProps({onChange,value}){
    
        return(
            <div>
        
                <label htmlFor='search'> Search input with lifted state</label>
                <hr />
                
                <input
                type='text'
                placeholder='Enter Your Number'
                value={value}
                
                onChange={onChange}>
                
                </input>
            </div>

        )
    

}