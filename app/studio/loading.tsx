"use client";

import config from "./../../sanity.config"
import NextStudioLoading from "next-sanity/studio/loading";

function Loading () {
    return <NextStudioLoading config={config} />
}
export default Loading

// export default function Loading() {
//     return <NextStudioLoading config={config} />;
// }