import { useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            {users.map((user) => <div>{user.name}</div>)}

            <button
                onClick={() => {
                    setUsers([
                        ...users,
                        {
                            id: Math.random(),
                            name: "New user"
                        }
                    ])
                }}
            >
                Add user
            </button>
        </div>
    );
};

// ŘEŠENÍ
type User = {
    id: number;
    name: string;
};

export const UsersReseni = () => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <div>
            {users.map((user) => <div>{user.name}</div>)}

            <button
                onClick={() => {
                    setUsers([
                        ...users,
                        {
                            id: Math.random(),
                            name: "New user",
                        }
                    ])
                }}
            >
                Add user
            </button>
        </div>
    );
};