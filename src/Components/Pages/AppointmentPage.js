import React from 'react'

import PageTitle from '../SingleComponents/PageTitle'
import TeamArea from '../SingleComponents/TeamArea'
import GetAppointment from '../SingleComponents/GetAppointment'

export default function AppointmentPage() {
    return (
        <div>
            <PageTitle title="Appointment"></PageTitle>
            <GetAppointment></GetAppointment>
        </div>
    )
}
