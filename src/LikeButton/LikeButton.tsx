import { useState } from "react";
import styles from "./LikeButton.module.css";
import Heart from "./Heart/Heart";
import Loader from "./Loader/Loader";

type LikeButtonProps = {
    errorHandler: (message: string) => void
};

function LikeButton(props: LikeButtonProps) {
    const baseURL: string = "https://www.greatfrontend.com/api/questions/like-button";
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    function toggleHeartColor() {
        if (!isLiked) {
            setIsButtonHovered(!isButtonHovered);
        }
    }

    async function callLikeDislikeAPI() {
        setIsLoading(true);
        try {
            const response = await fetch(baseURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: isLiked ? "unlike" : "like"
                })
            });

            if (response.ok) {
                setIsLiked(!isLiked);
            }
            else {
                const parsedResponse = await response.json();
                props.errorHandler(parsedResponse.message);
            }
            setIsLoading(false);
        } catch(error) {
            props.errorHandler("Something went wrong");
        }
    }

    return (
        <button 
            className={isLiked ? `${styles.btnContainer} ${styles.btnLiked}` : `${styles.btnContainer}`}
            onMouseEnter={toggleHeartColor}
            onMouseLeave={toggleHeartColor}
            disabled={isLoading}
            onClick={callLikeDislikeAPI}
        >
            {isLoading ? (
                <Loader 
                    color={isLiked ? "white" : "gray"}
                    size={20} 
                    thickness={2} 
                />
            ) : (
                <Heart 
                    color={isLiked ? "white" : isButtonHovered ? "red" : "gray"}
                    size={30} 
                />
            )}
            <span>{isLiked ? "Liked" : "Like"}</span>
        </button>
    )
}

export default LikeButton;