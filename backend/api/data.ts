type Post = {
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

type User = {
    id: string;
    username: string;
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
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["1", "3"]
    },
    {
        "id": "2",
        "username": "john",
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["2"]
    },
    {
        "id": "3",
        "username": "jane",
        "createdAt": "2025-01-25T12:00:00Z",
        "postsIds": ["3"]
    }
]