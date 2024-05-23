import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.containerHeadToDo}>
            <img src="/Logo.svg" alt="logo da aplicação ToDo" />
        </header>
    )
}