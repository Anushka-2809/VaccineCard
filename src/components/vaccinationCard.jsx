import React from 'react'

const VaccinationCard = ({ name = 'Patient Name', vaccine = 'Vaccine', date = 'Date' }) => {
	return (
		<div className='border rounded-md p-4'>
			<h3 className='font-bold'>{name}</h3>
			<p>{vaccine}</p>
			<p className='text-sm text-gray-600'>{date}</p>
		</div>
	)
}

export default VaccinationCard

