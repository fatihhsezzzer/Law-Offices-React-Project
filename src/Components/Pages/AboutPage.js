import React from 'react'

import PageTitle from '../SingleComponents/PageTitle'
import AboutPageHelpArea from '../SingleComponents/AboutPageHelpArea'
import ExpertiseArea from '../SingleComponents/AboutPageExpertiseArea'



export default function AboutPage() {
    return (
        <div>
            <PageTitle title="About Us"></PageTitle>
            <AboutPageHelpArea></AboutPageHelpArea>
            <ExpertiseArea></ExpertiseArea>
        </div>
    )
}
