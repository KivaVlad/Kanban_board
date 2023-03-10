import { TaskProvider } from '../../hooks/task/task-provider'
import css from './layout.module.scss'
import { LayoutProvider } from '../../hooks/layout/layout-provider'

export const Layout = (props) => {

    return (
        <TaskProvider>
            <LayoutProvider>
                <div className={css.layout}>
                    {props.children}
                </div>
            </LayoutProvider>
        </TaskProvider>
    )
}
export default Layout