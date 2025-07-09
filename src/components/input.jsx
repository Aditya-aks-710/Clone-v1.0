

export function InputBox({
    type, 
    placeholder, 
    parameter, 
    setParameter, 
}) {

    return (
        <div>
            <input 
                value={parameter}
                onChange={(e) => {setParameter(e.target.value)}}
                type={type}
                placeholder={placeholder}
                className="placeholder-[#36577b] bg-[#18395f] w-xs text-md text-white py-2 px-4 rounded-lg outline-none"
            />
        </div>
    )
}