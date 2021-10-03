import style from './Loader.module.scss'

const Loader= ({content=''})=>{
    return (
        <div className={style.root}>
            <div className={style.loader}></div>
            <span className={style.content}>{content}</span>
        </div>
    )
}

export default Loader