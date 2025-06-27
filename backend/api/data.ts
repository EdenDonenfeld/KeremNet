export type Post = {
    id: string;
    username: string;
    userId: string;
    text: string;
    date: string;
    likes: number;
    comments: {
        username: string;
        text: string;
    }[];
};

export type User = {
    id: string;
    username: string;
    password: string;
    createdAt: string;
};
