import bg1 from '../../assets/Logo/bg1.png'


export default function Banner() {
  return (
<div className="py-5">
        <img className=" h-[400px] mx-auto" src={bg1} alt="OC Hub Logo"/>
        <h1 className="py-2 text-center text-2xl font-bold text-slate-100">
            A Place Where Ideas Meet Collaboration
        </h1>
      </div>
  )
}
