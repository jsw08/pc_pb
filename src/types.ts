export type Ntfy = {
    id: string;
    time: number;
    expires: number;
    event: "open" | "keepalive" | "message" | "poll_request";
    topic: string;
    message?: string;
    title?: string;
    tags?: string[];
    click?: string;
    actions?: any[];
    attachment?: any;
};
export type State = "on" | "off" | "loading" | "error";