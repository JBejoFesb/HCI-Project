export interface IComment {
    username: string,
    content: string
}

const Comment: React.FC<IComment> = ({ username, content }) => {
    return (
        <div className=" flex flex-col py-4 px-2 mb-3 bg-black">
            <h3>{username}</h3>
            <div>Content: {content}</div>
        </div>
    );
}

export default Comment;