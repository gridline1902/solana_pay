import { truncate } from "../../utils/string"
const Profile = ({ avatar, userAddress, connected }) => {
    return (
        <div className="flex flex-col select-none items-center space-y-3">
            {connected ? (
                <>
                
            <div className="h-16 w-16 rounded-full border-2 border-white">
                <img className="h-full w-full rounded-full object-cover" src={avatar} />
            </div>

            <div className="flex flex-col items-center space-y-1">
                <p className="font-semibold text-white">{truncate(userAddress)}</p>

                <p className="pb-12 text-sm font-light italic text-gray-100">${truncate(userAddress)}</p>
            </div>

                </>
            ): (
                <></>
            )}
        </div>
    )
}

export default Profile
