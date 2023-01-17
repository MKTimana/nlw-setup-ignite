import './Habit.css'
import '../index.css'
interface HabitsProps {
    completed: number
}

export function Habit(props : HabitsProps) {
    return (
        <div className='bg-zinc-900 w-fit h-10 text-white rounded m-2 flex items-center justify-center'>
            <p>Ola milton {props.completed}</p>
        </div>
    )
}