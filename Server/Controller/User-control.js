import UserModel from '../Schema/schema.js'; // Replace 'path-to-user-model' with the actual path to your User model

export const adduser = async (req, res) => {
  const user = req.body;
  const newuser = new UserModel(user);
  try {
    await newuser.save();
    res.status(201).json(newuser); // Use status 201 for successful resource creation
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAlluser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getusers = async (req, res) => {
  const userId = req.params.id; // Access the user ID from URL parameters
  try {
    const user = await UserModel.findById(userId); // Use findById to find a user by their ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const  editAllUser = async (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameters
  const user = req.body; // Get the updated user data from the request body

  try {
    // Find the user by ID and update their information
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
   
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the updated user data as a JSON response
res.status(200).json({updatedUser});
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error while updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const deleteUser= async (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameters
  try {


    const result = await UserModel.deleteOne({ _id: id });
     
  if (result.deletedCount === 1) {
    // User was deleted successfully
    res.status(200).json({ message: 'User deleted successfully' });
  } 
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
