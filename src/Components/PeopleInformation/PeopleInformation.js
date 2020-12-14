import React from 'react'
import './PeopleInformation.css'

import TableSectionHeader from './TableSectionHeader'
import InfoCell from './InfoCell'
import InfoCellVehicles from './InfoCellVehicules'

const PeopleInformation = (props) => {
    const vehicles =  props.data.vehicleConnection['edges'].map(vehicle => (
        <div key={vehicle.node.id}>
            <InfoCellVehicles data={vehicle.node.name}/>   
        </div>
    ))
    
    return(
        <div>
            <section>
                <TableSectionHeader title={'General Information'}/>
                <InfoCell feature={'Eye Color'} data={props.data.eyeColor}/>
                <InfoCell feature={'Hair Color'} data={props.data.hairColor}/>
                <InfoCell feature={'Skin Color'} data={props.data.skinColor}/>
                <InfoCell feature={'Birth day'} data={props.data.birthYear}/>
            </section>
            <section>
                <TableSectionHeader title={'Vehicles'}/>
                {vehicles}
            </section>
        </div> 
    );
}

export default PeopleInformation
