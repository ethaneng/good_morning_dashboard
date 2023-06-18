"use client"

interface Props {
  color: string,
  setColor: Function,
  label: string
}

export default function ColorPicker({color, setColor, label}: Props) {
  
  function handleSelect(newColor: string) {
    setColor(newColor)
  }

  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-2 ">
        <label className="w-fit whitespace-nowrap">{label}</label>
        <div className="flex flex-wrap gap-2">
          <button onClick={(e) => handleSelect('bg-white')} className={`w-[20px] h-[20px] outline rounded bg-white ${color === 'bg-white' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-purple-400')} className={`w-[20px] h-[20px] outline rounded bg-purple-400 ${color === 'bg-purple-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-pink-400')} className={`w-[20px] h-[20px] outline rounded bg-pink-400 ${color === 'bg-pink-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-red-400')} className={`w-[20px] h-[20px] outline rounded bg-red-400 ${color === 'bg-red-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-orange-400')} className={`w-[20px] h-[20px] outline rounded bg-orange-400 ${color === 'bg-orange-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-yellow-400')} className={`w-[20px] h-[20px] outline rounded bg-yellow-400 ${color === 'bg-yellow-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-green-400')} className={`w-[20px] h-[20px] outline rounded bg-green-400 ${color === 'bg-green-400' ? 'outline-2' : 'outline-1'}`}/>
          <button onClick={(e) => handleSelect('bg-blue-400')} className={`w-[20px] h-[20px] outline rounded bg-blue-400 ${color === 'bg-blue-400' ? 'outline-2' : 'outline-1'}`}/>
        </div>

      </div>
    </div>
  )
}
