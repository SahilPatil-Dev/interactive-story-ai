import { useEffect, useState } from "react";
import GlassCard from "../ui/GlassCard";

import StoryHeader from "./StoryHeader";
import StoryText from "./StoryText";
import StoryOptions from "./StoryOptions";
import StoryEnding from "./StoryEnding";
import StoryControls from "./StoryControls";

export default function StoryContainer({ story, onNewStory }) {
    const [nodeId, setNodeId] = useState(null);
    const [node, setNode] = useState(null);

    if (!story || !story.root_node || !story.all_nodes) {
        return null;
    }

    useEffect(() => {
        if (story?.root_node) {
            setNodeId(story.root_node.id);
        }
    }, [story]);

    useEffect(() => {
        if (!nodeId) return;

        const current = story.all_nodes[nodeId];
        if (!current) return;

        setNode(current);
    }, [nodeId, story]);

    const isEnding = node?.is_ending;
    const isWinning = node?.is_winning_ending;

    return (
        <div className="flex justify-center px-4 py-10">

            <div className="w-full max-w-3xl">

                <StoryHeader title={story.title} />

                <GlassCard>

                    {node && (
                        <>
                            <StoryText content={node.content} />

                            {isEnding ? (
                                <StoryEnding isWinning={isWinning} />
                            ) : (
                                <StoryOptions
                                    options={node.options}
                                    onSelect={setNodeId}
                                />
                            )}
                        </>
                    )}

                    <StoryControls
                        onRestart={() => setNodeId(story.root_node.id)}
                        onNew={onNewStory}
                    />

                </GlassCard>

            </div>

        </div>
    );
}