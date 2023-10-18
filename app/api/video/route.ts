import { connect } from '@/db/config';
import { NextRequest, NextResponse } from 'next/server';
import Video from '@/models/Video';
import extractVideoId from '@/utils/extractVideoId';

// Connect DB..
connect();

/**
 * ---- Getting All Videos -----
 * @param request 
 * @returns 
 */
export const GET = async (_request: NextRequest) => {
    try {
        const videos = await Video.find().sort({createdAt: -1});
        if (!videos.length) return NextResponse.json({
            success: false,
            message: 'No Videos!',
        }, { status: 204 });

        return NextResponse.json({
            success: true,
            videos,
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: 'Server Error When Getting Videos',
            error: error?.message,
        }, { status: 500 });
    }
};

/**
 * ------ Saving Video ------
 * @param request 
 * @returns 
 */
export const POST = async (request: NextRequest) => {
    try {
        const reqBody = await request.json();
        const { title, zilla, link } = reqBody;
        const videoId = extractVideoId(link);
        
        const video = new Video({ title, zilla, videoId });
        if (!video) return NextResponse.json({
            success: false,
            message: 'Video can not upload!',
        }, { status: 400 });
        await video.save();

        return NextResponse.json({
            success: true,
            message: 'Video Saved Successfully!',
            video,
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: 'Server Error When Posting Video',
            error: error?.message,
        }, {status: 500});
    }
};

