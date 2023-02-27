export interface IComment {
    username: string,
    content: string
}

const Comment: React.FC<IComment> = ({ username, content }) => {
    return (
        <div className=" flex flex-col py-4 px-2 mb-3 gap-2 rounded-md bg-slate-700/50">
            <h3>{username}</h3>
            <div>{content}</div>
        </div>
    );
}

export default Comment;