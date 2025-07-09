import '../App.css'

export function Button({onClick, disabled}){
    return (
        <button onClick={onClick} className={`${disabled ? "bg-[#738aa0] cursor-not-allowed" : "bg-[#3cdbc9] cursor-pointer"} px-25 py-2 w-xs rounded-md text-white text-sm`}>
            Continue
        </button>
    )
}