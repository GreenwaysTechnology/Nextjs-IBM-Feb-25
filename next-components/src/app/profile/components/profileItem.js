

export const ProfileItem = ({ profile: { name, email } }) => {
    return <>
        {/* <h2>{profile.name} {profile.email}</h2> */}
        <h2>{name} {email}</h2>
    </>
}