import { ProfileItem } from './profileItem'

export const ProfileList = (props) => {
    return <div>
        {
            props.profiles.map(profile => {
                return <div key={profile.id}>
                    {/* <h2>{profile.name} {profile.email}</h2> */}
                    <ProfileItem profile={profile} />
                </div>
            })
        }
    </div>
}