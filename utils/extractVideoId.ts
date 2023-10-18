const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^?&"'>]+)/);
    if (match) {
        return match[1];
    } else {
        return null; // Video ID not found
    }
};

export default extractVideoId;