import { useState } from "react";

type User = {
    id: number;
    name: string;
};

export const Users = () => {
    // najede mysi na "users" - User | undefined
    const [user, setUser] = useState<User>();

    // if (!users) return null;

    return (
        <div>
            <div>{user.name}</div>
        </div>
    );
};