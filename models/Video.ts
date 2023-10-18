import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    zilla: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
})

const Video = mongoose.models.videos || mongoose.model("Video", videoSchema);

export default Video;