import Cardapio from "./intens.json"
import Item from "./item"
import styles from './Itens.module.scss'

export default function Itens() {
    return (
        <div className={styles.itens}>
            {Cardapio.map((item) =>(
               <Item key={item.id}/>
            ))}
        </div>
    )
}