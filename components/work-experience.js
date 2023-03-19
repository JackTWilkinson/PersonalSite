function WorkExperience({ workExperience }) {
    return (
        <>
            <p>{workExperience.name}</p>
            <p>{workExperience.description}</p>
            <p>{workExperience.dateStarted}</p>
            <p>{workExperience.dateEnded}</p>
        </>
    )
}

export default WorkExperience