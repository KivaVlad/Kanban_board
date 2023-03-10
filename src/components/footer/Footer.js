import css from './footer.module.scss'
import { useTasks } from '../../hooks/task/use-task'

export const Footer = (props) => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <div>
                <span>Active task: {getActiveTaskCount()}</span>
                <span>Finished task: {getFinishedTaskCount()}</span>
            </div>
            <div>
                <span>Kanban board by :
                    <a href='https://github.com/KivaVlad'> KIVA VLAD</a>
                </span>
            </div>
        </footer>
    )
}