"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image } from "@nextui-org/react";

interface feedProps {
    title: string;
    zilla: string;
    videoId: string;
};

export default function Feed({ title, zilla, videoId }: feedProps) {
    const [isFollowed, setIsFollowed] = React.useState(false);

    const staticVideoID = '9gFmUHz3-Qw';

    return (
        <Card className="w-[30vw] h-[auto] m-5">
            {/* ==== Card Header ==== */}
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>

            {/* ==== Card Body ==== */}
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {title}
                </p>
                <span className="pt-2">
                    #{zilla}
                    <span className="py-2" aria-label="computer" role="img">
                        💻
                    </span>
                </span>

                <span className="pt-2">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Embedded Video"
                    ></iframe>
                </span>
            </CardBody>

            {/* ==== Card Footer ==== */}
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    );
}