import aboutImg from '../../assets/Logo/whitebgBanner.png'

export default function About() {
  return (
    <div className="text-slate-100">

        <div className='flex justify-center mx-5'>
        <div className='w-1/2'>
        <img src={aboutImg} alt='aboutImg' className='w-full'/>
        </div>
        <div className='w-1/2 px-4 my-auto'>
        <div className='text-center text-lg'>
        <p className="text-center text-2xl font-bold">{"<About us />"}</p><br></br>
        <span>
        At Collab Connect, we are committed to breaking down barriers and facilitating collaboration on a global scale. Our platform is built on the principles of openness, inclusivity, and creativity, providing a virtual space where individuals from diverse backgrounds can come together to work on projects that inspire them.

        </span>
            </div>

        </div>  
        </div>    
    </div>
  )
}
