import css from "./Button.module.css"

export const Button = ({onClick})=>{
    return(
        <div  className={css.container_button}>
            <button onClick={onClick} type="button" className={css.Button}>Load more</button>

        </div>
    )
}