import { useState , useCallback, useEffect , useRef} from 'react'
import './App.css'




function App() {
  const [lenght , setLenght]=useState(8)
  const [password ,  setPassword]=useState("")
  const [numnerallowed , setNumberallowed]=useState(false)
  const [charac, setCharac ]=useState(false)

  const Password = useRef(null)

  const copyPassToclipboard = useCallback(() =>{
    Password.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordgen = useCallback(()=>{

    let Pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNM"

    if(numnerallowed) str += "0123456789"
    if(charac) str += "!@#$%^&*()<>?/:"

    for (let index = 1; index <= lenght; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

       Pass += str.charAt(char)

      setPassword(Pass)
      
    }  [numnerallowed , charac , lenght]


  }) 

  useEffect(() =>{
    passwordgen()

  }, [numnerallowed , charac , lenght])


  return (
    <>
    <div className='text-5xl text-white flex justify-center mt-40 font-extrabold '>
      Password Genrator
    </div>
    <div className='w-full flex justify-between max-w-md mx-auto shadow-md rounded-lg  my-8 text-white bg-gray-700'>
      <div className='flex flex-row rounded-lg overflow-hidden text-xl  justify-center items-center mb-4'>

        <input 
        ref={Password}
        type="text"
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder="password"
        readOnly
        />
        
        </div>
    
 <div>
      <button
      onClick={copyPassToclipboard}
        type="button"
        className='min-h-[47px] px-3  items-center active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-lg bg-gray-100 text-gray-800 '
        >
        Copy
      </button>
</div>
          </div>
 
 <div>

  <div class="w-full max-w-md mx-auto flex justify-center rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-xl  backdrop-blur-md">
    <input className='cursor-pointer flex m-2 absolute left-0 top-3' type="range"

    min="6"
    max="100"
    value={lenght}
  onChange={(e) => setLenght(e.target.value)}
    
    
  />
 <p className="absolute left-36 top-2 m-2">length: {lenght}</p>
  </div>

    <div className='flex items-center gap-x-1 right-[44%] top-[46.5%] absolute m-auto max-w-md'>
      <input type="checkbox"
      defaultChecked={numnerallowed}
      onChange={()=>{
        setNumberallowed((prev => !prev))
      }} />

      <label className="text-white">Numbers</label>
    </div>


          <div className='flex items-center gap-x-1 right-[37%] top-[46.5%] absolute m-auto max-w-md'>
      <input type="checkbox"
      defaultChecked={charac}
      onChange={()=>{
        setCharac((prev => !prev))
      }} />

      <label className="text-white">characters</label>
    </div>


 </div>

        

    </>
  )
  
}

export default App
