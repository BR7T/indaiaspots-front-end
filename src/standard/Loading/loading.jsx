import './loading.sass'

export default function Loading(){
    return(
        <div className='flex gap-2 h-full w-full justify-center items-center'>
        <div className=" border-8 border-black rounded-full  dotLoading dot1">
        </div>
        <div className=" border-8 border-black rounded-full dotLoading dot2">
        </div>
        <div className="h-6 w-6 border-8 border-black rounded-full dotLoading dot3">
        </div>
        </div>
    )
}