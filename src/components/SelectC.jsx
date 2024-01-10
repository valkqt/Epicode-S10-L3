import css from "./css/select.module.css"

function SelectC() {
    return (
        <select className={css.selectElem}>
            <option>Pepe</option>
            <option>Wojak</option>
            <option>Plofi</option>
        </select>
    )
}

export default SelectC