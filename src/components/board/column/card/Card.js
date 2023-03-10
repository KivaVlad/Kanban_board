import css from './card.module.scss'
import { useTasks } from '../../../../hooks/task/use-task'
import { useNavigate } from 'react-router-dom'
import {Button} from '../../../shared/button/button'
import {IconRemove} from '../../../shared/icons/icon-remove'

export const Card = (props) => {
    return (
        <div className={css.card}>
            <span>{props.name}</span>
            <Button className={css['button-remove']} onClick={
                (e) =>
                {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}>
                <IconRemove />
            </Button>
        </div>
    )
}