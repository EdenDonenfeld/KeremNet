export type Post = {
    id: string;
    username: string;
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
    postsIds: string[];
};

export const posts: Post[] = 
[
    {
        "id": "1",
        "username": "eden",
        "text": "This is a post by Eden",
        "date": "2025-06-01T12:00:00Z",
        "likes": 10,
        "comments": [
            {
                "username": "john",
                "text": "This is a comment by John"
            },
            {
                "username": "jane",
                "text": "This is a comment by Jane"
            }
        ]
    },
    {
        "id": "2",
        "username": "john",
        "text": "This is a post by John",
        "date": "2025-06-01T12:00:00Z",
        "likes": 10,
        "comments": [
            {
                "username": "eden",
                "text": "This is a comment by eden"
            },
            {
                "username": "jane",
                "text": "This is a comment by Jane"
            }
        ]
    },
    {
        "id": "3",
        "username": "jane",
        "text": "This is a post by Jane",
        "date": "2026-06-01T12:00:00Z",
        "likes": 10,
        "comments": [
            {
                "username": "john",
                "text": "This is a comment by John"
            },
            {
                "username": "eden",
                "text": "This is a comment by Eden"
            },
            {
                "username": "jane's mom",
                "text": "This is a comment by Jane's mom"
            }
        ]
    }
];

export const users: User[] =
[
    {
        "id": "1",
        "username": "eden",
        "password": "3ec3f61825d3de4fd3300c0d6d1ba062c7d0918bc9f9fd5d82118e86818ac537",
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["1", "3"]
    },
    {
        "id": "2",
        "username": "john",
        "password": "7f0ae286591cd94a36cdf25f7f1462da2358db633775b3466f9a06e06db75fbc",
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["2"]
    },
    {
        "id": "3",
        "username": "jane",
        "password": "d6fc0d94c653987aa4ce956e084582d9e8edaf2b1b32f715df0d2226668f55e0",
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["3"]
    }
]