import './Badge.css'

interface BadgeProps {
    children?: string
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink"
    type?: "rounded" | ""
}

const Badge = ({children = 'Badge', color = 'gray', type = ""}: BadgeProps) => {
    return (
            <button className={`badge ${color} ${type}`}>{children}</button>
    )
}


export default Badge;