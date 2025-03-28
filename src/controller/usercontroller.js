
export  const getUsers = (req, res) => {
    res.json({ message: "List of users", users: [] });
};

export const getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with ID: ${userId}` });
};

