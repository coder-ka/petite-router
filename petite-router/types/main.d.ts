import React, { ReactNode } from "react";
export declare function PetiteRouter(options?: {
    history: import("history").BrowserHistory;
}): {
    history: import("history").BrowserHistory;
    Route: <TPath extends string>(props: {
        path: TPath;
        exact?: boolean | undefined;
        children: React.ReactNode | ((params: RouteParameters<TPath>) => ReactNode);
    }) => JSX.Element | null;
};
export declare type RouteParameters<Route extends string> = string extends Route ? ParamsDictionary : Route extends `${string}(${string}` ? ParamsDictionary : Route extends `${string}:${infer Rest}` ? (GetRouteParameter<Rest> extends never ? ParamsDictionary : GetRouteParameter<Rest> extends `${infer ParamName}?` ? {
    [P in ParamName]?: string;
} : {
    [P in GetRouteParameter<Rest>]: string;
}) & (Rest extends `${GetRouteParameter<Rest>}${infer Next}` ? RouteParameters<Next> : unknown) : {};
interface ParamsDictionary {
    [key: string]: string;
}
declare type RemoveTail<S extends string, Tail extends string> = S extends `${infer P}${Tail}` ? P : S;
declare type GetRouteParameter<S extends string> = RemoveTail<RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>, `.${string}`>;
export {};
//# sourceMappingURL=main.d.ts.map