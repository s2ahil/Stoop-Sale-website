import React from 'react'

const InfoCard = ({ icon, value }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm" id= "GoToButton">
         
            <div className="flex items-center gap-2">
                <span className="mr-2">{icon}</span>
                <span className="text-2xl font-bold text-gray-800"> {value}</span>
            </div>
        </div>
    )
}

export default InfoCard