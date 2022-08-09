import { match } from "path-to-regexp";
import type { History } from "history";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const Context = createContext({ path: "/" });

export function PetiteRouter(options: { history: History }) {
  const { history } = options;

  function Route<TPath extends string>(props: {
    path: TPath;
    exact?: boolean;
    children: ReactNode | ((params: RouteParameters<TPath>) => ReactNode);
  }) {
    const parent = useContext(Context);

    const path = joinPath(parent.path, props.path);

    const [location, setLocation] = useState(history.location);
    const unlisten = history.listen((h) => {
      setLocation(h.location);
    });

    useEffect(() => unlisten);

    const matcher = match(path + (props.exact ? "" : "(.*)"));

    const res = matcher(
      `${location.pathname}?${location.search}${location.hash}`
    );

    return res === false ? null : (
      <Context.Provider
        value={{
          path,
        }}
      >
        {typeof props.children === "function"
          ? props.children(res.params as any)
          : props.children}
      </Context.Provider>
    );
  }

  return {
    history,
    Route,
  };
}

function joinPath(path1: string, path2: string) {
  return (
    (path1[0] === "/" ? path1 : "/" + path1) +
    (path2[0] === "/" ? path2.slice(1) : path2)
  );
}

export type RouteParameters<Route extends string> = string extends Route
  ? ParamsDictionary
  : Route extends `${string}(${string}`
  ? ParamsDictionary //TODO: handling for regex parameters
  : Route extends `${string}:${infer Rest}`
  ? (GetRouteParameter<Rest> extends never
      ? ParamsDictionary
      : GetRouteParameter<Rest> extends `${infer ParamName}?`
      ? { [P in ParamName]?: string }
      : { [P in GetRouteParameter<Rest>]: string }) &
      (Rest extends `${GetRouteParameter<Rest>}${infer Next}`
        ? RouteParameters<Next>
        : unknown)
  : {};

interface ParamsDictionary {
  [key: string]: string;
}

type RemoveTail<
  S extends string,
  Tail extends string
> = S extends `${infer P}${Tail}` ? P : S;
type GetRouteParameter<S extends string> = RemoveTail<
  RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>,
  `.${string}`
>;
