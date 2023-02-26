export interface IComment {
    username: string,
    content: string
}

const Comment: React.FC<IComment> = ({ username, content }) => {
    return (
        <>
            <div>Username: {username}</div>
            <div>Content: {content}</div>
        </>
    );
}

export default Comment;