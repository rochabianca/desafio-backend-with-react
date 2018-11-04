import createHistory from "history/createBrowserHistory";

const isInBrowser = typeof window !== "undefined";

export default (isInBrowser ? createHistory() : {});
