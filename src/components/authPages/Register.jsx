

export default function RegisterPage() {
  return (
    <div className="bg-red-600 h-screen text-slate-100 ">
    <p className="text-center">
    Register Page
    </p>
      <div className="flex justify-center">
        <form className=" flex flex-col">
          <label>Email:</label>
          <input type="email" className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
          <label>Password:</label>
          <input type="password" className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
          <label>Confirm Password:</label>
          <input type="password" className=" text-slate-800 w-[300px] my-2 p-1 rounded-lg"/>
        </form>
      </div>
    </div>
  )
}
