import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src="/clipboard.png" alt="ícone de prancheta | representando lista de tarefas vazia." />
            <p>
                <strong>VOCÊ AINDA NÃO TEM TAREFAS CADASTRADAS!</strong>
                👉🏻 Crie tarefas e organize seus itens a fazer!
            </p>
        </div>
    )
}