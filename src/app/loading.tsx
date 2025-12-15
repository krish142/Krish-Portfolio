"use client";

const page:React.FC = () => {
    return(
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-green-700 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-700 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 bg-green-700 rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
    )
}

export default page;