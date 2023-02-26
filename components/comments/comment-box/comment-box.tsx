import { useEffect, useState } from "react";
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

    useEffect(() => {
        axios.get(
            `http://ec2-3-70-46-221.eu-central-1.compute.amazonaws.com:3000/comments/load/?slug=${slug}`
        ).then(response => {
            setCommentArray({array: response.data.data});
        }).catch(error => console.log(error))
    }, [slug]);

    return (
        <div className="bg-slate-800/75 h-[500px] rounded-[32px]">
            <div>
                {
                    !commentArray.array.length && 
                    <div>
                        Nema komentara? Budite prvi koji ce ostaviti komentar!
                    </div>
                }
                {
                    commentArray.array.map((comment) => { 
                        return (
                        <Comment username={comment.username} content={comment.content} key={`${comment.username}-comment-${slug}`} />
                        )}
                    )
                }
            </div>
            <div>
                <form className="p-5">
                <div className="mb-6">
                    <h2>Komentari:</h2>
                    <label className="block m-2 text-sm font-medium text-dirty-white dark:text-white">Tvoj email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></input>
                </div>
                <div className="mb-6">
                    <label className="block m-2 text-sm font-medium text-dirty-white dark:text-white">Komentar</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ostavi komentar</button>
                </form>
            </div>
        </div>  
    );           
}

export default CommentBox;