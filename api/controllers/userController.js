import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUSerId = req.user._id;
        
        const filteredUsers = await User.find({_id: {$ne: loggedInUSerId}}).select("-password");
        // console.log("Filtered users: ", filteredUsers)
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}