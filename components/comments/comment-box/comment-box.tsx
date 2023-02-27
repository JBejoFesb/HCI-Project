import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IComment } from "../comment/comment";
import Comment from "../comment/comment";

export interface ICommentBox {
    slug: string
}

export interface ICommentResponse {
    data: ICommentResponseArray
}

export interface ICommentResponseArray {
    array: IComment[]
}

const CommentBox: React.FC<ICommentBox> = ({ slug }) => {
    const [commentArray, setCommentArray] = useState<ICommentResponseArray>({array: []});
    const [newComment, setNewComment] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const commentLoader = (slug: string) => {
        axios.get(
            `https://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com/comments/load/?slug=${slug}`
        ).then(response => {
            setCommentArray({array: response.data.data});
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        const handleStorage = () => {
            const value:any = localStorage.getItem("isLoggedIn");
            const username:any = localStorage.getItem("username");
            if (value=="true") {
                setUsername(username);
                setIsLoggedIn(true);
            }
            else
                setIsLoggedIn(false);
        }

        handleStorage();

        window.addEventListener('storage', handleStorage)

        return () => window.removeEventListener('storage', handleStorage)
    }, []);

    useEffect(() => {
        commentLoader(slug);
    }, [slug]);

    const handleSubmit = () => {
        event?.preventDefault();
        console.log(newComment);

        axios.post(
            `https://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com/comments/create`,
            {
                slug: slug,
                content: newComment,
                username: username
            }
        ).then(response => {
            if (response.data.success)
                commentLoader(slug);
        })
    }

    return (
        <div className="bg-slate-800/75 h-fit rounded-[32px] flex flex-col p-5 gap-4">
            <h2>KOMENTARI</h2>
            <div>
                {
                    !commentArray.array.length && 
                    <div>
                        Budite prvi koji će ostaviti komentar!
                    </div>
                }
                {
                    commentArray.array.map((comment, i) => { 
                        return (
                        <Comment username={comment.username} content={comment.content} key={`${comment.username}-comment-${slug}-${i}`} />
                        )}
                    )
                }
            </div>
            <div>
                {
                    isLoggedIn ?
                    <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block m-2 text-sm font-medium text-dirty-white dark:text-white">Komentar:</label>
                        <textarea id="text" onChange={(e) => setNewComment(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-h-[200px] p-2 m-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className={`${newComment ? 'bg-blue-700' : 'pointer-events-none bg-blue-300/50'} text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}>Ostavi komentar</button>
                    </form> 
                    :
                    <div>
                        Ulogirajte se kako biste ostavili komentar!
                    </div>
                }
            </div>
        </div>  
    );           
}

export default CommentBox;