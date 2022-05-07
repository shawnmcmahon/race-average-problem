import React, { FunctionComponent } from 'react'

const TimeSubmit:FunctionComponent = () => {
  return (
    <section className="bg-[#F6F7F7] h-96 w-100">
      <div className="border-b-2 border-[#E5E7E8] h-full w-100 ml-8 mr-8">
        <p className="pt-8 font-proximaNovaRegular text-xl text-[#888A8C]">Race Time</p>
        <form className="">
          <input 
            className="h-14 w-2/6 mt-2 border-[#E5E7E8] border-2 rounded-sm font-proximaNovaRegular focus:outline-none"
            placeholder="ex: 12:01 PM, DAY 3">
          </input>
          <button className="h-14 w-36 sm-12 ml-6 bg-[#2A5BD7] rounded-md font-proximaNovaRegular text-[#FFFFFF] text-xl">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default TimeSubmit
