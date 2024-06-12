import { MagnifyingGlass } from 'react-loader-spinner';
import css from "./loader.module.css"


export const CustomLoader = () => {
    return (
        <div className={css.loader}>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
                
            />
        </div>
        
    )
}