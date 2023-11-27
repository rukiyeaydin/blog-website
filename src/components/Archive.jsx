import React from 'react'

const Archive = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-2xl font-semibol'>Arşiv</p>
        <div className="blogs flex flex-col w-screen px-20">
            <a className='my-5 border border-b-slate-300 border-x-0 border-t-0 pb-8' href="/gecmisten-bugune-bilgisayar-tarihi-ve-gelisimi">Bilgisayar Tarihi</a>
            <a className='my-5 border border-b-slate-300 border-x-0 border-t-0 pb-8' href="/internet-nedir-ve-nasil-calisir">İnternet nedir? Nasıl çalışır?</a>
        </div>
    </div>
  )
}

export default Archive
